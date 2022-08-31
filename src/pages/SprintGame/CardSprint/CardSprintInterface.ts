import { Dispatch, KeyboardEventHandler, SetStateAction } from 'react';
import Wordgame from '../SprintGame/typewordgames';

export default interface ICardSprint {
    done: boolean[][];
    correct: boolean[][];
    refresh: (buttonAnswer: boolean) => void;
    refreshAnswer: (correct: boolean) => void;
    ourGuess: string;
    wordGuess: string;
    score: number;
    game: boolean;
    mistakes: Wordgame[];
    learned: Wordgame[];
    backToGame: () => void;
}
