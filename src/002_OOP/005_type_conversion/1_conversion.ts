(()=>{
    class User {

        name: string;
        constructor(userName: string) {

            this.name = userName;
        }
    }

    class Employee extends User {

        company: string;
        constructor(employeeCompany: string, userName: string) {

            super(userName);
            this.company = employeeCompany;
        }
    }
    let alice: User = new Employee("Microsoft", "Alice");

    let aliceEmployee: Employee = <Employee>alice; // преобразование к типу Employee
    console.log(aliceEmployee.company);

   // или так
    console.log((<Employee>alice).company);
})();