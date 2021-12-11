import type { ParamType } from './ParamType';

export type TeamType = ParamType & {
  id: number,
  characterId: number,
  mp: number,
}

export type TeamsType = {
  ID: number,
  UserId: number,
  teams: TeamType[],
}