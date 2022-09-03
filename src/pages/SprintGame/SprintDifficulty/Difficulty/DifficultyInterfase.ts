import { IDifficulty } from '../../../../common/constants/difficultyLevels';

export default interface IDifficultyGame {
  difficulty: string;
  change: (difficultyLevel: number) => void;
  id: number;
  activeChange: React.Dispatch<React.SetStateAction<boolean>>;
}
