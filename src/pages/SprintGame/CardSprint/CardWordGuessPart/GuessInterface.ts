type Word = {
    id: string;
    group: number;
    page: number;
    word: string;
    image: string;
    wordTranslate: string;
};
export default interface IGuess {
    GuessWord: Word;
    OurGuess: Word;
}
