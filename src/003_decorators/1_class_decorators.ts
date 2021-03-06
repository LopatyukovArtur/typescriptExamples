(()=>{
    function sealed(constructor: Function) {
        console.log("sealed decorator");
        Object.seal(constructor);
        Object.seal(constructor.prototype);
    }

    @sealed
    class User {
        name: string;
        constructor(name: string){
            this.name = name;
        }
        print():void{
            console.log(this.name);
        }
    }

    Object.defineProperty(User, 'age', {
        value: 17
    });
})();