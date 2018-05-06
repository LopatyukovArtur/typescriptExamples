(()=>{
    let sum = (x: number, y: number) => x + y;
    let result = sum(15, 35); // 50
    console.log(result);
})();

(()=>{
    let sum = (x, y) => x + y;
    let result = sum(15, 35); // 50
    console.log(result);
})();
(()=>{
    let square = x => x * x;
    let hello = () => "hello world"
    console.log(square(5)); // 25
    console.log(hello()); // hello world
})();