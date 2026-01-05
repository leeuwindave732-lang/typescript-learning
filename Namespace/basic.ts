// namespace

/* What is Namespace? 

    A namespace is a way to group related code together to avoid name collisions,
    especially when you are not using ES modules yet or when organizing large backend utilities.

    think of it as a logical folder inside a single file

    Why Namespaces Matter(Real-World Backend)
    In Backend systems, you often have:
    - Validators
    - Loggers
    = Config Helpers
    = Error Handlers

    Without namespaces, everything lives in the global scope, which becomes messy fast.

    Namespaces help you:

    = Organize related logic
    - Avoid Duplicate Names
    = Improve readability in large files
*/

// Basic Namespace Syntac
namespace Utils {
    export function log(message: string) {
        console.log(`[LOG]: ${message}`)
    }
}

// export is required to access members outside the namespace

// Usage
Utils.log("Server started") // [LOG]: Server started