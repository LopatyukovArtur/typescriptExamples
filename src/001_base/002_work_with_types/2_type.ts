(()=>{
    type stringOrNumberType = number | string;
    let sum: stringOrNumberType = 36.6;
    if (typeof sum === "number") {
        console.log(sum / 6);
    }
})();