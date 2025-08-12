import { apiFetch } from "./client";
import type { League } from "~/lib/types/league/league";
import type { Clasification } from "~/lib/types/league/clasification";
import type { Market } from "~/lib/types/market/market";
import type { Lineup } from "~/lib/types/player/lineup";
import type { Money } from "~/lib/types/other/money";
import type { Operation } from "~/lib/types/market/operation";
import type { Formation } from "~/lib/types/player/formation";
import type { Team } from "~/lib/types/player/team";
import type { History } from "~/lib/types/market/history";
import type { Activity } from "~/lib/types/activity/activity";
import type { WeekGame } from "~/lib/types/other/weekgame";

export async function getLeagues(token: string): Promise<League[]> {
  return apiFetch("/v4/leagues?x-lang=es", token);
}

export async function getClasification(
  leagueId: string,
  token: string
): Promise<Clasification[]> {
  return apiFetch(`/v4/leagues/${leagueId}/ranking?x-lang=es`, token);
}

export async function getMarket(
  leagueId: string,
  token: string
): Promise<Market[]> {
  return apiFetch(`/v3/league/${leagueId}/market?x-lang=es`, token);
}

export async function getLineupPosition(
  type: "free" | "premium",
  token: string
): Promise<Formation[]> {
  return apiFetch(
    `/v4/teams/lineup/formations?option=${type}&x-lang=es`,
    token
  );
}

export async function getLineupPlayer(
  teamId: string,
  token: string
): Promise<Lineup[]> {
  return apiFetch(`/v3/teams/${teamId}/lineup?x-lang=es`, token);
}

export async function getTeamPlayer(
  leagueId: string,
  teamId: string,
  token: string
): Promise<Team[]> {
  return apiFetch(
    `v4/leagues/${leagueId}/teams/${teamId}/lineup?x-lang=es`,
    token
  );
}

export async function getPlayerMoney(
  teamId: string,
  token: string
): Promise<Money[]> {
  return apiFetch(`/v3/teams/${teamId}/money?x-lang=es`, token);
}

export async function getMarketOperations(
  leagueId: string,
  token: string
): Promise<Operation[]> {
  return apiFetch(`/v3/league/${leagueId}/market/operations?x-lang=es`, token);
}

export async function getMarketHistory(
  leagueId: string,
  token: string
): Promise<History[]> {
  return apiFetch(`/v3/league/${leagueId}/market/history?x-lang=es`, token);
}

export async function getLeagueActivity(
  leagueId: string,
  index: string,
  token: string
): Promise<Activity[]> {
  return apiFetch(`/v5/leagues/${leagueId}/activity/${index}?x-lang=es`, token);
}

export async function getMatchDay(
  index: string,
  token: string
): Promise<WeekGame[]> {
  return apiFetch(`/v3/calendar?weekNumber=${index}&x-lang=es`, token);
}
