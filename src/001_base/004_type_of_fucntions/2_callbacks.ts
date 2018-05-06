function mathOp(x: number, y: number, operation: (a: number, b: number) => number): number{
    let result = operation(x, y);
    return result;
}
let operationFunc: (x: number, y: number) => number;
operationFunc = function (a: number, b: number): number {
    return a + b;
}
console.log(mathOp(10, 20, operationFunc)); // 30
operationFunc = function (a: number, b: number): number {
    return a * b;
}
console.log(mathOp(10, 20, operationFunc)); // 200