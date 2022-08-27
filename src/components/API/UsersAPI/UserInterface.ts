import User from './User';

export default interface IUser {
    deleteUser: (id: string, token: string) => Promise<User>;
    updateUser: (id: string, token: string, user: unknown) => Promise<User>;
    createUser: (user: User) => Promise<User>;
    getUser: (id: string, token: string) => Promise<User>;
    getNewUserToken: (id: string, token: string) => Promise<User>;
    signInUser: (user: User) => Promise<User>;
}
