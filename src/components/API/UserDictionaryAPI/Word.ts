type Word = {
  difficulty: string;
  optional: { testFieldString: string; testFieldBoolean: boolean };
};

type NewUserWord = {
  userId: string;
  wordId: string;
  word?: Word;
  token: string;
};
export default NewUserWord;
