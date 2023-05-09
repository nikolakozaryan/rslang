import React from 'react';
import classes from './AudioButton.module.scss';
import SERVER from '../../../../common/constants/serverConst';

const AudioButton = (props: { audio: string; word: string; nextQ?: number; type?: boolean }) => {
  const playAudio = (type: string) => {
    const audio = document.querySelector(`.audio__${type}`) as HTMLAudioElement;
    audio.play();
  };

  return (
    <div
      className={[classes.volume, props.type && classes.volumeInGame].join(' ')}
      onClick={() => playAudio(props.word)}
    >
      <img src="../../../assets/icons/volume.svg" alt="" />
      <audio className={`audio__${props.word}`} src={`${SERVER}/${props.audio}`} />
    </div>
  );
};

export default AudioButton;
