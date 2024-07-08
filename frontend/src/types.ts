export type Country = {
  id: number;
  code: string;
  name: string;
  emoji: string;
  continent?: Continent | null;
};

export type Continent = {
  id: number;
  name: string;
};
