(()=>{
    function add(a: number, b: number): number {
        return a + b;
    }
    let result1 = add(1, 2);
})();


(()=>{
    function add(a: number, b: number): void {
        console.log(a + b);
    }
    add(10, 20);
})();