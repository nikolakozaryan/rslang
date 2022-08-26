export default interface IWord {
    group: number;
    page: number;
    word: string;
    image: string;
    audio: string;
    audioMeaning: string;
    audioExample: string;
    textMeaning: string;
    textExample: string;
    transcription: string;
    __v: number;
    textExampleTranslate: string;
    textMeaningTranslate: string;
    wordTranslate: string;
}