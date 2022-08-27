type Word = {
    difficulty: string;
    optional: { testFieldString: string; testFieldBoolean: boolean };
};

type NewWord = {
    userId: string;
    wordId: string;
    word?: Word;
    token: string;
};
export default NewWord;
