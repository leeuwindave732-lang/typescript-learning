// exhaustive checks 
function assertNever(x: never): never {
    throw new Error("unhandled case")
} // Value is impossible

type state = 
    | { type: 'loading'}
    | { type: 'success', data: string}
    | { type: 'error', error: string}

declare const state: state // imaginary variable for type-checking only

switch (state.type) {
    case 'loading':
    case 'success':
    case "error":
        break
    default:
        assertNever(state)
}

/* use exhaustive checks when
    - Discriminated unions
    - State machines
    - Reducers
    - API response handling
    - Feature flags
    - Domain logic that must not silently break
*/