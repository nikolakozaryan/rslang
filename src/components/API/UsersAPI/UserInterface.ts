export type UpdateUserPayload = {
  email?: string;
  password?: string;
  name?: string;
};

export type UserResponse = {
  id: string;
  name: string;
  email: string;
};

export type NewUserTokenResponse = {
  token: string;
  refreshToken: string;
};

export type CreateUserPayload = {
  name: string;
  email: string;
  password: string;
};

export type SignInUserPayload = {
  email: string;
  password: string;
};

export type SignInUserResponse = {
  message: string;
  token: string;
  refreshToken: string;
  userId: string;
  name: string;
};
export default interface IUser {
  createUser: (user: CreateUserPayload) => Promise<UserResponse>;
  signInUser: (user: SignInUserPayload) => Promise<SignInUserResponse>;

  deleteUser: (id: string, token: string) => Promise<void>;
  updateUser: (id: string, token: string, user: UpdateUserPayload) => Promise<UserResponse>;
  getNewUserToken: (id: string, token: string) => Promise<NewUserTokenResponse>;
  getUser: (id: string, token: string) => Promise<UserResponse>;
}
