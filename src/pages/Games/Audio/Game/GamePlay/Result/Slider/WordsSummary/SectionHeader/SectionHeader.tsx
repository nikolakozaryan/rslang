import React from 'react';
import ISectionHeader from './Interface';
import classes from './SectionHeader.module.scss';

const SectionHeader = ({ type, amount }: ISectionHeader) => {
  const style = { background: type === 'correct' ? '#58C87E' : '#FF6862' };

  return (
    <div className={classes.header}>
      <div className={classes.text}>{type === 'error' ? 'Ошибок' : 'Знаю'}</div>
      <div style={style} className={classes.amount}>
        {amount}
      </div>
    </div>
  );
};

export default SectionHeader;
