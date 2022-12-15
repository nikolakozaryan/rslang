import React from 'react';
import SERVER from '../../../../../../../common/constants/serverConst';
import classes from './DetailedAudioWord.module.scss';
import IDetailed from './Interface';

const DetailedAudioWord = ({ word }: IDetailed) => {
  const playAudio = () => {
    const audio = document.querySelector('.audio') as HTMLAudioElement;
    audio.play();
  };

  return (
    <div className={classes.container}>
      <img className={classes.img} src={`${SERVER}/${word.image}`} alt="image" />
      <div>
        <audio className={`audio ${classes.audio}`} src={`${SERVER}/${word.audio}`}></audio>
        <div className={classes.textContent}>
          <p className={classes.word}>{word.word}</p>
          <div onClick={playAudio} className={classes.audioButton} />
        </div>
      </div>
    </div>
  );
};

export default DetailedAudioWord;
