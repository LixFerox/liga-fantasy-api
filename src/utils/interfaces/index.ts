//HOME
export interface League{
    id: number,
    name: string,
    managersNumber: number,
    description: string,
    premium: boolean,
}
//////////

//RANKING LIST
export interface Manager{
    position: number;
    previousPosition: number;
    points: number;
    team: Team;
}
interface Team{
    managerWarned: boolean;
    id: number;
    manager: ManagerInfo;
    banned: boolean;
    teamValue: number;
    teamPoints: number;
    teamMoney: number;
    isAdmin: boolean;
}
interface ManagerInfo{
    id: number;
    managerName: string;
    avatar: string;
}
//////////
//MARKET

export interface Market{
    salePrice: number;
    expirationDate: string;
    numberOfBids: number;
    playerMaster: PlayerMaster;
}
 interface PlayerMaster{
    nickname: string;
    position: string;
    marketValue: number;
    playerStatus: string;
    points: number;
    images: PlayerImage;
}
interface PlayerImage{
    transparent: {
        "256x256": string;
    }
}
//////////
//NEWS
export interface Activity{
    id: number;
    title: string;
    msg: string;
    publicationDate: string;
}