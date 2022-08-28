import Settings from './Settings';

export default interface ISettings {
  createSettings: (
    userId: string,
    token: string,
    wordsPerDay: string,
    testFieldString?: string,
    testFieldBoolean?: boolean
  ) => Settings;
  updateUserSettings: (object: Settings) => Promise<Settings>;
  getSettings: (id: string, token: string) => Promise<Settings>;
}
