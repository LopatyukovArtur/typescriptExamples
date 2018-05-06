(()=>{
    function getString<T>(arg: Array<T>): string {
        let result = "";
        for (let i = 0; i < arg.length; i++) {
            if (i > 0)
                result += ",";
            result += arg[i].toString();
        }
        console.log(result);
        return result;
    }
    let result = getString<number>( [1, 2, 34, 5]);
    console.log(result);
})();
