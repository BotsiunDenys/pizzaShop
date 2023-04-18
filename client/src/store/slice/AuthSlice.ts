import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AuthResponse } from "../../models/response/AuthResponse";
import axios from "axios";
import api, { API_URL } from "../../http";
import { User } from "../../models/response/User";

interface AuthState {
  user: User | null;
  isLogged: boolean;
  loading: boolean;
  error: string;
}

const initialAuthState: AuthState = {
  user: null,
  isLogged: false,
  loading: false,
  error: "",
};

interface AuthDetails {
  username: string;
  password: string;
}

export const login = createAsyncThunk<AuthResponse, AuthDetails>(
  "auth/login",
  async ({ username, password }) => {
    const response = await api.post("/login", { username, password });
    localStorage.setItem("token", response.data.accessToken);
    return response.data;
  }
);

export const registration = createAsyncThunk<AuthResponse, AuthDetails>(
  "auth/registration",
  async (username, password) => {
    const response = await api.post("/registration", { username, password });
    localStorage.setItem("token", response.data.accessToken);
    return response.data;
  }
);

export const logout = createAsyncThunk<AuthResponse>(
  "auth/logout",
  async () => {
    const response = await api.post("/logout");
    localStorage.removeItem("token");
    return response.data;
  }
);

export const checkAuth = createAsyncThunk<AuthResponse>(
  "auth/checkAuth",
  async () => {
    const response = await axios.get(`${API_URL}/refresh`, {
      withCredentials: true,
    });
    localStorage.setItem("token", response.data.accessToken);
    return response.data;
  }
);

const AuthSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true;
      state.error = "";
      state.isLogged = false;
      state.user = null;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.isLogged = true;
      state.user = action.payload.user;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.isLogged = false;
      state.user = null;
      if (action.error.message) {
        console.log(action);
        
        state.error = action.error.message;
      }
    });
    builder.addCase(registration.pending, (state) => {
      state.loading = true;
      state.error = "";
      state.isLogged = false;
      state.user = null;
    });
    builder.addCase(registration.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.isLogged = true;
      state.user = action.payload.user;
    });
    builder.addCase(registration.rejected, (state, action) => {
      state.loading = false;
      state.isLogged = false;
      state.user = null;
      if (action.error.message) {
        state.error = action.error.message;
      }
    });
    builder.addCase(logout.pending, (state) => {
      state.loading = true;
      state.error = "";
      state.isLogged = false;
      state.user = null;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.loading = false;
      state.error = "";
      state.isLogged = false;
      state.user = null;
    });
    builder.addCase(logout.rejected, (state, action) => {
      state.loading = false;
      state.isLogged = false;
      state.user = null;
      if (action.error.message) {
        state.error = action.error.message;
      }
    });
    builder.addCase(checkAuth.pending, (state) => {
      state.loading = true;
      state.error = "";
      state.isLogged = false;
      state.user = null;
    });
    builder.addCase(checkAuth.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.isLogged = true;
      state.user = action.payload.user;
    });
    builder.addCase(checkAuth.rejected, (state, action) => {
      state.loading = false;
      state.isLogged = false;
      state.user = null;
      if (action.error.message) {
        state.error = action.error.message;
      }
    });
  },
});

export default AuthSlice.reducer;
