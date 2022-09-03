import React, { useEffect } from 'react';
import classes from './AudioButton.module.scss';
import SERVER from '../../../common/constants/serverConst';

const AudioButton = (props: { audio: string; word: string; nextQ?: number }) => {
  const playAudio = (type: string) => {
    const audio = document.querySelector(`.audio__${type}`) as HTMLAudioElement;
    audio.play();
  };

  // useEffect(() => {
  //   const track = document.querySelector(`.audio__${props.word}`) as HTMLAudioElement;
  //   console.log('pay', track);
  //   track.play();
  // }, [props.nextQ]);

  return (
    <div className={classes.volume} onClick={() => playAudio(props.word)}>
      <img src="../../../assets/icons/volume.svg" alt="" />
      <audio className={`audio__${props.word}`} src={`${SERVER}/${props.audio}`} />
    </div>
  );
};

export default AudioButton;
