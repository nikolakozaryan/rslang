export default interface ICardSprint {
    done: boolean[][];
    correct: boolean[][];
    refresh: () => void;
}
