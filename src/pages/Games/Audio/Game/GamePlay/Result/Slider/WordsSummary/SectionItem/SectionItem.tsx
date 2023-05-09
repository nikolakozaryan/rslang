import { MouseEvent } from 'react';
import ISectionItem from './Interface';
import classes from './SectionItem.module.scss';
import SERVER from '../../../../../../../../../common/constants/serverConst';

const SectionItem = ({ word }: ISectionItem) => {
  const handler = (event: MouseEvent) => {
    const target = event.target as HTMLDivElement;
    const parent = target.parentElement as HTMLDivElement;
    const audio = parent.querySelector('audio') as HTMLAudioElement;
    audio.play();
  };

  return (
    <div className={classes.itemContainer}>
      <audio className={classes.audio} src={`${SERVER}/${word.audio}`} />
      <div onClick={(e) => handler(e)} className={classes.audioButton} />
      <div className={classes.textContent}>
        <span>{word.word}</span> - <span className={classes.wordTranslate}>{word.wordTranslate}</span>
      </div>
    </div>
  );
};

export default SectionItem;
