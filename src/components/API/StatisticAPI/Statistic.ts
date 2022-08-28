type Options = {
  learnedWords: string;
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
