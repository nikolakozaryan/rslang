import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DIFFICULTY } from '../../../../common/constants/difficultyLevels';
import Difficulty from './Difficulty/Difficulty';
import classes from './SprintDifficulty.module.scss';

const SprintDifficulty = (props: { change: (difficultyLevel: number) => void }) => {
  const [active, setActive] = useState(false);
  return (
    <div className={classes.section}>
      <h3 className={classes.header}>Выберите уровень:</h3>
      <div className={classes.container}>
        {DIFFICULTY.map((item, index) => (
          <Difficulty difficulty={item.level} change={props.change} id={item.id} activeChange={setActive} key={index} />
        ))}
      </div>

      <Link className={classes.link} to="/sprintGame">
        <button className={[classes.button, active ? classes.active : classes.notActive].join(' ')}>Начать</button>
      </Link>
    </div>
  );
};

export default SprintDifficulty;
