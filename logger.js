"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
class Car {
    constructor(brand, model, color, year) {
        console.log("this: ", this);
        Car.brand = brand;
        this.model = model;
        this.color = color;
        this.year = year;
    }
    static getBrand() {
        return Car.brand;
    }
    show() {
        return "Car show" + " " + this.present();
    }
}
class Model extends Car {
    present() {
        return "Model present";
    }
    static show() {
        return "Model show";
    }
}
let mycar = new Model("Ford", "Mustang", "red", 1964);
console.log("mycar: ", mycar);
console.log("Model: ", mycar.show());
console.log("Model: ", Model.show());
// console.log("brand: ", Model.brand);
console.log("brand: ", Model.getBrand());
// mycar.model = "Figo";
console.log("model: ", mycar.model);
// console.log("model: ", mycar.setModel());
/* function Person1(first: string, last: string, age: number, eye: string): void {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

const person1 = new Person1("Tayebeh", "Safdari Doost", 34, "brown");

console.log(person1); */
class Person2 {
    // private eyeColor: string;
    // public fullName: () => string
    constructor(first, last, eye) {
        this.first = first;
        this.last = last;
        this.eye = eye;
        // private firstName: string;
        // private lastName: string;
        this.age = 34;
        // this.firstName = first;
        // this.lastName = last;
        // this.age = age;
        // this.eyeColor = eye;
    }
    fullName() {
        // return this.firstName + " " + this.lastName;
        return this.first + " " + this.last;
    }
}
class Person3 extends Person2 {
    displayAge() {
        return this.age;
    }
}
const person2 = new Person3("Tayebeh", "Safdari Doost", "brown");
console.log(person2);
console.log(person2.fullName());
console.log(person2.displayAge());
function firstUser(constructor) {
    console.log("constructor1: ", constructor);
    return class User1 extends constructor {
        constructor() {
            super(...arguments);
            this.property = "property User1";
        }
    };
}
function secondUserFactory(value) {
    return function secondUser(constructor) {
        console.log("constructor2: ", constructor);
        return class User2 extends constructor {
            constructor() {
                super(...arguments);
                this.property = value;
            }
        };
    };
}
function getNameFactory(value) {
    return function (target, propertyKey, descriptor) {
        console.log("target method: ", target);
        console.log("propertyKey method: ", propertyKey);
        console.log("descriptor method: ", descriptor);
        descriptor.writable = value;
        console.log("descriptor: method", descriptor);
    };
}
function nameFactory() {
    return function (target, propertyKey) {
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
    };
}
function log(target, propertyKey, parameterIndex) {
    console.log("target parameter: ", target);
    console.log("propertyKey parameter: ", propertyKey);
    console.log("parameterIndex parameter: ", parameterIndex);
}
let User = class User {
    constructor(message) {
        this.message = message;
        this.name = "Tayebeh Safdari Doost";
    }
    getName() {
        return this.name;
    }
    /* setName(name: string) {
        console.log(name);
    } */
    setName(name, age) {
    }
};
__decorate([
    nameFactory()
], User.prototype, "name", void 0);
__decorate([
    getNameFactory(false)
], User.prototype, "getName", null);
__decorate([
    __param(0, log),
    __param(1, log)
], User.prototype, "setName", null);
User = __decorate([
    firstUser
    // @secondUser
    ,
    secondUserFactory("property User2")
], User);
let user = new User("Hello . . .");
// user.getName = () => "Soodeh Safdari";
console.log("user: ", user.getName());
user.setName("typescriptlang", 34);
console.log("user: ", user);
class Laptop {
    constructor(brand, screenSize, price) {
        this.brand = brand;
        this.screenSize = screenSize;
        this.price = price;
    }
    static getInstance() {
        if (!Laptop.instance) {
            Laptop.instance = new Laptop("Acer", 17, 377.0);
        }
        return Laptop.instance;
    }
}
// let lap = new Laptop("Acer", 17, 377.0);
// let lap2 = new Laptop("Dell", 15, 300.0);
// console.log("Laptop: ", lap);
// console.log("Laptop: ", lap2);
// console.log("Laptop: ", lap instanceof Laptop);
let lap = Laptop.getInstance();
let lap2 = Laptop.getInstance();
let lap3 = Laptop.getInstance();
let lap4 = Laptop.getInstance();
console.log("Laptop: ", lap);
console.log("Laptop: ", lap2);
console.log("Laptop: ", lap3);
console.log("Laptop: ", lap4);
function sum1(x, y) {
    return x + y;
}
console.log("sum1: ", sum1(3, 4));
let sum2 = (x, y) => x + y;
console.log("sum2: ", sum2(13, 66));
let sum3 = (x, y) => x + y;
console.log("sum3: ", sum3(3, 2));
let sum4 = (x = 5, y = 10) => x + y;
console.log("sum4: ", sum4());
let sum5 = (x = 5, y) => {
    if (y) {
        return x + y;
    }
    return x;
};
console.log("sum5: ", sum5(9));
let sum6 = (x, y, ...z) => {
    console.log(x, y, z);
};
sum6(1, 2, 3, 4);
function myFunc(data, data2) {
    return data2;
}
console.log("name: ", myFunc("Tayebeh Safdari", 34));
console.log("age: ", myFunc(34, 34));
console.log("single: ", myFunc(true, 34));
console.log("my love: ", myFunc({ name: "Mehdi Estavi", age: 40 }, 34));
let myList = [1, 2, 3, 4];
let myList1 = [1, 2, 3, 4];
console.log("myList: ", myList);
console.log("myList: ", myList1);
function listFunc(data) {
    return data;
}
console.log("myList: ", listFunc([1, 2, 3]));
// let myFunc2: genericType = myFunc;
let myFunc2 = (data) => {
    return data;
};
// myFunc2 = myFunc;
console.log("myFunc2: ", myFunc2("myFunc2"));
class MyArray {
    constructor(data, data2) {
        this.data = data;
        this.data2 = data2;
    }
    addItem(item) {
        this.data.push(item);
    }
    getItem(index) {
        return this.data[index];
    }
}
let myArray = new MyArray([1, 2, 3, 4], ["Tayebeh", "Sahar"]);
console.log("myArray: ", myArray);
myArray.addItem(5);
console.log("myArray: ", myArray);
myArray.addItem(6);
myArray.addItem(7);
console.log("myArray: ", myArray);
console.log("myArray: ", myArray.getItem(0));
console.log("myArray: ", myArray.getItem(3));
console.log("myArray: ", myArray.data2);
let obj1 = {
    breed: "Bichon Frise",
    size: "small",
    age: 4,
    color: "white"
};
let obj2 = {
    breed: "Pomeranian",
    size: "small",
    age: 4,
    color: "white",
    height: "18cm",
    weight: "1.4kg"
};
function dog(obj) {
    console.log("obj: ", obj);
    console.log("breed: ", obj.breed);
    console.log("size: ", obj.size);
    console.log("age: ", obj.age);
    // console.log("color: ", obj.color="black");
}
dog(obj1);
dog(obj2);
let mysearchFunc = (str, substring) => {
    let result = str.search(substring);
    return result > -1;
};
console.log("mysearchFunc: ", mysearchFunc("Tayebeh Safdari Doost", "Tayebeh"));
class FirstPerson {
    constructor(name, age, gender, occupation) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.occupation = occupation;
    }
    work() {
        return this.name + " works very hard.";
    }
}
class SecondPerson {
    constructor(name, age, gender, occupation) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.occupation = occupation;
    }
    work() {
        return this.name + " works very hard.";
    }
}
let firstPerson = new FirstPerson("Tayebeh Safdari Doost", 34, "female", "programmer");
firstPerson = new SecondPerson("Mehdi Estavi", 40, "male", "CEO");
console.log(firstPerson.work());
var loggerSuccess;
(function (loggerSuccess) {
    function logger(message) {
        console.log(`%c ${message}`, "color:green");
    }
    loggerSuccess.logger = logger;
})(loggerSuccess || (loggerSuccess = {}));
/// <reference path="./logger-success.ts" />
var loggerError;
/// <reference path="./logger-success.ts" />
(function (loggerError) {
    function logger(message) {
        console.log(`%c ${message}`, "color:red");
    }
    loggerError.logger = logger;
})(loggerError || (loggerError = {}));
/// <reference path="./logger-success.ts" />
/// <reference path="./logger-error.ts" />
loggerError.logger("hello world ! hello world !");
loggerSuccess.logger("hello world ! hello world !");
System.register("module2", [], function (exports_1, context_1) {
    "use strict";
    var Logger;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Logger = class Logger {
                success(message) {
                    console.log(message);
                }
            };
            exports_1("default", new Logger());
        }
    };
});
System.register("module1", ["module2"], function (exports_2, context_2) {
    "use strict";
    var module2_1;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (module2_1_1) {
                module2_1 = module2_1_1;
            }
        ],
        execute: function () {
            module2_1.default.success("Tayebeh");
            console.log("module1");
        }
    };
});
const person = {
    firstName: "Tayebeh",
    lastName: "Safdari Doost",
    age: 34,
    eyeColor: "brown",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};
console.log("person: ", person.fullName());
let fullName = "Tayebeh Safdari";
console.log("fullName: ", fullName);
let list = [1, 2, 3, 4];
console.log("list: ", list);
let tuple = [fullName, 34];
console.log("tuple: ", tuple);
let a = undefined;
console.log("undefined: ", a);
let b = null;
console.log("null: ", b);
function sum(x, y) {
    console.log("x + y: ", x + y);
}
let c = sum(3, 4);
console.log("void: ", c);
let str = "hello world!";
str = null;
console.log("str: ", str);
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Right"] = 1] = "Right";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
})(Direction || (Direction = {}));
let dir = Direction.Up;
console.log("enum: ", Direction);
console.log("enum: ", dir);
function directions() {
    return Direction.Right;
}
console.log("enum: ", directions());
