import { Dispatch, SetStateAction } from 'react';

export default interface ICardButton {
    correct: boolean;
    refresh: (buttonAnswer: boolean) => void;
    refreshAnswer: (correct: boolean) => void;
}
