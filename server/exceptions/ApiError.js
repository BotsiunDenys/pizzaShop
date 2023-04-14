export class ApiError extends Error {
  status;
  error;

  constructor(status, message, errors = []) {
    super(message);
    this.status = status;
    this.errors = errors;
  }

  static UnathorizedError() {
    return new ApiError(401, "User is not authorized");
  }
  
  static BadRequest(message, errors = []) {
    return new ApiError(400, message, errors);
  }
}
