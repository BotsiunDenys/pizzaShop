import bcrypt from "bcryptjs";
import User from "../models/UserModel.js";
import Role from "../models/RoleModel.js";
import TokenService from "./TokenService.js";
import { UserDto } from "../dtos/UserDto.js";
import { ApiError } from "../exceptions/ApiError.js";

class UserService {
  async registration(username, password) {
    const candidate = await User.findOne({ username });
    if (candidate) {
      throw ApiError.BadRequest(`User ${username} is already exists`);
    }
    const hashPassword = bcrypt.hashSync(password, 7);
    const userRole = await Role.findOne({ value: "user" });
    const user = await User.create({
      username,
      password: hashPassword,
      roles: [userRole.value],
    });
    const userDto = new UserDto(user);
    const tokens = TokenService.generateTokens({ ...userDto });
    await TokenService.saveToken(userDto.id, tokens.refreshToken);
    return {
      ...tokens,
      user: userDto,
    };
  }
  async login(username, password) {
    const user = await User.findOne({ username });
    if (!user) {
      throw ApiError.BadRequest(`User ${username} is not found`);
    }
    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
      throw ApiError.BadRequest("Password is wrong");
    }
    const userDto = new UserDto(user);
    const tokens = TokenService.generateTokens({ ...userDto });
    await TokenService.saveToken(userDto.id, tokens.refreshToken);
    return {
      ...tokens,
      user: userDto,
    };
  }

  async logout(refreshToken) {
    const token = await TokenService.removeToken(refreshToken);
    return token;
  }

  async refresh(refreshToken) {
    if (!refreshToken) {
      throw ApiError.UnathorizedError();
    }
    const userData = TokenService.validateRefreshToken(refreshToken);
    const tokenFromDb = await TokenService.findToken(refreshToken);
    if (!userData || !tokenFromDb) {
      throw ApiError.UnathorizedError();
    }
    const user = await User.findById(userData.id);
    const userDto = new UserDto(user);
    const tokens = TokenService.generateTokens({ ...userDto });
    await TokenService.saveToken(userDto.id, tokens.refreshToken);
    return {
      ...tokens,
      user: userDto,
    };
  }
}

export default new UserService();
