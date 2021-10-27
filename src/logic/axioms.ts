import { axiom } from "../axiom"
import { Or, Not, Impl } from "./defs"
import { False } from "../bool"

export const excluded_middle = <A>():
// a or (not a)
Or<A, Not<A>> =>
axiom()

export const false_impl_anything = <A>():
// false => a
Impl<False, A> =>
axiom()
