export type N0 = "zero"
export type Succ<N> = ["succ", N]

export type Sum<A, B> = A extends Succ<infer A1> ? Succ<Sum<A1, B>> : B

export type N1 = Succ<N0>
export type N2 = Succ<N1>
export type N3 = Succ<N2>
export type N4 = Succ<N3>
export type N5 = Succ<N4>
export type N6 = Succ<N5>
export type N7 = Succ<N6>
export type N8 = Succ<N7>
export type N9 = Succ<N8>
export type N10 = Succ<N9>
export type N11 = Succ<N10>
export type N12 = Succ<N11>
export type N13 = Succ<N12>
export type N14 = Succ<N13>
export type N15 = Succ<N14>
export type N16 = Succ<N15>
export type N17 = Succ<N16>
export type N18 = Succ<N17>
export type N19 = Succ<N18>
export type N20 = Succ<N19>
