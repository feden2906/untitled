// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car


// function Car(model, manufacturer, yearOfIssue, maxSpeed, engineVolume) {
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.yearOfIssue = yearOfIssue;
//     this.maxSpeed = maxSpeed;
//     this.engineVolume = engineVolume;
//     this.driver = 'someone';
//
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//
//     this.info = function () {
//         console.log(`model: ${this.model} \n manufacturer: ${this.manufacturer} \n yearOfIssue: ${this.yearOfIssue} \n maxSpeed: ${this.maxSpeed} \n engineVolume: ${this.engineVolume}`)
//     }
//
//     this.increaseMaxSpeed = function (newMaxSpeed) {
//         this.maxSpeed = newMaxSpeed;
//         console.log(`New max speed: ${newMaxSpeed}`);
//     }
//
//     this.changeYear = function (newValue) {
//         this.yearOfIssue = newValue;
//         console.log(`New year: ${newValue}`);
//     }
//
//     this.addDriver = function (newDriver) {
//         this.driver = newDriver;
//         console.log(`${newDriver}`);
//     }
// }
//
// let car = new Car('Studebaker US6', 'Studebaker Corporation', 1941, 69, 7);
// console.log(car);
//
// car.drive();
// car.info();
// car.increaseMaxSpeed(81);
// car.changeYear(1992);
//
// car.addDriver({name: 'max', age: 20, experiense: 4});


// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

class Car {
    constructor(model, manufacturer, yearOfIssue, maxSpeed, engineVolume) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.yearOfIssue = yearOfIssue;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
        this.driver = 'someone';
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    info() {
        console.log(`model: ${this.model} \n manufacturer: ${this.manufacturer} \n yearOfIssue: ${this.yearOfIssue} \n maxSpeed: ${this.maxSpeed} \n engineVolume: ${this.engineVolume}`)
    }

    increaseMaxSpeed(newMaxSpeed) {
        this.maxSpeed = newMaxSpeed;
        console.log(`New max speed: ${newMaxSpeed}`);
    }

    changeYear(newValue) {
        this.yearOfIssue = newValue;
        console.log(`New year: ${newValue}`);
    }

    addDriver(newDriver) {
        this.driver = newDriver;
        console.log(`${newDriver}`);
    }
}

let car = new Car('Studebaker US6', 'Studebaker Corporation', 1943, 80, 10);
console.log(car);

car.drive();
car.info();
car.increaseMaxSpeed(95);
car.changeYear(1966);
car.addDriver({name: 'max', age: 20, experiense: 4});

//
// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом


// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }
//
//
// class Cinderella extends Person {
//     constructor(name, age, footSize) {
//         super(name, age);
//         this.footSize = footSize;
//     }
// }
//
// class Prince extends  Person {
//     constructor(name, age, shoesSize) {
//         super(name, age);
//         this.shoesSize = shoesSize;
//     }
// }
//
// const newPrince = new Prince('max', 25, 36);
//
// const cinderellaList = [
//     new Cinderella('Olivia', 18, 35),
//     new Cinderella('Roberta', 21, 38),
//     new Cinderella('Marta', 23, 38),
//     new Cinderella('Ivy', 17, 37),
//     new Cinderella('Liya', 25, 36),
//     new Cinderella('Geya', 18, 35),
//     new Cinderella('Erica', 21, 39),
//     new Cinderella('Minevra', 22, 38),
//     new Cinderella('Theo', 28, 35),
//     new Cinderella('Jasmine', 19, 39),
// ]
//
// for (const cinderella of cinderellaList) {
//     if (cinderella.footSize === newPrince.shoesSize) {
//         console.log(cinderella);
//     }
// }


// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить


function Cinderella (name, age, footSize) {
        this.footSize = footSize;
        this.name = name;
        this.age = age;
}


function Prince (name, age, shoesSize) {
        this.shoesSize = shoesSize;
        this.name = name;
        this.age = age;

        this.findCinderella = function (footSize){
            for (const cinderella of footSize) {
                if (cinderella.footSize === this.shoesSize) {
                    console.log(cinderella);
                }
            }
        }
}

const cinderellaList = [
    new Cinderella('Olivia', 18, 35),
    new Cinderella('Roberta', 21, 38),
    new Cinderella('Marta', 23, 38),
    new Cinderella('Ivy', 17, 37),
    new Cinderella('Liya', 25, 36),
    new Cinderella('Geya', 18, 35),
    new Cinderella('Erica', 21, 39),
    new Cinderella('Minevra', 22, 38),
    new Cinderella('Theo', 28, 35),
    new Cinderella('Jasmine', 19, 39),
]

const newPrince = new Prince('Max', 25, 36);

newPrince.findCinderella(cinderellaList);


