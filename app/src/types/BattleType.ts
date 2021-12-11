import { TeamsType } from "./TeamsType"
import { UserJsonType } from "./UserType"

type BattleType = {
  id:             number
  userId:         number
  createUser:     UserJsonType|null
  userTeams:      TeamsType|null
  opponentUser:   UserJsonType|null
  opponentTeams:  TeamsType|null
  isActive:       boolean
}

export default BattleType