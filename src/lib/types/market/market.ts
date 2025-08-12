import type { Images } from "~/lib/types/utils/images";

export interface Market {
  discr: string;
  id: string;
  salePrice: number;
  expirationDate: string;
  status: string;
  leagueType: string;
  leagueId: number;
  numberOfBids?: number;
  numberOfOffers?: number;
  directOffer?: boolean;
  playerMaster: PlayerMaster;
  playerTeam?: PlayerTeam;
  sellerTeam?: SellerTeam;
}

interface PlayerMaster {
  id: string;
  name: string;
  lastSeasonPoints: number;
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
  name: string;
  id: string;
  shortName: string;
  slug: string;
}

interface PlayerTeam {
  buyoutClause: number;
  playerTeamId: string;
  buyoutClauseLockedEndTime: string;
  isShielded: boolean;
}

interface SellerTeam {
  teamMoney: number | null;
  id: string;
  teamValue: number;
  teamPoints: number;
  manager: Manager;
}

interface Manager {
  id: string;
  managerName: string;
  avatar: string;
}
