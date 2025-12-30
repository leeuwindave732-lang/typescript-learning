// Type Inference in Conditional Types

type ElementType<T> = T extends (infer U)[] ? U : T;

type Arr = number[];
type Item = ElementType<Arr>; // number

type NotArr = string;
type Single = ElementType<NotArr>; // string

// infer U captures the type of array elements.
// This is how ReturnType and Parameters utilities work internally.