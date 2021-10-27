import { False } from "../bool"

export type Impl<A, B> = (_: A) => B

export type Equiv<A, B> = And<Impl<A, B>, Impl<B, A>>

export type Not<A> = Impl<A, False>

export type And<A, B> = [A, B]

export type Or<A, B> = ["left", A] | ["right", B]

export type Contradiction<A> = And<A, Not<A>>
