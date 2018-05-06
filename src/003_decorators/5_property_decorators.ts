(()=>{
    function format(target: Object, propertyKey: string){
        let _val = this[propertyKey]; // получаем значение свойства
        // геттер
        var getter = function () {
            return "Mr./Ms." + _val;
        };
        // сеттер
        var setter = function (newVal) {
            _val = newVal;
        };
        // удаляем свойство
        if (delete this[propertyKey]) {
            // И создаем новое свойство с геттером и сеттером
            Object.defineProperty(target, propertyKey, {
                get: getter,
                set: setter
            });
        }
    }
    class User {
        @format
        name: string;
        constructor(name: string){
            this.name = name;
        }
        print():void{
            console.log(this.name);
        }
    }
    let tom = new User("Tom");
    tom.print();
    tom.name = "Tommy";
    tom.print();
})();