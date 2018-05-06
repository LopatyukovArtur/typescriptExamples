(()=>{
    class User {
        readonly id: number;
        name: string;
        constructor(userId: number, userName: string) {
            this.id = userId;
            this.name = userName;
        }
    }
    let tom: User = new User(2, "Tom");
    console.log(tom.id, tom.name);
    //tom.id=34; // Ошибка - так как id - только для чтения
})();