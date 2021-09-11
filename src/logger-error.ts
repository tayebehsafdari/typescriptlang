/// <reference path="./logger-success.ts" />

namespace loggerError {
    export function logger(message: string): void {
        console.log(`%c ${message}`, "color:red");
    }
}