import { Equal } from "./defs"
import { Impl } from "../logic"

export const sym = <A, B>():
// a = b => b = a
Impl<Equal<A, B>, Equal<B, A>> =>
x => x
