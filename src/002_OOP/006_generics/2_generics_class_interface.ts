(()=>{
    class User<T> {
        private _id: T;
    constructor(id:T) {
        this._id=id;
    }
    getId(): T {
        return this._id;
    }
}
    let tom = new User<number>(3);
    console.log(tom.getId()); // возвращает number
    let alice = new User<string>("vsf");
    console.log(alice.getId()); // возвращает string


    // тоже самое с интерфейсами
    interface IUser<T> {
        getId(): T;
    }
})();