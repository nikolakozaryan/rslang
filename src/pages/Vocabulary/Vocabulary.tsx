import React, { useEffect, useState } from 'react';
import Difficulty from './Difficulty/Difficulty';
import Games from './Games/Games';
import WordCarousel from './WordCarousel/WordCarousel';
import Pagination from './Pagination/Pagination';
import DictionaryAPI from '../../components/API/DictionaryAPI/DictionaryAPI';
import classes from './Vocabulary.module.scss';
import Word from '../../components/API/DictionaryAPI/Word';

const Vocabulary = () => {
  const [difficultyLevel, setDifficultyLevel] = useState(0);
  const [accentColor, setAccentColor] = useState('');
  const [words, setWords] = useState<Word[]>([]);
  const [wordId, setWordId] = useState('');
  const [page, setPage] = useState(0);

  async function downloadWords(pg: number, lvl: number) {
    const resp = await DictionaryAPI.getWordsArray(pg, lvl);
    setWords(resp);
  }

  useEffect(() => {
    downloadWords(page, difficultyLevel);
  }, [page, difficultyLevel]);

  return (
    <>
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
      <Pagination accentColor={accentColor} page={page} setPage={setPage} />
      <Games />
    </>
  );
};

export default Vocabulary;
