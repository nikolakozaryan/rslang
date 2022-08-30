import React, { useEffect, useState } from 'react';
import Difficulty from './Difficulty/Difficulty';
import Games from './Games/Games';
import WordCarousel from './WordCarousel/WordCarousel';
import Pagination from './Pagination/Pagination';
import DictionaryAPI from '../../components/API/DictionaryAPI/DictionaryAPI';
import classes from './Vocabulary.module.scss';
import Word from '../../components/API/DictionaryAPI/Word';

const Vocabulary = () => {
  const [accentColor, setAccentColor] = useState('');
  const [words, setWords] = useState<Word[]>([]);
  const [curWordID, setCurWordID] = useState('');
  const [curLevel, setCurLevel] = useState(0);
  const [page, setPage] = useState(0);

  async function downloadWords(pg: number, lvl: number) {
    const resp = await DictionaryAPI.getWordsArray(pg, lvl);
    setWords(resp);
  }

  useEffect(() => {
    downloadWords(page, curLevel);
  }, [page, curLevel]);

  return (
    <>
      <h2 className={classes.header}>Учебник</h2>
      <Difficulty curLevel={curLevel} setAccentColor={setAccentColor} setCurLevel={setCurLevel} setPage={setPage} />
      <WordCarousel color={accentColor} curLevel={curLevel} words={words} setWord={setCurWordID} />
      <Pagination currentPage={page} onPageChange={setPage} />
      <Games />
    </>
  );
};

export default Vocabulary;
