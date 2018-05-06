function case1(){
    let someAnyValue: any = "hello world!";
    let strLength: number = (<string>someAnyValue).length;
    console.log(strLength); // 12
    let someUnionValue: string | number = "hello work";
    strLength = (<string>someUnionValue).length;
    console.log(strLength); // 10
}

function case2(){
    let someAnyValue: any = "hello world!";
    let strLength: number = (someAnyValue as string).length;
    console.log(strLength); // 12
    let someUnionValue: string | number = "hello work";
    strLength = (someUnionValue as string).length;
    console.log(strLength); // 10
}