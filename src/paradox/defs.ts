import { False } from "../bool"

// This type should not be allowed
export type Paradox = (paradox: Paradox) => False
