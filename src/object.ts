type myObject = {
    firstName: string,
    lastName: string,
    age: number,
    eyeColor: string,
    fullName: () => string
};

const person: myObject = {
    firstName: "Tayebeh",
    lastName: "Safdari Doost",
    age: 34,
    eyeColor: "brown",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

console.log("person: ", person.fullName());