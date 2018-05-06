(()=>{
    class User {
        private name: string;
        protected age: number;
        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }
        public displayInfo(): void {

            console.log("name: " + this.name + "; age: " + this.age);
        }
    }
    class Employee extends User {

        private company: string;
        constructor(name: string, age: number, company: string) {
            super(name, age);
            this.company = company;
        }
        public showData(): void {
            console.log("Age: " + this.age);
            //console.log("Name: " + this.name); // не работает, так как name - private
        }
    }
})();
