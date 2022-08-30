export type User = {
  name: string;
  email: string;
  password: string;
  userID?: string;
  token?: string;
};

export type CreateUserPayload = {
  name: string;
  email: string;
  password: string;
};

export type CreateUserResponse = {
  id: string;
  name: string;
  email: string;
};

export type GetUserResponse = {
  id: string;
  name: string;
  email: string;
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

export type NewUserTokenResponse = {
  token: string;
  refreshToken: string;
};

export default interface IUser {
  deleteUser: (id: string, token: string) => Promise<User>;
  updateUser: (id: string, token: string, user: User) => Promise<User>;
  createUser: (user: CreateUserPayload) => Promise<CreateUserResponse>;
  getUser: (id: string, token: string) => Promise<GetUserResponse>;
  getNewUserToken: (id: string, token: string) => Promise<NewUserTokenResponse>;
  signInUser: (user: User) => Promise<SignInUserResponse>;
}
