type Options = {
    wordsPerDay: string;
    optional?: {
        testFieldString?: string;
        testFieldBoolean?: boolean;
    };
};
type Settings = {
    userId: string;
    token: string;
    body: Options;
};
export default Settings;
