import React, { PropsWithChildren } from 'react';
import classes from './WordList.module.scss';
import WordListHeader from './WordListHeader/WordListHeader';
import IWordList from './wordListInterface';

const WordList: React.FC<IWordList> = (props: IWordList) => {
    const mistakesFiltered = props.mistakes.filter((item) => item !== undefined);
    const learnedFiltered = props.learned.filter((item) => item !== undefined);

    return (
        <div>
            <WordListHeader learned={props.learned} mistakes={props.mistakes} side={props.side} header={props.header} />
            <ul>
                {props.side === 'mistakes'
                    ? mistakesFiltered.length !== 0 &&
                      mistakesFiltered.map((item) => {
                          console.log('mistr', item, props.mistakes, item.word);
                          return (
                              <li>
                                  <img src="../../../assets/icons/volumeEndGame.svg" alt="" />

                                  {` ${item.word} - ${item.wordTranslate} `}
                              </li>
                          );
                      })
                    : learnedFiltered.length !== 0 &&
                      learnedFiltered.map((item) => {
                          console.log('learn', item, props.learned, item.word);
                          return (
                              <li>
                                  <img src="../../../assets/icons/volumeEndGame.svg" alt="" />

                                  {` ${item.word} - ${item.wordTranslate} `}
                              </li>
                          );
                      })}
            </ul>
        </div>
    );
};

export default WordList;
