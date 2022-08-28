import User from './User';
import UserAuthor from './UserAthorization';

export default interface IUser {
  createUserObject: (name: string, email: string, password: string) => User;
  deleteUser: (id: string, token: string) => Promise<User>;
  updateUser: (id: string, token: string, user: User) => Promise<User>;
  createUser: (user: User) => Promise<User>;
  getUser: (id: string, token: string) => Promise<User>;
  getNewUserToken: (id: string, token: string) => Promise<User>;
  signInUser: (user: User) => Promise<UserAuthor>;
}
