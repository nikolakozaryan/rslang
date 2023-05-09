import { Dispatch, SetStateAction } from 'react';
import classes from './ArrowButton.module.scss';

type Direction = 'left' | 'right';

interface IDirection {
  direction: Direction;
  frame: number;
  setFrame: Dispatch<SetStateAction<number>>;
}

const arrowListener = ({ direction, frame, setFrame }: IDirection) => {
  const carousel = document.querySelector('.inner') as HTMLElement;
  const { style } = carousel;

  let curFrame = frame;
  if (direction === 'left' && frame > 0) curFrame -= 1;
  else if (direction === 'right' && frame < 7) curFrame += 1;

  setFrame(curFrame);
  style.transform = `translateX(-${curFrame * 38}rem)`;
};

const disableArrow = (frame: number, type: Direction) =>
  (frame === 0 && type === 'left') || (frame === 7 && type === 'right') ? classes.disabled : '';

const ArrowButton = (settings: IDirection) => (
  <span
    onClick={() => arrowListener(settings)}
    className={`${disableArrow(settings.frame, settings.direction)} ${classes.button} ${
      classes[`button_${settings.direction}`]
    }`}
  />
);

export default ArrowButton;
