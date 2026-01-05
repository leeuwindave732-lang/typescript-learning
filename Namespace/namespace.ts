// Backend Utilities Namespace

namespace Backend {
    export namespace Logger {
        export function info(message: string) {
            console.log(`[LOG]: ${message}`)
        }

        export function error(message: string) {
            console.log(`[ERROR]: ${message}`)
        }
    }

    export namespace Validator {
        export function isEmail(value: string): boolean {
            return value.includes("@") // must include @ in an email
        }
        export function isPositiveNumber(value: number): boolean {
            return value > 0
        }
    }

    export namespace Config {
        export type AppConfig = {
            port: number
            env: 'Dev' | 'Prod'
        }
        export const defaultConfig: AppConfig = {
            port: 3000,
            env: 'Dev'
        }
    }
}

Backend.Logger.info('Application starting...')
// [LOG]: Application starting...

Backend.Logger.error('Application error...')
// [ERROR]: Application error...


const isInvalid = Backend.Validator.isEmail("SeijuHajime")
console.log('Email valid:', isInvalid)
// Email valid: false

const isValid = Backend.Validator.isEmail('test@email.com')
console.log(`Email valid:`, isValid)
// Email valid:  true

const config = Backend.Config.defaultConfig
console.log(`Running on port ${config.port} in ${config.env} mode`) 
// Running on port 3000 in Dev mode