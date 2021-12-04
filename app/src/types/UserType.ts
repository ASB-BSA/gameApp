import { TeamsType } from './TeamsType';

export type UserType = {
  isSignIn: boolean,
  id: number,
  name: string,
}

export type UserJsonType = {
  ID: number,
  name: string,
  Teams: TeamsType,
}