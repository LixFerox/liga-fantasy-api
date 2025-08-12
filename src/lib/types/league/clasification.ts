export interface Clasification {
  position: number;
  previousPosition: number;
  points: number;
  livePoints?: number;
  team: Team;
}

interface Team {
  managerWarned: boolean;
  id: string;
  banned: boolean;
  teamValue: number;
  teamPoints: number;
  teamMoney: number | null;
  isAdmin: boolean;
  manager: Manager;
}

interface Manager {
  id: string;
  managerName: string;
  avatar: string;
}
