export type UpdateUserPayload = {
  email?: string;
  password?: string;
  name?: string;
};

export type UpdateUserResponse = {
  id: string;
  name: string;
  email: string;
};

export type GetUserResponse = {
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

export type CreateUserResponse = {
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
export default interface IUser {
  createUser: (user: CreateUserPayload) => Promise<CreateUserResponse>;
  signInUser: (user: SignInUserPayload) => Promise<SignInUserResponse>;

  deleteUser: (id: string, token: string) => Promise<void>;
  updateUser: (id: string, token: string, user: UpdateUserPayload) => Promise<UpdateUserResponse>;
  getNewUserToken: (id: string, token: string) => Promise<NewUserTokenResponse>;
  getUser: (id: string, token: string) => Promise<GetUserResponse>;
}
