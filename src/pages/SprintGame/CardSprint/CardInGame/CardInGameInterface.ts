type Word = {
    id: string;
    group: number;
    page: number;
    word: string;
    image: string;
    wordTranslate: string;
    audio: string;
};

export default interface ICardInGame {
    done: boolean[][];
    correct: boolean[][];
    refresh: (buttonAnswer: boolean) => void;
    refreshAnswer: (correct: boolean) => void;
    ourGuess: Word;
    wordGuess: Word;
    score: number;
}
