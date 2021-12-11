import { TeamType } from './TeamType';
import { TeamsType } from './TeamsType';

export type UserType = {
  isSignIn: boolean,
  id: number,
  name: string,
  teams: TeamType[],
}

export type UserJsonType = {
  ID: number,
  name: string,
  Teams: TeamsType,
}