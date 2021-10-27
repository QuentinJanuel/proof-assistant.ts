import { Impl, And, Not, Or, Contradiction } from "./defs"
import { False } from "../bool"
import { false_impl_anything, excluded_middle } from "./axioms"

export const and_ell = <A, B>():
// (a and b) => a
Impl<And<A, B>, A> =>
([a, _]) => a

export const and_elr = <A, B>():
// (a and b) => b
Impl<And<A, B>, B> =>
([_, b]) => b

export const modus_ponens = <A, B>():
// (a and (a => b)) => b
Impl<And<A, Impl<A, B>>, B> =>
([a, a_impl_b]) => a_impl_b(a)

export const modus_tollens = <A, B>():
// ((a => b) and (not b)) => (not a)
Impl<And<Impl<A, B>, Not<B>>, Not<A>> =>
([a_impl_b, not_b]) => a => not_b(a_impl_b(a))

export const impl_trans = <A, B, C>():
// ((a => b) and (b => c)) => (a => c)
Impl<And<Impl<A, B>, Impl<B, C>>, Impl<A, C>> =>
([a_impl_b, b_impl_c]) => a => b_impl_c(a_impl_b(a))

export const or_inl = <A, B>():
// a => (a or b)
Impl<A, Or<A, B>> =>
a => ["left", a]

export const or_inr = <A, B>():
// b => (a or b)
Impl<B, Or<A, B>> =>
b => ["right", b]

export const or_sym = <A, B>():
// (a or b) => (b or a)
Impl<Or<A, B>, Or<B, A>> =>
(a_or_b) => {
	switch (a_or_b[0]) {
		case "left":
			const a = a_or_b[1]
			return ["right", a]
		case "right":
			const b = a_or_b[1]
			return ["left", b]
	}
}

export const contradiction_impl_false = <A>():
// contradiction => false
Impl<Contradiction<A>, False> =>
([a, not_a]) => not_a(a)

export const contradiction_impl_anything = <A, B>():
// contradiction => b
Impl<Contradiction<A>, B> =>
c => {
	const c_impl_f = contradiction_impl_false<A>()
	const f_impl_b = false_impl_anything<B>()
	const c_impl_b = impl_trans<Contradiction<A>, False, B>()([c_impl_f, f_impl_b])
	const b = modus_ponens<Contradiction<A>, B>()([c, c_impl_b])
	return b
}

export const not_not_a_impl_a = <A>():
// (not (not a)) => a
Impl<Not<Not<A>>, A> => {
	return not_not_a => {
		const a_or_not_a = excluded_middle<A>()
		switch (a_or_not_a[0]) {
			case "left":
				const a = a_or_not_a[1]
				return a
			case "right":
				const not_a = a_or_not_a[1]
				const contradiction: Contradiction<Not<A>> = [not_a, not_not_a]
				return contradiction_impl_anything<Not<A>, A>()(contradiction)
		}
	}
}

export const a_impl_b_impl_not_b_impl_not_a = <A, B>():
// (a => b) => ((not b) => (not a))
Impl<Impl<A, B>, Impl<Not<B>, Not<A>>> => {
	return a_impl_b => {
		return not_b => {
			const a_or_not_a = excluded_middle<A>()
			switch (a_or_not_a[0]) {
				case "left":
					const a = a_or_not_a[1]
					const b = a_impl_b(a)
					const contradiction: Contradiction<B> = [b, not_b]
					return contradiction_impl_anything<B, Not<A>>()(contradiction)
				case "right":
					const not_a = a_or_not_a[1]
					return not_a
			}
		}
	}
}
