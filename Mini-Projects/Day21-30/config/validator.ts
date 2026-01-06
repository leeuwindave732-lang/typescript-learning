// Config Validator

export type ConfigValidator<
    T extends Record<string, unknown>
> = T extends { timeout: number } // only matches when timeout is required
    ? T & { retry: number } // will add retry as required.
    : T