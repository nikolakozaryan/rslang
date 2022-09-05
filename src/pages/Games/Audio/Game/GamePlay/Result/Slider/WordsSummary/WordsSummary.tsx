import React from 'react';
import ISummary from './Interface';
import SectionHeader from './SectionHeader/SectionHeader';
import SectionItem from './SectionItem/SectionItem';
import classes from './WordsSummary.module.scss';

const WordsSummary = ({ error, correct }: ISummary) => {
  const handler = () => {
    (document.querySelector('.inner') as HTMLDivElement).removeAttribute('style');
  };

  return (
    <div className={classes.test}>
      <div onClick={handler} className={classes.arrow} />
      <div className={classes.container}>
        {error.length ? (
          <>
            <SectionHeader type={'error'} amount={error.length}></SectionHeader>
            {error.map((word) => (
              <SectionItem key={word.id} word={word} />
            ))}
            {correct.length ? <div className={classes.divider}></div> : ''}
          </>
        ) : (
          ''
        )}
        {correct.length ? (
          <>
            <SectionHeader type={'correct'} amount={correct.length}></SectionHeader>
            {correct.map((word) => (
              <SectionItem key={word.id} word={word} />
            ))}
          </>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default WordsSummary;
