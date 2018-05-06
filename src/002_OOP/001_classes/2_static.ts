class Operation {
    static PI: number = 3.14;
    static getSquare(radius: number): number {
        return Operation.PI * radius * radius;
    }
}
let result = Operation.getSquare(30);
console.log("Площадь круга с радиусом 30 равна " + result);
let result2 = Operation.PI * 30 * 30;
console.log(result2); // 2826