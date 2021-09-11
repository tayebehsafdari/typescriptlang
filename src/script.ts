let fullName: string = "Tayebeh Safdari";
console.log("fullName: ", fullName);

let list: number[] = [1, 2, 3, 4];
console.log("list: ", list);

let tuple: [string, number] = [fullName, 34];
console.log("tuple: ", tuple);

let a: undefined = undefined;
console.log("undefined: ", a);
let b: null = null;
console.log("null: ", b);

function sum(x: number, y: number): void {
    console.log("x + y: ", x + y);
}

let c: void = sum(3, 4);
console.log("void: ", c);

let str: string | null = "hello world!";
str = null;
console.log("str: ", str);

enum Direction {
    Up,
    Right,
    Down,
    Left
}

let dir: Direction = Direction.Up;

console.log("enum: ", Direction);
console.log("enum: ", dir);


function directions(): Direction {
    return Direction.Right;
}

console.log("enum: ", directions());