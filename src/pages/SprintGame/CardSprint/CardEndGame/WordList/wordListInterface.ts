type Word = {
    id: string;
    group: number;
    page: number;
    word: string;
    image: string;
    wordTranslate: string;
};
export default interface IWordList {
    mistakes: Word[];
    learned: Word[];
    side: string;
    header: string;
}
