export type CardQuantityKey = "total" | "mastered" | "inProgress" | "notStarted";

export type CardStructureItem = {
  title: string;
  quantity: CardQuantityKey;
  color: string;
  icon?: string;
};

export type StatisticCardProps = {
  title: string;
  quantity: number;
  color: string;
  icon?: string;
};
