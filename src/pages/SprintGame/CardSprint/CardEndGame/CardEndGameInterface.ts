type Word = {
    id: string;
    group: number;
    page: number;
    word: string;
    image: string;
    wordTranslate: string;
};
export default interface ICardInGame {
    mistakes: Word[];
    learned: Word[];
    done: boolean[][];
    correct: boolean[][];
    refresh: (buttonAnswer: boolean) => void;
    refreshAnswer: (correct: boolean) => void;
    ourGuess: string;
    wordGuess: string;
    score: number;
    game: boolean;
    backToGame: () => void;
}
