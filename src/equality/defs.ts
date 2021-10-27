export type Refl<A> = ["refl", A]

export type Equal<A, B> = Refl<A> & Refl<B>
