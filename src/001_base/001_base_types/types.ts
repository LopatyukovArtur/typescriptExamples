//============== Boolean

let isEnabled = true;
let isAlive: boolean = false;

console.log(isEnabled);
console.log(isAlive);

//============== Number

let decimal: number = 6;
let hex: number= 0xf00d;
let binary: number= 0b1010;
let octal: number= 0o744;

//============== String

let firstName: string = "Tom";
let age: number = 28;
let info: string = `Имя ${firstName} Возраст: ${age}`;
console.log(info); // Имя Tom Возраст: 28

//============== Null и undefined

let a: undefined = undefined;
let b: null = null;

let x: number = undefined;
console.log(x); // undefined

x = null;
console.log(x); // null

x = 5;
console.log(x); // 5

//============== Array

let list: number[] = [10, 20, 30];
let colors: string[] = ["red","green","blue"];
console.log(list[0]); // 10
console.log(colors[1]); // green

let names: Array<string> = ["Tom","Bob","Alice"];
console.log(names[1]); // Bob

//============== Tuples - кортеж

// определение кортежа - кортеж состоит из двух элементов - строки и числа
let userInfo: [string,number];
// инициализация кортежа
userInfo = ["Tom", 28];
// Неправильная инициализация - переданные значения не соответствуют типам по позиции
// userInfo = [28, "Tom"];
// Ошибка
// использование кортежа
console.log(userInfo[1]); // 28
userInfo[1] = 37;

//==============enum

enum Season { Winter, Spring, Summer, Autumn };
let current: Season = Season.Summer;
console.log(current);
current = Season.Autumn;// изменение значения

//==============any
let someVar: any ="hello";
console.log(someVar); // сейчас someVar - это string
someVar = 20;
console.log(someVar); // сейчас someVar - это number
var someArray: any[] = [ 24, "Tom", false];