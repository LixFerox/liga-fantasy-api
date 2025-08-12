import type { Images } from "~/lib/types/utils/images";

export interface Operation {
  discr: string;
  id: string;
  salePrice: number;
  expirationDate: string;
  status: string;
  leagueType: string;
  leagueId: number;
  numberOfBids: number;
  playerMaster: PlayerMaster;
  bid: Bid;
}

interface PlayerMaster {
  id: string;
  name: string;
  nickname: string;
  slug: string;
  positionId: number;
  position: string;
  marketValue: number;
  playerStatus: string;
  points: number;
  averagePoints: number;
  images: Images;
  team: Team;
}

interface Team {
  badgeColor: string;
  badgeGray: string;
  badgeWhite: string;
  id: string;
  shortName: string;
  slug: string;
}

interface Bid {
  id: string;
  money: number;
  status: string;
  createdAt: string;
  updatedAt: string;
}
