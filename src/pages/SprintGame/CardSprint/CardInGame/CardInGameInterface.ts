export default interface ICardInGame {
    done: boolean[][];
    correct: boolean[][];
    refresh: (buttonAnswer: boolean) => void;
    refreshAnswer: (correct: boolean) => void;
    ourGuess: string;
    wordGuess: string;
    score: number;
}
