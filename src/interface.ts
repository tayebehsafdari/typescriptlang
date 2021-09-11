interface Dog {
    breed: string;
    size?: string;
    age: number;
    readonly color: string;

    [propName: string]: string | undefined | number;
}

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

function dog(obj: Dog) {
    console.log("obj: ", obj);
    console.log("breed: ", obj.breed);
    console.log("size: ", obj.size);
    console.log("age: ", obj.age);
    // console.log("color: ", obj.color="black");
}

dog(obj1);
dog(obj2);

// type searchFunc = (str: string, substring: string) => boolean;
interface searchFunc {
    (str: string, substring: string): boolean;
}

let mysearchFunc: searchFunc = (str: string, substring: string): boolean => {
    let result = str.search(substring);
    return result > -1;
}

console.log("mysearchFunc: ", mysearchFunc("Tayebeh Safdari Doost", "Tayebeh"));

interface Person {
    name: string;
    age: number;
    gender: string;
    occupation: string;

    work(): string;
}

class FirstPerson implements Person {

    constructor(public name: string, public age: number, public gender: string, public occupation: string) {
    }

    work(): string {
        return this.name + " works very hard.";
    }

}

class SecondPerson implements Person {

    constructor(public name: string, public age: number, public gender: string, public occupation: string) {
    }

    work(): string {
        return this.name + " works very hard.";
    }

}

let firstPerson: Person = new FirstPerson("Tayebeh Safdari Doost", 34, "female", "programmer");
firstPerson = new SecondPerson("Mehdi Estavi", 40, "male", "CEO")
console.log(firstPerson.work());