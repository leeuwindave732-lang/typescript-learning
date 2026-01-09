// Overloaded Constructor Example 

class Logger {
    constructor(message: string);
    constructor(level: "INFO" | "ERROR", message: string);
    constructor(levelOrMessage: string, message?: string) {
        if ( message ) {
            console.log(`[${levelOrMessage}] ${message}`)
        } else {
            console.log(`[LOG] ${levelOrMessage}`)
        }
    }
}

// usage
new Logger("System Started")
new Logger("ERROR", "Something went wrong")