type Options = {
    wordsPerDay: number;
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
