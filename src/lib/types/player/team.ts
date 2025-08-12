import type { Images } from "~/lib/types/utils/images";

export interface Team {
  teamMoney: number;
  playersNumber: number;
  id: string;
  startingWeek: number;
  banned: boolean;
  teamValue: number;
  teamPoints: number;
  players: Players[];
  loanedPlayers: any[];
  manager: Manager;
}

interface Players {
  buyoutClause: number;
  manager: ManagerPlayer;
  playerTeamId: string;
  buyoutClauseLockedEndTime: string;
  isShielded: boolean;
  playerMaster: PlayerMaster;
}

interface ManagerPlayer {
  id: string;
  managerName: string;
  avatar: string;
}

interface PlayerMaster {
  id: string;
  name: string;
  nickname: string;
  slug: string;
  positionId: number;
  playerStatus: string;
  lastSeasonPoints: number;
  averagePoints: number;
  points: number;
  marketValue: number;
  images: Images;
  team: TeamPlayer;
  lastStats: any[];
}

interface TeamPlayer {
  id: string;
  name: string;
  slug: string;
  assets: string;
  badgeColor: string;
  badgeGray: string;
  badgeWhite: string;
}

interface Manager {
  id: string;
  managerName: string;
  avatar: string;
}
