export type N0 = "zero"
export type Succ<N> = ["succ", N]

export type Sum<A, B> = A extends Succ<infer A1> ? Succ<Sum<A1, B>> : B

export type N1 = Succ<N0>
export type N2 = Succ<N1>
export type N3 = Succ<N2>
export type N4 = Succ<N3>
export type N5 = Succ<N4>

