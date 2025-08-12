import type { Images } from "~/lib/types/utils/images";

export interface History {
  date: string;
  operation: string;
  money: number;
  player: Player;
}

interface Player {
  id: string;
  name: string;
  nickname: string;
  positionId: number;
  images: Images;
}
