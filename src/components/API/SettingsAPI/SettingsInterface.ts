import Settings from './Settings';

export default interface ISettings {
    updateUserSettings: (object: Settings) => Promise<Settings>;
    getSettings: (id: string, token: string) => Promise<Settings>;
}
