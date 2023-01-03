import { armorNames, shieldNames, weaponNames } from "./names"
import { generateRandomIntegerInRange } from "./random"

const MIN_STATUS_RANGE = 1
const MAX_STATUS_RANGE = 5

const itemTypes = [
  'ARMOR',
  'SHIELD',
  'WEAPON'
]

export class ItemGenerator {
  level: number
  type: string
  name: string
  attack: number
  defence: number
  damage: number
  resistance: number
  price: number

  constructor(level:number, type?:string) {
    this.level = level
    this.type = type || itemTypes[generateRandomIntegerInRange(0, itemTypes.length - 1)]
    this.name = this.generateName()

    this.attack =  0
    this.defence =  0
    this.damage =  0
    this.resistance =  0
    this.price =  0

    this.generateStats()
  }

  generateName () {
    if(this.isWeapon()) {
      return weaponNames[generateRandomIntegerInRange(0, weaponNames.length - 1)]
    }
    if(this.isArmor()) {
      return armorNames[generateRandomIntegerInRange(0, armorNames.length - 1)]
    }
    if(this.isShield()) {
      return shieldNames[generateRandomIntegerInRange(0, shieldNames.length - 1)]
    }
    return ''
  }

  generateStats () {
    if(this.isWeapon()) {
      this.attack = generateRandomIntegerInRange(MIN_STATUS_RANGE, MAX_STATUS_RANGE) * this.level
      this.damage = generateRandomIntegerInRange(MIN_STATUS_RANGE, MAX_STATUS_RANGE) * this.level
      this.defence = 0
      this.resistance = 0
    }

    if(this.isArmor()) {
      this.attack = 0
      this.damage = 0
      this.defence = 0
      this.resistance = generateRandomIntegerInRange(MIN_STATUS_RANGE, MAX_STATUS_RANGE) * this.level
    }

    if(this.isShield()) {
      this.attack = 0
      this.damage = 0
      this.defence = generateRandomIntegerInRange(MIN_STATUS_RANGE, MAX_STATUS_RANGE) * this.level
      this.resistance = 0
    }

    this.price = (this.attack + this.damage + this.defence + this.resistance)
      * generateRandomIntegerInRange(5, 10)
  }

  isArmor () {
    return this.type === 'ARMOR'
  }
  isShield () {
    return this.type === 'SHIELD'
  }
  isWeapon () {
    return this.type === 'WEAPON'
  }
}