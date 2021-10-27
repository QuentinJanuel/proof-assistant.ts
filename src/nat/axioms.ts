import { axiom } from "../axiom"
import { Impl, And } from "../logic"
import { N0, Succ, Sum } from "./defs"
import { Equal } from "../equality"

// TEMP
// type P<A> = Equal<Sum<A, N0>, Sum<N0, A>>

// export const induction = <A, X>():
// // (p(0) and p(n) => p(s(n))) => p(x)
// Impl<And<P<N0>, Impl<P<X>, P<Succ<X>>>>, A> =>
// axiom()
