import React, { useEffect, useState } from 'react';
import Difficulty from './Difficulty/Difficulty';
import Games from './Games/Games';
import WordCarousel from './WordCarousel/WordCarousel';
import DictionaryAPI from '../../components/API/DictionaryAPI/DictionaryAPI';
import classes from './Vocabulary.module.scss';
import Word from '../../components/API/DictionaryAPI/Word';
import DetailedWord from '../../components/DetailedWord/DetailedWord';

const Vocabulary = () => {
  const [accentColor, setAccentColor] = useState('');
  const [words, setWords] = useState<Word[]>([]);
  const [curWordID, setCurWordID] = useState('5e9f5ee35eb9e72bc21af4a0');
  const [curWord, setCurWord] = useState<Word>({} as Word);
  const [curLevel, setCurLevel] = useState(0);
  const [page, setPage] = useState(0);

  async function downloadWords(pg: number, lvl: number) {
    const resp = await DictionaryAPI.getWordsArray(pg, lvl);
    setWords(resp);
    setCurWordID(resp[0].id);
  }

  async function downloadWord(wordID: string) {
    const resp = await DictionaryAPI.getWordByID(wordID);
    setCurWord(resp);
  }

  useEffect(() => {
    downloadWords(page, curLevel);
  }, [page, curLevel]);

  useEffect(() => {
    downloadWord(curWordID);
  }, [curWordID]);

  return (
    <>
      <h2 className={classes.header}>Учебник</h2>
      <Difficulty curLevel={curLevel} setAccentColor={setAccentColor} setCurLevel={setCurLevel} />
      <WordCarousel color={accentColor} curLevel={curLevel} words={words} setWord={setCurWordID} />
      <DetailedWord word={JSON.stringify(curWord)} />
      <Games />
    </>
  );
};

export default Vocabulary;
