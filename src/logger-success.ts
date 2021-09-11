namespace loggerSuccess {
    export function logger(message: string): void {
        console.log(`%c ${message}`, "color:green");
    }
}