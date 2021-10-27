import { Paradox } from "./defs"
import { False } from "../bool"

export const paradox: Paradox = p => p(p)

export const inconsistency: False = paradox(paradox)