import type { Images } from "~/lib/types/utils/images";

export interface Lineup {
  id: number;
  updatedAt: string;
  formation: Formation;
  team: Team;
}

interface Formation {
  goalkeeper: Player[];
  defender: Player[];
  midfield: Player[];
  striker: Player[];
  coach: Player[];
  bench: Record<string, Player>;
  tacticalFormation: number[];
}

interface Player {
  buyoutClause: number;
  playerTeamId: string;
  playerMaster: PlayerMaster;
}

interface PlayerMaster {
  points: number;
  averagePoints: number;
  isInIdealFormation: boolean;
  id: string;
  name: string;
  nickname: string;
  positionId: number;
  position: string;
  marketValue: number;
  playerStatus: string;
  lastStats: any[];
  lastSeasonPoints?: number;
  images: Images;
  team: TeamPlayer;
}

interface TeamPlayer {
  badgeColor: string;
  badgeGray: string;
  badgeWhite: string;
  name: string;
  id: string;
  shortName: string;
  slug: string;
}

interface Team {
  id: string;
  teamValue: number;
  teamPoints: number;
}
