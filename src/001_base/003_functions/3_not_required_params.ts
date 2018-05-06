function getName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
let name1 = getName("Иван", "Кузнецов");
console.log(name1); // Иван Кузнецов
let name2 = getName("Вася");
console.log(name2); // Вася