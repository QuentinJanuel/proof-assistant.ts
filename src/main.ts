import { Sum, N1, N2 } from "./nat"
import { refl, Equal } from "./equality"

// 1 + 1 = 2
const one_plus_one_is_two: Equal<Sum<N1, N1>, N2> = refl()
