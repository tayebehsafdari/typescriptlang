function firstUser<Type extends { new(...args: any[]): {} }>(constructor: Type) {
    console.log("constructor1: ", constructor);
    return class User1 extends constructor {
        property = "property User1";
    }
}

function secondUserFactory(value: string) {
    return function secondUser<Type extends { new(...args: any[]): {} }>(constructor: Type) {
        console.log("constructor2: ", constructor);
        return class User2 extends constructor {
            property = value;
        }
    };
}

function getNameFactory(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("target method: ", target);
        console.log("propertyKey method: ", propertyKey);
        console.log("descriptor method: ", descriptor);
        descriptor.writable = value;
        console.log("descriptor: method", descriptor);
    }
}

function nameFactory() {
    return function (target: Object, propertyKey: string | symbol) {
        console.log("target property: ", target);
        console.log("propertyKey property: ", propertyKey);
        // let val = target[propertyKey];
        let val = Reflect.get(target, propertyKey);
        console.log("val property: ", val);
        Object.defineProperty(target, propertyKey, {
            get: () => val,
            set: (val) => val = `Parvin ${val}`,
            configurable: true,
            enumerable: true
        });
    }
}

function log(target: Object, propertyKey: string | symbol, parameterIndex: number) {
    console.log("target parameter: ", target);
    console.log("propertyKey parameter: ", propertyKey);
    console.log("parameterIndex parameter: ", parameterIndex);
}

@firstUser
// @secondUser
@secondUserFactory("property User2")

class User {
    @nameFactory()
    private name = "Tayebeh Safdari Doost";

    constructor(public message: string) {
    }

    @getNameFactory(false)
    getName() {
        return this.name;
    }

    /* setName(name: string) {
        console.log(name);
    } */

    setName(@log name: string, @log age: number) {
    }
}

let user = new User("Hello . . .");
// user.getName = () => "Soodeh Safdari";
console.log("user: ", user.getName());
user.setName("typescriptlang", 34);
console.log("user: ", user);