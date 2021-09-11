function sum1(x: number, y: number): number {
    return x + y;
}

console.log("sum1: ", sum1(3, 4));

let sum2 = (x: number, y: number): number => x + y;
console.log("sum2: ", sum2(13, 66));

type myFunction = (x: number, y: number) => number;
let sum3: myFunction = (x, y): number => x + y;
console.log("sum3: ", sum3(3, 2));


let sum4 = (x: number = 5, y: number = 10): number => x + y;
console.log("sum4: ", sum4());

let sum5 = (x: number = 5, y?: number): number => {
    if (y) {
        return x + y;
    }
    return x;
};
console.log("sum5: ", sum5(9));

let sum6 = (x: number, y: number, ...z: number[]): void => {
    console.log(x, y, z);
};
sum6(1, 2, 3, 4);
