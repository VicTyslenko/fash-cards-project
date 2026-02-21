import ProgressIcon from "@/assets/icons/icon-stats-in-progress.svg";
import MasteredIcon from "@/assets/icons/icon-stats-mastered.svg";
import NotStartedIcon from "@/assets/icons/icon-stats-not-started.svg";
import TotalIcon from "@/assets/icons/icon-stats-total.svg";

import type { CardStructureItem } from "./extensions/models";

export const cardStructure: CardStructureItem[] = [
  { title: "Total cards", quantity: "total", color: "#92ADEB", icon: TotalIcon },
  { title: "Mastered", quantity: "mastered", color: "#47D9C9", icon: MasteredIcon },
  { title: "In Progress", quantity: "inProgress", color: "#F073A3", icon: ProgressIcon },
  { title: "Not Started", quantity: "notStarted", color: "#FC8AE5", icon: NotStartedIcon },
];
