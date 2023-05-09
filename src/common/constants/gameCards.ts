interface IGameCard {
  imgURL: string;
  title: string;
  body: string;
  url: string;
}

const GAME_CARDS_DATA: IGameCard[] = [
  {
    url: '/audio',
    imgURL: '../../assets/images/Vocabulary/Games/Audio.png',
    title: 'Аудиовызов',
    body: 'Попытайтесь угадать слово, произнесенное на английском языке',
  },
  {
    url: '/sprint',
    imgURL: '../../assets/images/Vocabulary/Games/Sprint.png',
    title: 'Спринт',
    body: 'Определите правильный перевод или нетза определенное время',
  },
];

export default GAME_CARDS_DATA;
