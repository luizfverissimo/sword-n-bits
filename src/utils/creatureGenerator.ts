import { ItemGenerator } from "./itensGenerator"
import { creatureNames } from "./names"
import { generateRandomIntegerInRange } from "./random"

const MIN_HEALTH_POINTS = 6
const MAX_HEALTH_POINTS = 12

type itemType = {
  attack: number
  defence: number
  damage: number
  resistance: number
}

export class CreatureGenerator {
  level: number
  heathPoints: number
  name: string
  weapon: itemType
  armor: itemType
  stats: itemType

  constructor(level:number) {
    this.level = level
    this.heathPoints = generateRandomIntegerInRange(MIN_HEALTH_POINTS, MAX_HEALTH_POINTS) * this.level
    this.name = creatureNames[generateRandomIntegerInRange(0, creatureNames.length - 1)]
    this.weapon = new ItemGenerator(this.level, 'WEAPON')
    this.armor = new ItemGenerator(this.level, 'ARMOR')
    this.stats = {
      attack: this.weapon.attack,
      damage: this.weapon.damage,
      resistance: this.armor.resistance,
      defence: 0
    }
  }
}