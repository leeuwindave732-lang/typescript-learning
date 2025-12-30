// mapped type

type Student = {
    name: string;
    year: number;
    grades?: number[];
};

// Make all properties Optional
type Optional<T> = {
    [K in keyof T]?: T[K];
    //?: → makes each property optional
};

// bonus example 

// Make all properties readonly
type Readonly<T> = {
    readonly [K in keyof T]: T[K];
};

// Make all properties required
type Required<T> = {
    [K in keyof T]-?: T[K];
    // -? → removes optional modifier from any property
};


type OptionalStudent = Optional<Student>;
/* so OptionalStudent becomes
    type OptionalStudent = {
    name?: string;
    year?: number;
    grades?: number[];
};
*/

type RequiredStudent = Required<Student>;
/* so RequiredStudent becomes
    type OptionalStudent = {
    name: string;
    year: number;
    grades: number[];
    // meaning all of them must have a values
};
*/


type ReadonlyStudent = Readonly<Student>;
/* so ReadonlyStudent becomes
    type OptionalStudent = {
    name: string;
    year: number;
    grades: number[];
    // meaning  all of them is immutable
};
*/


const S: OptionalStudent = {
    year: 1,
    grades: []
}

const S1: ReadonlyStudent = {
    name: "Seiju",
    year: 1,
    grades: [99,88,100]
}
// S1.name = "Hajime"; // Error, readonly

const S2: RequiredStudent = {
    name: "Seiju",
    year: 1,
    grades: [99,88,100]

}

console.log(S);   // { year: 1, grades: [] }
console.log(S1);  // { name: "Seiju", year: 1, grades: [99,88,100] }
console.log(S2);  // { name: "Seiju", year: 1, grades: [99,88,100] }

// basically everything here is in the day 11: Utility types