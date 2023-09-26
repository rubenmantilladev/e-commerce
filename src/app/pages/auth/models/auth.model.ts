// [POST] https://api.escuelajs.co/api/v1/auth/login
export interface Login {
  email: string;
  password: string;
}
export interface LoginResponse {
  access_token: string;
  refresh_token: string;
}

// [GET] https://api.escuelajs.co/api/v1/auth/profile
// # Headers
// {
//   "Authorization": "Bearer {your access token}"
// }
// # Response
//
//   UserResponse

// NEW TOKEN
// [POST] https://api.escuelajs.co/api/v1/auth/refresh-token
//# Body
export interface RefreshToken {
  refreshToken: string;
}

// # Response
//
// LoginResponse

// The access token is valid for 20 days,
// and the refresh token is valid for 10 hours.
