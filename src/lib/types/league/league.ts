export interface League {
  id: string;
  access: string;
  managersNumber: number;
  name: string;
  isDuplicated: boolean;
  isSecondRound: boolean;
  token: string;
  description: string;
  premium: boolean;
  type: Type;
  config: Config;
  team: Team;
}

interface Type {
  id: string;
  canBeDuplicated: boolean;
  assets: Assets;
  sponsor: Sponsor;
  prizeInformation: PriceInformation;
}

interface Assets {
  logo_list_item: string;
  logo_white: string;
}

interface Sponsor {
  id: number;
  name: string;
}

interface PriceInformation {
  title: string;
  description: string;
}

interface Config {
  features: Features;
  premiumFeatures: PremiumFeatures;
  premiumConfigurations: PremiumConfigurations;
}

interface Features {
  buyoutClause: boolean;
}

interface PremiumFeatures {
  formations: boolean;
  captain: boolean;
  bench: boolean;
  loan: boolean;
  ideal: boolean;
  coach: boolean;
}

interface PremiumConfigurations {
  loan: Loan;
  ideal: Ideal;
}

interface Loan {
  duration: number;
  maxLoans: number;
  enableConclude: boolean;
  minPercentage: number;
}

interface Ideal {
  reward: number;
}

interface Team {
  id: number;
  money: number;
  teamPoints: number;
  playersNumber: number;
  canPuntuate: boolean;
  position: string | null;
  isAdmin: boolean;
}
