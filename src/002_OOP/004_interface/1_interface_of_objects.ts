(()=>{
    interface IUser {
        id: number;
        name: string;
    }
    let employee: IUser = {
        id: 1,
        name: "Alice"
    };
    function getEmployeeInfo(user: IUser): void {
        console.log("id: " + user.id);
        console.log("name: " + user.name)
    }
    getEmployeeInfo(employee);

    function buildUser(userId: number, userName: string): IUser {
        return { id: userId, name: userName };
    }
    let newUser = buildUser(2, "Bill");
    console.log("id: " + newUser.id);
    console.log("name: " + newUser.name)
})();

(()=>{
    interface IUser {
        id: number;
        name: string;
        age?: number;
        readonly y: number;
        getFullName(surname: string): string;
    }

})();