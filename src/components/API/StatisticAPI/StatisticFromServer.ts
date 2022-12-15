import Data from './IData';

type Options = {
  testFieldString?: string;
  testFieldBoolean?: boolean;
  sprintPointsInARow: Data;
  audioPointsInARow: Data;
  gamesScoreSprint: Data;
  gamesScoreAudio: Data;
  gamesAmoutSprint: Data;
  gamesAmoutAudio: Data;
};
type StatisticServ = {
  userId: string;
  optional: Options;
};
export default StatisticServ;
