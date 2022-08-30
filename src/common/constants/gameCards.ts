interface IGameCard {
  imgURL: string;
  title: string;
  body: string;
}

const GAME_CARDS_DATA: IGameCard[] = [
  {
    imgURL: '../../assets/images/Vocabulary/Games/Audio.png',
    title: 'Аудиовызов',
    body: 'Попытайтесь угадать слово, произнесенное на английском языке',
  },
  {
    imgURL: '../../assets/images/Vocabulary/Games/Sprint.png',
    title: 'Спринт',
    body: 'Определите правильный перевод или нетза определенное время',
  },
];

export default GAME_CARDS_DATA;
