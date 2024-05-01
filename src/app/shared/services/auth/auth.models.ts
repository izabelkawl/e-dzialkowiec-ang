export type PermissionsTypes = 'ADMIN' | 'GUEST' | 'GARDENER';

export interface AuthenticationRequest {
  password: string;
  email: string;
}

export interface AuthenticationResponse {
  jwt: string;
}

export interface IUserData {
  email: string;
  name: string;
  lastName: string;
  role: PermissionsTypes;
  iat: number;
}
