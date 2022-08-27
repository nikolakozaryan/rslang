type Options = {
    learnedWords: number;
    optional: {
        testFieldString?: string;
        testFieldBoolean?: boolean;
    };
};
type Statistic = {
    userId: string;
    token: string;
    body: Options;
};
export default Statistic;
