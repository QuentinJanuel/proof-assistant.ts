import { axiom } from "../axiom"
import { Refl } from "./defs"

export const refl = <A>():
// a = a
Refl<A> =>
axiom()
