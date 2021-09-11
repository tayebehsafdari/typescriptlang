function myFunc<Type, Type2>(data: Type, data2: Type2): Type | Type2 {
    return data2;
}

console.log("name: ", myFunc<string, number>("Tayebeh Safdari", 34));
console.log("age: ", myFunc<number, number>(34, 34));
console.log("single: ", myFunc<boolean, number>(true, 34));
console.log("my love: ", myFunc<object, number>({name: "Mehdi Estavi", age: 40}, 34));


let myList: number[] = [1, 2, 3, 4];
let myList1: Array<number> = [1, 2, 3, 4];
console.log("myList: ", myList);
console.log("myList: ", myList1);

function listFunc<Type>(data: Type[]): Type[] {
    return data;
}

console.log("myList: ", listFunc<number>([1, 2, 3]));

// type genericType = <Type>(data: Type) => Type;
/* interface genericType {
    <Type>(data: Type): Type;
} */
interface genericType<Type> {
    (data: Type): Type;
}

// let myFunc2: genericType = myFunc;
let myFunc2: genericType<string> = (data: string): string => {
    return data;
};

// myFunc2 = myFunc;

console.log("myFunc2: ", myFunc2("myFunc2"));


class MyArray<Type extends number | string, Type2> {
    constructor(private data: Type[], public data2: Type2[]) {
    }

    addItem(item: Type) {
        this.data.push(item);
    }

    getItem(index: number) {
        return this.data[index];
    }
}

let myArray = new MyArray<number, string>([1, 2, 3, 4], ["Tayebeh", "Sahar"]);

console.log("myArray: ", myArray);
myArray.addItem(5);
console.log("myArray: ", myArray);
myArray.addItem(6);
myArray.addItem(7);
console.log("myArray: ", myArray);
console.log("myArray: ", myArray.getItem(0));
console.log("myArray: ", myArray.getItem(3));
console.log("myArray: ", myArray.data2);





