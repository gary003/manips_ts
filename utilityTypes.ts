export enum currencyEnum {
  SOFTCURRENCY = "softCurrency",
  HARDCURRENCY = "hardCurrency"
}

export type currencyList = "hardCurrency" | "softCurrency"

// export type currencyTypes = Record<currencyList, string | number>
export type currencyTypes = Record<currencyEnum, string | number>

export type walletDTO = { walletId: string } & Partial<currencyTypes>

export type userDTO = {
  userId: string
  firstname: string
  lastname: string
  Wallet?: walletDTO
}

const us: userDTO = {
  userId: "",
  firstname: "",
  lastname: "",
  Wallet: {
    walletId: "azzr",
    hardCurrency: 123
  }
}

console.log(us)

export type playerDTO = Partial<userDTO> & Pick<userDTO, "userId"> & { gamerLevel: number }

const playerOne: playerDTO = {
  userId: "297397",
  firstname: "Beth",
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
} as playerDTO

console.log(playerTwo)

const characteres: playerDTO[] = [
  {
    userId: "1209876",
    firstname: "Beth",
    lastname: "Greene",
    // previousOccupation: "pizza delivery",
    gamerLevel: 13
  },
  {
    userId: "63536282",
    firstname: "Glen",
    lastname: "Rhee",
    // previousOccupation: "pizza delivery",
    gamerLevel: 10
  },
  {
    userId: "09128373",
    firstname: "Carl",
    lastname: "Grimes",
    // previousOccupation: "pizza delivery",
    gamerLevel: 3
  },
  {
    userId: "298373633",
    firstname: "Rosita",
    lastname: "espinosa",
    // previousOccupation: "pizza delivery",
    gamerLevel: 14
  }
]

const getTopPlayer = (players: playerDTO[]) => {
  return players.reduce((acc, player) => {
    return player.gamerLevel > acc.gamerLevel ? player : acc
  })
}

console.log(getTopPlayer(characteres))

export type getTopPlayerType = ReturnType<typeof getTopPlayer>
