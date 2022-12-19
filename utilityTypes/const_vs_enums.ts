// export enum racesEnum {
//   TRACK100M = "track_100m",
//   TRACK200M = "track_200m",
//   TRACK400M = "track_400m",
//   TRACK800M = "track_800m"
// }

// export type racesType = Record<racesEnum, boolean>

// export type athlete = userDTO & { races: racesEnum[] }

/* This technique can be use to type a parameter in a function
  and then be used as both string value directly and/or enum value 
*/

const raceList = {
  TRACK100M: "track_100m",
  TRACK200M: "track_200m",
  TRACK400M: "track_400m",
  TRACK800M: "track_800m"
} as const

type ObjectValues<T> = T[keyof T]

export type raceType = ObjectValues<typeof raceList>

const funcTest = (userId: string, race: raceType) => {
  console.log(`ok, ${userId} - ${race}`)
  return race
}

console.log(funcTest("13253739", "track_800m"))
