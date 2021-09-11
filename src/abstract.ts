abstract class Car {
    protected static brand: string;
    readonly model: string;
    color: string;
    year: number;

    constructor(brand: string, model: string, color: string, year: number) {
        console.log("this: ", this);
        Car.brand = brand;
        this.model = model;
        this.color = color;
        this.year = year;
    }

    /* present(): string {
        return "Car present";
    } */

    abstract present(): string;

    static getBrand() {
        return Car.brand;
    }

    show(): string {
        return "Car show" + " " + this.present();
    }
}

class Model extends Car {
    present(): string {
        return "Model present";
    }

    static show(): string {
        return "Model show";
    }

    /* setModel() {
        return this.model = "Figo";
    } */
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