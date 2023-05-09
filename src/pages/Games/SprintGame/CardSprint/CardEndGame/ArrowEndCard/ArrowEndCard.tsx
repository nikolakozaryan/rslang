import { FC } from 'react';
import classes from './ArrowEndCard.module.scss';
import IArrowEnd from './ArrowEndInterface';

const ArrowEndCard: FC<IArrowEnd> = (props: IArrowEnd) => (
  <div onClick={props.slide} className={[classes.arrow, props.left ? classes.arrowStat : classes.arrowEnd].join(' ')}>
    <img
      className={classes.arrowStats}
      src={`../../../../assets/icons/${props.left ? 'left' : 'right'}ArrowGame.svg`}
      alt="arrow"
    />
  </div>
);

export default ArrowEndCard;
