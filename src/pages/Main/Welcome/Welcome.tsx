import React from 'react';
import styles from './Welcome.module.scss';
import Button from '../../../components/button/Button';

const Welcome = (): JSX.Element =>
  <div className={styles.container}>
    <div className={styles.content}>
      <h1 className={styles.header}>Изучай иностранные языки вместе с <span className={styles.logo}>RSLang</span></h1>
        <p className={styles.text}>Электронный учебник с базой слов для изучения, мини-игры для их повторения, статистика для отслеживания прогресса.</p>
      <Button>Зарегистрироваться</Button>
    </div>
    <div className={styles.image}></div>
  </div>

export default Welcome;