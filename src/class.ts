/* function Person1(first: string, last: string, age: number, eye: string): void {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

const person1 = new Person1("Tayebeh", "Safdari Doost", 34, "brown");

console.log(person1); */


class Person2 {
    // private firstName: string;
    // private lastName: string;
    protected age: number = 34;
    // private eyeColor: string;

    // public fullName: () => string

    constructor(private first: string, private last: string, private eye: string) {
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


