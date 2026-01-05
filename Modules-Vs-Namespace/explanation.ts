/* Modules vs Namespaces (Backend)

Why modern TypeScript backends prefer modules,
and when namespaces still make sense.

------------------------------------------------
Namespace = Internal Organization
- Organizes code within the same file
- Older TypeScript pattern
- Shares the same runtime scope
- Works without build tools

------------------------------------------------
Module = File-Based Boundary
- Each file has its own scope
- Only exported code is shared
- Supports tree-shaking and optimization
- Standard for Node, Deno, Bun, and modern tooling

------------------------------------------------
Why backends prefer modules

Namespace example:
namespace Auth {
    export function login() {}
}

Problems:
- Everything lives under one global name (Auth)
- Hard to split across multiple files
- No lazy loading
- Poor support from modern tools

------------------------------------------------
Module-based approach (recommended)

// auth/user.ts
export type User = {
    id: number
    email: string
}

// auth/validator.ts
import type { User } from "./user.js"

export function validateUser(user: User) {
    return user.email.includes("@")
}

// auth/logger.ts
import type { User } from "./user.js"

export function logLogin(user: User) {
    console.log(`[AUTH] ${user.email}`)
}

Why this is better:
- File-level isolation
- Clear and explicit dependencies
- Easier to test and maintain
- Works naturally with the Node ecosystem

------------------------------------------------
Mental model:
Namespaces → organize code  
Modules → organize systems  

Your namespace becomes a folder:
auth/
├─ user.ts
├─ validator.ts
├─ logger.ts
└─ index.ts

------------------------------------------------
When namespaces are still okay
- Teaching and learning
- Small single-file scripts
- Type declaration files (.d.ts)
- Maintaining legacy codebases

Avoid namespaces in new backend applications.
*/
