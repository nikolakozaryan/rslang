import React from 'react';
import classes from './AudioButton.module.scss';
import SERVER from '../../../../../../../common/constants/serverConst';

interface IAudio {
  src: string;
}

const AudioButton = ({ src }: IAudio) => {
  const playAudio = () => {
    const audio = document.querySelector('.audio') as HTMLAudioElement;
    audio.play();
  };

  return (
    <div className={classes.audio__button} onClick={playAudio}>
      <audio style={{ display: 'none' }} className="audio" src={`${SERVER}/${src}`} autoPlay />
    </div>
  );
};

export default AudioButton;
