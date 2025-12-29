type Config = {
    retry: number;
    timeout: number;
    verbose: boolean;
};

type Env = "development" | "production";


type PartialConfig = Partial<Config>
type RequiredConfig = Required<Config>
type ReadonlyConfig = Readonly<Config>
type PickConfig = Pick<Config, 'retry'>
type OmitConfig = Omit<Config, 'retry'>
type RecordConfig = Record<Env, Config>

// in Partial, it make all the properties optional, 
const config: PartialConfig = {
    retry: 2
}

// in Required, we are required to put properties in all the values
const config1: RequiredConfig = {
    retry: 1,
    timeout: 60,
    verbose: true
}

// in Readonlt, it makes all of its properties immutable. That means once you assign values to the object, you cannot change them.
const config2: ReadonlyConfig = {
    retry: 1,
    timeout: 60,
    verbose: true
}

// in Pick, you will select only the properties you want.
const config3: PickConfig = {
    retry:1
}

// in Omit, you remove the properties you don’t want.
const config4: OmitConfig = {
    timeout: 60,
    verbose: true
}

// in Record, you create an object where each key maps to the same value structure
const config5: RecordConfig = {
    development: {
        retry: 1,
        timeout: 60,
        verbose: false
    },
    production: {
        retry: 2,
        timeout: 60,
        verbose: true
    }
}


console.log(config)
console.log(config1)
console.log(config2)
console.log(config3)
console.log(config4)
console.log(config5)