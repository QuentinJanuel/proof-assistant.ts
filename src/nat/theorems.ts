import { Sum, N0, Succ } from "./defs"
import { Equal, Refl, refl } from "../equality"
import { Impl } from "../logic"
import { axiom } from "../axiom"

export const please = <A, B>():
Impl<Equal<A, B>, Equal<Succ<A>, Succ<B>>> => {
    return a_is_b => {
        // TODO
        return axiom()
    }
}

export const easy_way = <A>():
// 0 + a = a
Equal<Sum<N0, A>, A> => {
    return refl()
}

export const init = ():
// 0 + 0 = 0
Equal<Sum<N0, N0>, N0> => refl()

export const rec = <A>():
// (a + 0 = a) => (s(a) + 0 = s(a))
Impl<Equal<Sum<A, N0>, A>, Equal<Sum<Succ<A>, N0>, Succ<A>>> => {
    return please<Sum<A, N0>, A>()
}

// export const test = <A>():
// // 0 + a = a + 0
// Equal<Sum<N0, A>, Sum<A, N0>> => {
//     // 0 + a = a
//     const n0_plus_a_is_n0: Equal<Sum<N0, A>, A> = refl()
//     const a_plus_n0_is_n0: Equal<Sum<A, N0, A>> = refl()
//     return 0 as any
// }
