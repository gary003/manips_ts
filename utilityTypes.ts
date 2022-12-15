export enum currencyEnum {
  SOFTCURRENCY = "softCurrency",
  HARDCURRENCY = "hardCurrency"
}

export type currencyList = "hardCurrency" | "softCurrency"

// export type currencyTypes = Record<currencyList, string | number>
export type currencyTypes = Record<currencyEnum, string | number>

export type walletDTO = { walletId: string } & Partial<currencyTypes>

export type userDTO = {
  userId: NonNullable<string>
  firstname: Capitalize<string>
  lastname: Capitalize<string>
  Wallet?: walletDTO
}

const us: userDTO = {
  userId: "",
  firstname: "",
  lastname: "",
  Wallet: {
    walletId: "0293823",
    hardCurrency: 123
  }
}

console.log(us)

export type playerDTO = Partial<userDTO> & Pick<userDTO, "userId"> & { gamerLevel: number }

const playerOne: playerDTO = {
  userId: "297397",
  firstname: " Beth",
  lastname: "Greene",
  gamerLevel: 12
}

console.log(playerOne)

export type anonymousUser = Omit<userDTO, "firstname" | "lastname">

const playerTwo: playerDTO = {
  userId: "1209876",
  firstname: "Glen",
  lastname: "Rhee",
  // previousOccupation: "pizza delivery",
  gamerLevel: 3
}

console.log(playerTwo)

const characteres: playerDTO[] = [
  {
    userId: "1209876",
    firstname: "Beth",
    lastname: "Greene",
    gamerLevel: 13
  },
  {
    userId: "63536282",
    firstname: "Glen",
    lastname: "Rhee",
    gamerLevel: 10
  },
  {
    userId: "09128373",
    firstname: "Carl",
    lastname: "Grimes",
    gamerLevel: 3
  },
  {
    userId: "298373633",
    firstname: "Rosita",
    lastname: "Espinosa",
    gamerLevel: 14
  }
]

const getTopPlayer = (players: playerDTO[]) => {
  return players.reduce((acc: playerDTO, player: playerDTO) => {
    return player.gamerLevel > acc.gamerLevel ? player : acc
  })
}

console.log(getTopPlayer(characteres))

export type getTopPlayerType = ReturnType<typeof getTopPlayer>

export enum racesEnum {
  TRACK100M = "track_100m",
  TRACK200M = "track_200m",
  TRACK400M = "track_400m",
  TRACK800M = "track_800m"
}

export type racesType = Record<racesEnum, boolean>

export type athlete = userDTO & { races: racesEnum[] }

const athlete1: athlete = {
  userId: "1234-5152-7182893",
  firstname: "Leo",
  lastname: "Mati",
  races: [racesEnum.TRACK100M]
}

console.log(athlete1)
