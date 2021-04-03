// 1) створити функцію яка приймає масив та виводить його

let array = [1, 2, 3, 4, 5, 6, 7];

function newArray(arr) {
    console.log(arr);
    // for (let arrElement of arr) {
    //     console.log(arrElement);
    // }
}

// newArray(array);

// 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.

function randomNumbers(randomLength, min, max) {
    let array = [];
    for (let i = 0; i < randomLength; i++) {
        array.push(Math.floor(Math.random() * (max - min) + min))
    }
    return array;
}

let randomNumbers1 = randomNumbers(10, 51, 180);
newArray(randomNumbers1);


// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

function fewestNumber(first, second, third,) {
    if (first < second && first < third) {
        console.log(first);
    } else if (second < first && second < third) {
        console.log(second);
    } else if (third < first && third < second) {
        console.log(third);
    }
}

fewestNumber(12, 80, 41);

// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

function greatestNumber(a, b, c,) {
    if (a > b && a > c) max = a;
    if (b > a && b > c) max = b;
    if (c > a && c > b) max = c;

    return max;
}

let result = greatestNumber(21, 444, 7);
console.log(result);


// 5) створити функцію яка повертає найбільше число з масиву

function returnMaxNumber(array) {
    let maxNumber = array[0];
    for (let arr of array) {
        if (maxNumber < arr) maxNumber = arr;
    }
    return maxNumber;
}

let maxNumber = returnMaxNumber([1, 55, 9, 12, 5]);
console.log(maxNumber);


// 6) створити функцію яка повертає найменьше число з масиву

function returnMinNumber(arrayNew) {
    let minNumber = arrayNew[0];
    for (let arrNew of arrayNew) {
        if (minNumber > arrNew) minNumber = arrNew;
    }
    return minNumber;
}

let minNumber = returnMinNumber([22, 2, 78, 74, 6, 101]);
console.log(minNumber);


// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.

function sumArray() {
    let sum = 0;
    for (const argument of arguments) {
        sum += argument;
    }
    return sum;
}

let sum = sumArray(4, 9, 6, 12, 40);
console.log(sum);


// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

function item(array) {
    let sumArray2 = 0;
    for (const arr of array) {
        sumArray2 += arr;
    }
    return sumArray2 / array.length;
}

let number = item([45, 9, 14, 6, 8]);
console.log(number);


// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]



let objectKey = [{name: 'Dima', age: 13}, {model: 'Camry'}];
const key = [];

function extractKey(array) {
    for (const arr of array) {
        for (const arrKey in arr) {
            key.push(arrKey)
        }
    }
    return key;
}

let result3 = extractKey(objectKey);
console.log(result3);


// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

let objectValues = [{name: 'Dima', age: 13}, {model: 'Camry'}];
let newArrOfValues = [];

function extractValues (arr) {
    for (let i = 0; i < arr.length; i++) {
        newArrOfValues.push(Object.values(arr[i]));
    }
    return newArrOfValues.flat();
}

let result2 = extractValues(objectValues);
console.log(result2);


// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

function sumOfArray(first, second) {
    let result = [];
    for (let i = 0; i < first.length; i++) {
        result.push(first[i] + second[i]);
    }
    return result;
}

let sumOfArray1 = sumOfArray([1, 2, 3, 4], [2, 3, 4, 5]);
console.log(sumOfArray1);


// ============================================================================================
//
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

function returnMinprintMax() {
    let min = arguments[0];
    let max = arguments[0];
    for (let argument of arguments) {
        if (argument > max) max = argument;
        if (argument < min) min = argument;
    }
    console.log(max);
    return min;
}

let min = returnMinprintMax(41, 5, 106, 17, 23);
console.log(min);

// - Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

let arrayNewProject = [1, 2, 3, 4];

function changeElement(arr, index) {
    let array = [...arr]
    if (index < array.length - 1) {
        let temp = array[index];
        array[index] = array[index + 1];
        array[index + 1] = temp;
    }
    return array;
}

let changeElement1 = changeElement(arrayNewProject, 2);
console.log(arrayNewProject);
console.log(changeElement1);


//
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

function arrayZero(array) {
    let zero = [];
    let number = [];
    for (const item of array) {
        if (item === 0) {
            zero.push(0);
        } else {
            number.push(item)
        }
    }
    return number.concat(zero);
}

console.log(arrayZero([1, 0, 6, 0, 3]));
console.log(arrayZero([0, 1, 2, 3, 4]));
console.log(arrayZero([0, 0, 1, 0]));


//
// - Дано список імен.
// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

function wrongName (resolve) {
    resolve = resolve.trim();
    resolve = resolve.replace(/ +/g, ' ');
    return resolve;
}
n1 = wrongName('    Harry       Potter      ');
n2 = wrongName('    Ron       Whisley      ');
n3 = wrongName('    Hermione       Granger      ');
console.log(n1);
console.log(n2);
console.log(n3);


// ============================================================================================
//
//
//
// // ******************* НАЗАД В МИНУЛЕ *********************** //
// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
function addDiv(message, typeTag) {
    const tag = document.createElement(typeTag);
    tag.innerHTML = message || 'Hello world';
    document.body.appendChild(tag);
}

addDiv('HELLO', 'div');

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно
// додати список цих автомобілів.

let autoArr = ['Mersedes', 'Volvo', 'BMW', 'Buick'];

function autoListArray(arrayAuto, idTag) {
    let newId = document.getElementById(idTag);
    let list = document.createElement('ul');
    for (let i = 0; i < arrayAuto.length; i++) {
        const auto = arrayAuto[i];
        const liElement = document.createElement('li');
        liElement.innerHTML = `${i + 1} ${auto}`;
        list.appendChild(liElement);
    }
    newId.appendChild(list);
}

autoListArray(autoArr, 'listAuto');


// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок
// // ******************* НАЗАД В МИНУЛЕ *********************** //

