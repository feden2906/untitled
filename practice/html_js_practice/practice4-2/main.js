// 1. Три різних числа вводяться через prompt().
//     За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)

a = +prompt();
b = +prompt();
c = +prompt();

if (a > b && a > c ) {
    if (b > c) {
        console.log(c, b, a);
    } else {
        console.log(b, c, a);
    }
}
if (b > a && b > c) {
    if (a > c) {
        console.log(c, a, b);
    } else {
        console.log(a, c, b);
    }
}
if (c > a && c > b) {
    if (a > b) {
        console.log(b, a, c);
    } else {
        console.log(a, b, c)
    }
}


// 2.
// Все параматры получаем с клавиатуры!!!!
//     Имитируем поведение пешехода на перекстке.
//     Если светофор зеленый - вывести "иди".
//     Если светофор желтый - вывести "подожди".
//     Если светофор красный - вывести "стой".
//     Если светофор в аварийном режиме вывести "делай что хочешь"!

// let a = prompt('what is the color?');
//
// if (a === 'green') {
//     console.log('go');
// } else if (a === 'yellow') {
//     console.log('wait');
// } else if (a === 'red') {
//     console.log('stop');
// } else {
//     console.log('i dont know');
// }

//     3
// Все параметры получаем с клавиатуры!!!!(prompt , confirm)
// Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
//     Улучшаем предыдущее задание.
//     Если светофор зеленый и машин нет - вывести "иди".
//     Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
//     Если светофор желтый и машины есть - вывести "жди".
//     Если светофор желтый и машин нет - вывести "все рано жди".
//     Если светофор красный и машин нет- вывести "стой все рано".
//     Если светофор красный - и машины есть вывести "стой и жди".
//     Если светофор в аварийном режиме вывести "делай что хочешь"!


// 1 вариант
// let a = prompt('what is the color?');
// let isRoadClear = prompt('is road clear?');
//
// if (a === 'green' && isRoadClear === 'yes') {
//     console.log('go');
// } else if (a === 'green' && isRoadClear === 'no') {
//     console.log('wait, while they leave')
// } else if (a === 'yellow' && isRoadClear === 'no') {
//     console.log('anyway wait');
// } else if (a === 'yellow' && isRoadClear === 'yes') {
//     console.log('wait');
// } else if (a === 'red' && isRoadClear === 'no') {
//     console.log('anyway stop');
// } else if (a === 'red' && isRoadClear === 'yes') {
//     console.log('stop & wait');
// } else {
//     console.log('i dont know');
// }

//2 вариант
// let a = prompt('what is the color?');
// let isRoadClear = confirm();
//
// if (a === 'green' && isRoadClear) {
//     console.log('go');
// } else if (a === 'green' && !isRoadClear) {
//     console.log('wait, while they leave')
// } else if (a === 'yellow' && isRoadClear) {
//     console.log('wait');
// } else if (a === 'yellow' && !isRoadClear) {
//     console.log('anyway wait');
// } else if (a === 'red' && isRoadClear) {
//     console.log('stop & wait');
// } else if (a === 'red' && !isRoadClear) {
//     console.log('anyway, wait');
// } else {
//     console.log('i dont know');
// }
