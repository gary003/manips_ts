export enum currencyEnum {
  SOFTCURRENCY = "softCurrency",
  HARDCURRENCY = "hardCurrency"
}

export type currencyList = "hardCurrency" | "softCurrency"

export type currencyTypes = Record<currencyList, number>
// export type currencyTypes = Record<currencyEnum, string | number>

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
