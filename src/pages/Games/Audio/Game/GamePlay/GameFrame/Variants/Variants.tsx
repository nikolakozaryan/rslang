import React, { useEffect, useState } from 'react';
import IVariants from './Interface';
import classes from './Variants.module.scss';
import Variant from './Variant/Variant';
import Word from '../../../../../../../components/API/DictionaryAPI/Word';
import Button from '../../../../../../../components/Button/Button';

interface IResult {
  word: Word;
  isCorrect: boolean;
}

const Variants = ({
  remainingWords,
  variants,
  currentWord,
  correct,
  error,
  points,
  streak,
  setCorrect,
  setError,
  setPoints,
  setStreak,
  setRemainingWords,
  setIsSettled,
}: IVariants) => {
  const [option, setOption] = useState(-1);
  const [isChosen, setIsChosen] = useState(false);
  const [result, setResult] = useState<IResult>();

  // keyboard event handler
  document.onkeyup = (event) => {
    const { code } = event;
    switch (code) {
      case 'Digit1':
        setOption(0);
        break;
      case 'Digit2':
        setOption(1);
        break;
      case 'Digit3':
        setOption(2);
        break;
      case 'Digit4':
        setOption(3);
        break;
      case 'Digit5':
        setOption(4);
        break;
      case 'Digit6':
        setOption(5);
        break;
      case 'ArrowLeft':
        if (option > 0) setOption(option - 1);
        break;
      case 'ArrowRight':
        if (option < 5) setOption(option + 1);
        break;
      case 'Enter':
        if (option !== -1) {
          (document.querySelectorAll('.variant')[option] as HTMLDivElement).click();
        } else {
          (document.querySelector('.button') as HTMLButtonElement).click();
        }
        setOption(-1);
        break;
      default: {
        console.log('Inactive buttons');
      }
    }
  };

  useEffect(() => {
    const elements = document.querySelectorAll('.variant');

    elements.forEach((item, index) => {
      (item as HTMLDivElement).classList.remove('variant_active');
      if (index === option) {
        (item as HTMLDivElement).classList.add('variant_active');
      }
    });
  }, [option]);

  // change variants colors on click
  const showCorrectAnswer = (id: string) => {
    const { style } = document.getElementById(id) as HTMLDivElement;
    style.background = '#58C87E';
  };

  const repaintVariants = (choice: HTMLDivElement, answer: Word) => {
    const { style } = choice;
    if (choice.id === 'unknown') {
      setResult({ isCorrect: false, word: currentWord });
    } else if (choice.id !== answer.id) {
      style.background = '#FF6862';
      setResult({ isCorrect: false, word: currentWord });
    } else {
      setResult({ isCorrect: true, word: currentWord });
    }
    showCorrectAnswer(answer.id);
  };

  // click event handlers
  const clickHandler = (event: React.MouseEvent) => {
    const target = event.target as HTMLDivElement;
    if (target.classList.contains('variant')) {
      setIsChosen(true);
      setIsSettled(true);
      repaintVariants(target, currentWord);
    }
  };

  const nextHandler = () => {
    document.querySelectorAll('.variant').forEach((item) => (item as HTMLDivElement).removeAttribute('style'));

    let curStreak = streak;
    if (result?.isCorrect) {
      setCorrect([result?.word, ...correct]);
      curStreak = streak + 1;
    } else {
      setError([(result as IResult).word, ...error]);
      curStreak = 0;
    }
    setStreak(curStreak);
    setPoints(points + 5 * curStreak);
    setRemainingWords(remainingWords.slice(1));
    setIsChosen(false);
    setIsSettled(false);
  };

  return (
    <>
      <div onClick={(e: React.MouseEvent) => clickHandler(e)} className={classes.variants__container}>
        {variants.map((variant) => (
          <Variant key={variant.id} variantData={variant} />
        ))}
      </div>
      {!isChosen ? (
        <div onClick={(e: React.MouseEvent) => clickHandler(e)} id="unknown" className={`variant ${classes.variant}`}>
          He знаю
        </div>
      ) : (
        <div onClick={() => nextHandler()} className={`button`}>
          <Button>
            <p className={classes.next}>Далее</p>
          </Button>
        </div>
      )}
    </>
  );
};

export default Variants;
