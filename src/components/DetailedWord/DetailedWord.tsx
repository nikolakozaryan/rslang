import React, { useEffect, useState } from 'react';
import Word from '../API/DictionaryAPI/Word';
import classes from './DetailedWord.module.scss';
import SERVER from '../../common/constants/serverConst';

interface IWord {
  word: string;
}

const DetailedWord = ({ word }: IWord) => {
  const [translate, setTranslate] = useState(true);
  const wordObject: Word = JSON.parse(word);

  const playAudio = (type: string) => {
    const audio = document.querySelector(`.audio__${type}`) as HTMLAudioElement;
    audio.play();
  };

  const showTranslation = () => {
    setTranslate(!translate);
  };

  const addToDifficult = () => {
    // add current word to difficult words
  };

  useEffect(() => {
    (document.querySelector('.meaning') as HTMLElement).innerHTML = wordObject.textMeaning;
    (document.querySelector('.example') as HTMLElement).innerHTML = wordObject.textExample;
  }, [word]);

  return (
    <div className={classes.card}>
      <img className={classes.img} src={`${SERVER}/${wordObject.image}`} alt="word-image" />

      <div className={classes.word__container}>
        <div className={classes.word__word}>{wordObject.word}</div>
        <div className={classes.play} onClick={() => playAudio('word')}></div>
      </div>

      {translate ? <div className={classes.word__translate}>{wordObject.wordTranslate}</div> : ''}
      <div className={classes.word__transcription}>{wordObject.transcription}</div>

      <div className={classes.phrases}>
        <div className={classes.meaning}>
          <h5 className={classes.header}>Значение</h5>
          <div onClick={() => playAudio('meaning')} className={`meaning ${classes.playable}`}></div>
          {translate ? <div>{wordObject.textMeaningTranslate}.</div> : ''}
        </div>
        <div className={classes.example}>
          <h5 className={classes.header}>Пример</h5>
          <div onClick={() => playAudio('example')} className={`example ${classes.playable}`}></div>
          {translate ? <div>{wordObject.textExampleTranslate}.</div> : ''}
        </div>
      </div>

      <div
        className={`${classes.icon} ${classes.translate}`}
        onClick={showTranslation}
        title="Показать/скрыть перевод"
      ></div>
      <div
        className={`${classes.icon} ${classes.add}`}
        onClick={addToDifficult}
        title='Добавить в "Сложные слова"'
      ></div>
      <audio className={`audio audio__word ${classes.audio}`} src={`${SERVER}/${wordObject.audio}`} />
      <audio className={`audio audio__meaning ${classes.audio}`} src={`${SERVER}/${wordObject.audioMeaning}`} />
      <audio className={`audio audio__example ${classes.audio}`} src={`${SERVER}/${wordObject.audioExample}`} />
    </div>
  );
};

export default DetailedWord;
