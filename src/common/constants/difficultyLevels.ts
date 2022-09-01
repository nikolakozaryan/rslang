export interface IDifficulty {
  id: number;
  level: string;
  color: string;
  detailed: string;
}

export const DIFFICULTY: IDifficulty[] = [
  { id: 0, level: 'A1', color: '#FFCF0B', detailed: 'Elementary' },
  { id: 1, level: 'A2', color: '#FFAC4B', detailed: 'Pre-Intermediate' },
  { id: 2, level: 'B1', color: '#BAF3AF', detailed: 'Intermediate' },
  { id: 3, level: 'B2', color: '#85D671', detailed: 'Upper-Intermediate' },
  { id: 4, level: 'C1', color: '#AFCDFB', detailed: 'Advanced' },
  { id: 5, level: 'C2', color: '#699DEE', detailed: 'Proficiency' },
];
