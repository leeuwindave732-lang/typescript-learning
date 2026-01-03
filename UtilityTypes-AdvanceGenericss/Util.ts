// Combine utility types with generics for flexible, reusable types.

type Config = {
    retry: number,
    timeout: number,
    verbose: boolean
}

const PartialConfig: Partial<Config> = 
    {
        retry: 3
    } // partial 

const RequiredConfig: Required<Config> = 
    {
        retry: 3,
        timeout: 1,
        verbose: true
    } // all values required

const ReadonlyConfig: Readonly<Config> = 
    {
        retry: 1,
        timeout: 3,
        verbose: false
    } // readonly



type RetryOnly = Pick<Config, 'retry'> // retry only using pick
const retry: RetryOnly = {
    retry: 1
}

type ConfigWithoutRetry = Omit<Config, 'retry'> // config without retry
const withoutRetry: ConfigWithoutRetry = {
    timeout: 1,
    verbose: true
}


type Environment = 'developer' | 'user'
const envConfig: Record<Environment, Config> = { // defining an object type with a specific key type and value type.
    developer: 
                {
                    retry: 1,
                    timeout: 3,
                    verbose: true
                },
    user:       
                {
                    retry: 1,
                    timeout: 1,
                    verbose: false
                }
    
}

// using Exclude to exclude User
type ExcludeEnv = 'Developer' | 'Admin' | 'User'

// Combing Utility types Record and Exclude
type ConfigUser = Record<Exclude<ExcludeEnv, 'User'>, Config>

const exclude1: ConfigUser = {
    Developer: {
        retry: 1,
        timeout: 2,
        verbose: true
    },
    Admin: {
        retry: 1,
        timeout: 1,
        verbose: true
    }
    
}

// Advance Generics

function UpdateObject<T, K extends keyof T>(obj: T, key: K, value: T[K]): T {
    return {...obj, [key]: value}
}

const Admin = {
    retry: 1,
    timeout: 2,
    verbose: true
}

const updated = UpdateObject(Admin, 'verbose', false)

console.log(PartialConfig) // retry: 3
console.log(RequiredConfig) // retry: 3, timeout: 1, verbose: true 
console.log(ReadonlyConfig) // retry: 1, timeout: 3, verbose: false 
console.log(retry) // retry: 1
console.log(withoutRetry) // timeout: 1, verbose: true
console.log(envConfig) //   developer: { retry: 1, timeout: 3, verbose: true },
                      //    user: { retry: 1, timeout: 1, verbose: false }
                    
console.log(exclude1) //   Developer: { retry: 1, timeout: 2, verbose: true },
                     //    Admin: { retry: 1, timeout: 1, verbose: true }
                    
console.log(updated) // retry: 1, timeout: 2, verbose: false