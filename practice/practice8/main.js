const cars = [
    {producer: "subaru", model: "wrx", year: 2010, color: "blue",type: "sedan", engine: "ej204x", volume: 2, power: 400},
    {producer: "subaru", model: "legacy", year: 2007, color: "silver", type: "sedan", engine: "ez30", volume: 3, power: 250},
    {producer: "subaru", model: "tribeca", year: 2011, color: "white", type: "jeep", engine: "ej20", volume: 2, power: 300},
    {producer: "subaru", model: "leone", year: 1998, color: "yellow", type: "sedan", engine: "ez20x", volume: 2, power: 140},
    {producer: "subaru", model: "impreza", year: 2014, color: "red", type: "sedan", engine: "ej204x", volume: 2, power: 200},
    {producer: "subaru", model: "outback", year: 2014, color: "red", type: "hachback", engine: "ej204", volume: 2, power: 165},
    {producer: "bmw", model: "115", year: 2013, color: "red", type: "hachback", engine: "f15", volume: 1.5, power: 120},
    {producer: "bmw", model: "315", year: 2010, color: "white", type: "sedan", engine: "f15", volume: 1.5, power: 120},
    {producer: "bmw", model: "650", year: 2009, color: "black", type: "coupe", engine: "f60", volume: 6, power: 350},
    {producer: "bmw", model: "320", year: 2012, color: "red", type: "sedan", engine: "f20", volume: 2, power: 180},
    {producer: "mercedes", model: "e200", year: 1990, color: "silver", type: "sedan", engine: "eng200", volume: 2, power: 180},
    {producer: "mercedes", model: "e63", year: 2017, color: "yellow", type: "sedan", engine: "amg63", volume: 3, power: 400},
    {producer: "mercedes", model: "c250", year: 2017, color: "red", type: "sedan", engine: "eng25", volume: 2.5,power: 230}
];

// Відфільтрувати масив за наступними крітеріями :
//     - двигун більше 3х літрів
let cars1 = cars.filter((value) => value.volume > 3);
console.log(cars1);

// - двигун = 2л
let cars2 = cars.filter((value) => value.volume === 2);
console.log(cars2);

// - виробник мерс
let cars3 = cars.filter((value) => value.producer === 'mercedes');
console.log(cars3);

// - двигун більше 3х літрів + виробник мерседес
let cars4 = cars.filter((a) => a.volume > 3 && a.producer === 'mercedes');
console.log(cars4);

// - двигун більше 3х літрів + виробник субару
let cars5 = cars.filter((a) => a.volume > 3 && a.producer === 'subaru');
console.log(cars5);

// - сили більше ніж 300
let cars6 = cars.filter((a) => a.power > 300);
console.log(cars6);

// - сили більше ніж 300 + виробник субару
let cars7 = cars.filter((a) => a.power > 300 && a.producer === 'subaru');
console.log(cars7);

// - мотор серіі ej
let cars8 = cars.filter((a) => a.engine.includes('ej'));
console.log(cars8);

// - сили більше ніж 300 + виробник субару + мотор серіі ej
let cars9 = cars.filter((a) => a.engine.includes('ej') && a.power > 300 && a.producer === 'subaru');
console.log(cars9);

// - двигун меньше 3х літрів + виробник мерседес
let cars10 = cars.filter((a) => a.volume < 3 && a.producer === 'mercedes');
console.log(cars10);

// - двигун більше 2л + сили більше 250
let cars11 = cars.filter((a) => a.volume > 2 && a.power > 250);
console.log(cars11);

// - сили більше 250  + виробник бмв
let cars12 = cars.filter((a) => a.producer === 'bmw' && a.power > 250);
console.log(cars12);


// - взять слдующий массив
const usersWithAddress = [
    {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
    {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
    {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
    {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
    {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
    {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
    {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
    {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
    {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
    {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
    {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
];

// -- Відсортувати їх по ID
console.log(usersWithAddress.sort((a, b) => a.id - b.id));

// -- Відсортувати їх по ID в зворотньому порядку
console.log(usersWithAddress.sort((a, b) => b.id - a.id));

// -- Відсортувати по віку
console.log(usersWithAddress.sort((a, b) => a.age - b.age));

// -- Відсортувати по віку в зворотньому порядку
console.log(usersWithAddress.sort((a, b) => b.age - a.age));

// -- Відсорутвати по імені
console.log(usersWithAddress.sort((a, b) => {
    if (a.name > b.name) {
        return 1
    }
    return -1
}));

// -- Відсорутвати по назві вулиці
console.log(usersWithAddress.sort((a, b) => {
    if (a.address.street > b.address.street) {
        return 1
    }
    return -1
}));

// -- Відсорутвати по номеру будинку
console.log(usersWithAddress.sort((a, b) => {
    if (a.address.number > b.address.number) {
        return 1
    }
    return -1
}));

// -- Залигити тільки тих, хто молодший ніж 30 (filter)
console.log(usersWithAddress.filter((a) => a.age < 30));

// -- Залишити тільки одружених
console.log(usersWithAddress.filter((a) => a.isMarried === true));

// -- Залишити тільки одружених, які молодні за 30
console.log(usersWithAddress.filter((a) => a.isMarried === true && a.age < 30));

// -- Залишити лише тих, в кого парні номери будинків.
console.log(usersWithAddress.filter((a) => a.address.number % 2 === 0));

// -- Порахувати загальний вік всіх людей. (reduce)
let totalAge = usersWithAddress.reduce((acc,currentValue) => {
    return acc + currentValue.age;
},0)
console.log(totalAge);

// -- Ті, хто одружений і старий за 30 має отримати обєкти child і попасти в новий масив (reduce)

let haveChild = usersWithAddress.reduce((a,b) => {
    if (b.isMarried === true && b.age > 30) {
        b.haveChild = true;
        a.push(b);
    }
    return a
},[])
console.log(haveChild);


// ______________________________________________________________________________________________________________________________________________________
// Додатково
// ______________________________________________________________________________________________________________________________________________________

// Задача: дан отсортированный по возрастанию массив целых чисел.
//     Необходимо вернуть наименьший и наибольший индекс заданного элемента.
//     Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
//     Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
//
// Пример:
//     Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.

arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14];

function findIndex(array,element) {
    let min = array.indexOf(element);
    let max = array.lastIndexOf(element);
    console.log(`Answer: MinIndex = ${min}, MaxIndex = ${max}.`);
}

findIndex(arr,1);
findIndex(arr,4);



