(()=>{
    // определение функции
    function add(a: number, b: number){
        let result = a + b;
        console.log(result);
    }
    // вызов функции
    add(20, 30); // 50
    add(10, 15); //25

    //add("1", "2"); - error
})();


(()=>{
    let koef: number = 1.5;
    function add(a: number){
        let result = a *koef;
        console.log(result);
    }
    add(20); // 30
    add(10); //15
})();

