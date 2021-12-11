import BattleType from "@/types/BattleType";
import { atom } from "recoil";

const battleState = atom<BattleType>({
  key: 'battle',
  default: {
    id:            0,
    userId:        0,
    createUser:    null,
    userTeams:     null,
    opponentUser:  null,
    opponentTeams: null,
    isActive:      false,
  }
})

export default battleState