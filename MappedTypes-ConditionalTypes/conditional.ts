// Conditional Types

type isArray<T> = T extends any[] ? "Yes" : "No"

type test1 = isArray<string>; // no
type test2 = isArray<number[]>; // yes

