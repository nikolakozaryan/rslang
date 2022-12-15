import React, { useEffect, useState } from 'react';
import Difficulty from './Difficulty/Difficulty';
import Games from './Games/Games';
import WordCarousel from './WordCarousel/WordCarousel';
import DictionaryAPI from '../../components/API/DictionaryAPI/DictionaryAPI';
import Pagination from './Pagination/Pagination';
import classes from './Vocabulary.module.scss';
import Word from '../../components/API/DictionaryAPI/Word';
import DetailedWord from '../../components/DetailedWord/DetailedWord';

const Vocabulary = () => {
  const [difficultyLevel, setDifficultyLevel] = useState(0);
  const [accentColor, setAccentColor] = useState('');
  const [words, setWords] = useState<Word[]>([]);
  const [wordId, setWordId] = useState('');
  const [curWord, setCurWord] = useState<Word>({} as Word);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  async function downloadWords(pg: number, lvl: number) {
    setIsLoading(true);
    const resp = await DictionaryAPI.getWordsArray(pg, lvl);
    setWords(resp);
    setWordId(resp[0].id);
    setIsLoading(false);
  }

  async function downloadWord(wordID: string) {
    const resp = await DictionaryAPI.getWordByID(wordID);
    setCurWord(resp);
  }

  useEffect(() => {
    downloadWords(page, difficultyLevel);
  }, [page, difficultyLevel]);

  useEffect(() => {
    downloadWord(wordId);
  }, [wordId]);

  return (
    <div className={classes.main}>
      <h2 className={classes.header}>Учебник</h2>
      <Difficulty
        difficultyLevel={difficultyLevel}
        setDifficultyLevel={setDifficultyLevel}
        setPage={setPage}
        setAccentColor={setAccentColor}
      />
      <WordCarousel
        accentColor={accentColor}
        difficultyLevel={difficultyLevel}
        page={page}
        words={words}
        setWord={setWordId}
      />
      <DetailedWord word={JSON.stringify(curWord)} />
      <Pagination accentColor={accentColor} page={page} setPage={setPage} />
      <Games />
    </div>
  );
};

export default Vocabulary;
