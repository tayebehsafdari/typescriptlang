class Laptop {
    brand: string;
    screenSize: number;
    price: number;
    private static instance: Laptop;

    private constructor(brand: string, screenSize: number, price: number) {
        this.brand = brand;
        this.screenSize = screenSize;
        this.price = price;
    }

    public static getInstance(): Laptop {
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
