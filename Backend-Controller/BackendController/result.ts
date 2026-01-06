// result

export type Result<T, E> = 
    | { ok: true, value: T}
    | { ok: false, error: E}

// T = User
// E = UserError

