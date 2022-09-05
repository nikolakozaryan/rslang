import React, { PropsWithChildren } from 'react';
import classes from './Difficulty.module.scss';
import IDifficulty from './DifficultyInterfase';

const Difficulty: React.FC<IDifficulty> = (props: IDifficulty) => {
  // const [difficultyCur, setDifficultyCur] = useState(0);
  const changeDif = (event: React.MouseEvent) => {
    const buttons = document.querySelectorAll('[data-button]');
    buttons.forEach((item) => (item.classList.contains(classes.active) ? item.classList.remove(classes.active) : 0));

    const target = event.target as HTMLAnchorElement;
    if (event.target !== event.currentTarget) {
      const span = event.target as HTMLSpanElement;
      span.parentElement?.classList.add(classes.active);
    } else {
      target.classList.add(classes.active);
    }
    props.activeChange(true);

    const level = Number(props.id);

    const a = () => {
      props.change(level);
    };
    a();
  };
  return (
    <a href="##" onClick={changeDif} data-button={'button'} className={classes.container} id={props.id.toString()}>
      <span className={classes.text}>{props.difficulty}</span>
    </a>
  );
};

export default Difficulty;
