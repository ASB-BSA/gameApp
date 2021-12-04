export type TeamType = {
  id: number,
  characterId: number,
  attack: number,
  defence: number,
  avoidance: number,
  hit: number,
  agility: number,
  hp: number,
  criticalRate: number,
  mp: number,
}

export type TeamsType = {
  ID: number,
  UserId: number,
  teams: TeamType[],
}