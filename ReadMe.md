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

## 📂 Daily Progress

- [Day 01 – Basics (const & let)](./basics)
- [Day 02 – TypeScript Types](./typescript-types)
- [Day 03 – Functions](./functions_)
- [Day 04 – Arrays, Tuples & Readonly](./Arrays-Tuples-Readonly)
- [Day 05 – Objects, Interfaces & Type Aliases](./Objects-Aliases-Interface)
- [Day 06 – Enums, Union & Intersection Types](./Enums-LiteralTypes-Union-Intersection)
- [Day 07 – Generics](./generics)
- [Day 08 – Type Narrowing & Guards](./Typeof-In-InstanceOf-Unknown)
- [Day 09 – Discriminated Unions](./DiscriminatedUnions-ExhaustiveChecks)
- [Day 10 – Assertion Functions](./Assertions)
- [Day 11 – Utility Types](./Utility-types)
- [Day 12 – Advanced Object Typing](./Advance-Object-Typing)
- [Day 13 – Mapped & Conditional Types](./MappedTypes-ConditionalTypes)
- [Day 14 - Advance Type Manipulation](./Advance-Type-Manipulation)

## Mini Project
- [Student Manager Console App (Day 1–10)](./Mini-Projects/MiniProject1.ts)

