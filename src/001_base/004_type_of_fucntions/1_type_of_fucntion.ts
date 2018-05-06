function sum (x: number, y: number): number {
    return x + y;
};
function subtract (a: number, b: number): number {
    return a - b;
};

let op: (x:number, y:number) => number;

op = sum;
console.log(op(2, 4));  // 6

op = subtract;
console.log(op(6, 4));  // 2