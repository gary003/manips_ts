import { F } from "ts-toolbelt"

// Narrow trick (obscure TS)
const oo = <T>(ob: F.Narrow<T>) => {
  return ob
}

const res = oo({ ab: "zerr" })

console.log(res)
