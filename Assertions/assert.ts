// this is already the mini task for assert
/* An assertion function is basically a function that checks if something is true and tells TypeScript about it.
    Think of it like a checkpoint: “I am sure this thing is what I expect it to be, so trust me, TypeScript!
    */
type Students = {
    name: string,
    year: 1|2|3|4
    grades?: number[]
}
function computeAverage(grades?: number[]): number {
    if (!grades || grades.length === 0) return 0;
    return grades.reduce((sum, g) => sum + g, 0) / grades.length;
}

// throw to signal error
function assertStudents(value: unknown): asserts value is Students {
    // signals an error whenever StudentInfo receives something that is not an object
    if (typeof value !== "object" || value === null) {
        throw new Error("not an object");
    }

    const v = value as Record<string,unknown>;
    // if the name doesnt have the "name:" and just "Seiju" it will signal an error
    if (typeof v.name !== "string") {
        throw new Error("Invalid or missing name");
    }
    // if the year is not in the union of years we put it will signal error
    if (typeof v.year !== "number" || ![1,2,3,4].includes(v.year)) {
        throw new Error("Invalid year")
    }

    if ( v.grades !== undefined) {
        // if grades is not an array of number it will signal the error
        if (
            !Array.isArray(v.grades) ||
            !v.grades.every(g => typeof g === "number")
        ) {
            throw new Error("grades must be an array of number");
        }
    }
}

function StudentInfo (value: unknown) {
    // handle the failure
    try {
        assertStudents(value)

        console.log(`Students name: ${value.name}`)
        console.log(`Students year: ${value.year}`)
        console.log(`Students average: ${computeAverage(value.grades)}`)
        console.log("-------------------")
    } catch (err) {
        console.log((err as Error).message) // this will log the throw error we put
    }
}

StudentInfo({
    name: "Seiju",
    year: 1,
    grades: [99,98,100]
});

StudentInfo({
    name: "Hajime",
    year: 2
})

StudentInfo("Invalid") // not an object
StudentInfo({year: 2}) // missing name
StudentInfo({name: "Test", year: 9
}) // invalid  year
