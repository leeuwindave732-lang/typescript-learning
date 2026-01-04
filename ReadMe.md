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
        Verify installation in terminal: 
            node -v
            npm -v

    2. Install Typescript 
        Using the terminal: npm install -g typescript
        Verify Typescript installation:
            tsc -v
    
    3. Create New Project Folder
        In terminal: mkdir typescript-project
                     cd typescript-project

        Initialize npm: npm init -y or npm install --save-dev typescript tsx


    4. Initialize Typescript Configuration
        Create a tsconfig.json file: tsc --init
    
    5. Create a file
        Typescript file extension: .ts
        e.g: index.ts
        example code: console.log("Hello TypeScript"); 
    
    6. Run the file
        In terminal install: npm install -g ts-node or npm install -D tsx
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
- [Day 15 - Template Literal Types & String Manipulation](./TemplateLiteralTypes&StringManipulation)
- [Day 16 - Modules](./Modules-)
- [Day 17 - Advance Type Safety Patterns](./Advance-Type-Safety-Patterns)
- [Day 18 - Type Inference & Template Literal Types in Practice](./TypeInference-TemplaLiteral-In-Practice)
- [Day 19 - Utility Types with Advance Guards](./UtilityTypes-AdvanceGenericss)
- [Day 20 - Type-Level Logic & Compile-Time Validation](./Type-Level-Logic-Compile-Time-Validation)

## Mini Project
- [Student Manager Console App (Day 1–10)](./Mini-Projects/Day1-10)
- [TypeSafe Student & Role Manager (Day 11-20)](./Mini-Projects/Day11-20)

## 📝 Daily Learning
- Day 01: Understand the difference between const and let
- Day 02: Understand the different TypeScript types (any, string, number, boolean, unknown)
- Day 03: Understand functions, parameters, and return types
- Day 04: Understand arrays, tuples, and readonly
- Day 05: Understand objects, interfaces, and type aliases
- Day 06: Understand enums, literal types, union & intersection types
- Day 07: Explore how generics work
- Day 08: Explore type narrowing and type guards (typeof, in, instanceof, unknown)
- Day 09: Explore discriminated unions and exhaustive checks
- Day 10: Study assertion functions
- Day 11: Explore utility types (Partial, Required, Pick, Omit, Readonly)
- Day 12: Explore advanced object typing (keyof and indexed access types)
- Day 13: Understand mapped & conditional types
- Day 14: Learn conditional types & advanced type manipulation
- Day 15: Learn template literal types and string manipulation
- Day 16: Learn modules and how to organize code
- Day 17: Learn advanced type safety patterns
- Day 18: Understand type inference and template literal types in practice
- Day 19: Get familiar with Utility Types with Advance Guards
- Day 20: Strengthen Type-Level Logic & Compile-Time Validation
