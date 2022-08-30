import React from 'react';
import Section from '../../../components/Section/Section';
import AdvantageCard from '../../../components/AdvantageCard/AdvantageCard';
import IAdvantageCard from '../../../components/AdvantageCard/IAdvantageCard';

const Advantages = () => {
  const header = 'Возможности и преимущества';

  const data: IAdvantageCard[] = [
    {
      title: 'Электронный учебник',
      body: 'Изучите более 2500 тысяч иностранных слов в зависимости от уровня Вашей подготовки',
      imgURL: '../../../assets/images/Main/Advanatages/guide.png',
    },
    {
      title: 'Мини-игры',
      body: 'Запоминайте слова, тренируйте восприятие на слух с помощью двух увлекательных игр',
      imgURL: '../../../assets/images/Main/Advanatages/games.png',
    },
    {
      title: 'Статистика',
      body: 'Занимайтесь активно и проверяйте продвижение к цели в индивидуальной статистике',
      imgURL: '../../../assets/images/Main/Advanatages/statistics.png',
    },
  ];

  return (
    <Section advantages header={header}>
      {data.map((card, index) => (
        <AdvantageCard key={index} imgURL={card.imgURL} title={card.title} body={card.body} />
      ))}
    </Section>
  );
};

export default Advantages;
