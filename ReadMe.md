# 100 days of typescript

    A personal challenge to learn typescript step by step for 100 days

# Goal?

    - Understand typescript fundamentals
    - Build Small Projects and Exercise
    - Learn Best Practices and Type Safety

# Step by step on how to install typescript

    1. Install Node.js (required)
        Download from: https://nodejs.org
        Choose LTS (recommended)
        Verify installation: 
            node -v
            npm -v

    2. Install Typescript 
        Using the terminal: npm install -g typescript
        Verify Typescript installation:
            tsc -v
    
    3. Create New Project Folder
        In terminal: mkdir typescript-project
                     cd typescript-project

        Initialize npm: npm init -y

    4. Initialize Typescript Configuration
        Create a tsconfig.json file: tsc --init
    
    5. Create a file
        Typescript file extension: .ts
        e.g: index.ts
        example code: console.log("Hello TypeScript"); 
    
    6. Run the file
        In terminal install: npm install -g ts-node
        In terminal: cd (your file name) e.g.: index.ts // use this if its in folder otherwise proceed to the second one
                     npx ts-node (your file name) e.g.: index.ts

# If all done lets proceed to the 100 days challenge

# Day 1 - Basics with Mini Task // Learn how the const and let works [open(./Basics)]
# Day 2 - Typescript Types with Mini Task // Learn how any, boolean, string, number, unknown works [open] (./typescript-types)
# Day 3 - Functions, Params and Return Types with Mini Task // Learn how the function works
# Day 4 - Arrays, Tuple and Readonly with Mini Task // Learn how Arrays, Tuples, Readonly works
# Day 5 - Objects, Interface and Type Aliases with Mini Task // Learn how Objects, Interface and Type Aliases works
# Day 6 - Enums, Literal Types, Union and Intersection Types with Mini Task // Learn how Enums, Literal Types, Union & Intersection Types works
# Day 7 - Generics with Mini Task // Learn How Generics work
# Day 8 - Type Narrowing & Type Guards with Mini Task // Learn how typeof, in, instance-of, unknown, and type guards work
# Day 9 - Discriminated Union + Exhaustive Checks with Mini Task // Learn how Discriminated and Exhaustive works
# Day 10 - Assertion Functions with Mini Task // Learn how Assertion works
# Mini Project Day 1 - 10: Student Manager Console App
# Day 11 - Utility types with Mini Task // Learn how Partial, Required, Pick, Omit, Readonly, Required works
# Day 12 - Advance Object Typing with Mini Task // Learn how keyof and indexed work
# Day 13 - Master the Mapped and Conditional types with Mini Task // Master how it works