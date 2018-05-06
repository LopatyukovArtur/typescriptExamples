(()=>{
    function validator(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const oldSet = descriptor.set;
        descriptor.set = function(value: string) {
            if (value === "admin") {
                throw new Error("Invalid value");
            }
            oldSet.call(this, value);
        }
    }
    class User {
        private _name: string;
        constructor(name: string){
            this.name = name;
        }
        public get name(): string {
            return this._name;
        }
        @validator
        public set name(n: string) {
            this._name = n;
        }
    }
    let tom = new User("Tom");
    tom.name= "admin";
    console.log(tom.name);
})()