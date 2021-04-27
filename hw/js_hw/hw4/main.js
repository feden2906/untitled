
// 1
//     присвоить каждому из следующих значений свою переменную: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14,
//     2.7, 16, true, false Вывести каждую при помощи console.log , alert, document.write

let a = 'hello';
let b = 'owu';
let c = 'com';
let d = 'ua';
let e = 1;
let f = 10;
let g = -999;
let h = 3.14;
let i = 2.7;
let j = 16;
let k = true;
let l = false;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(h);
console.log(i);
console.log(j);
console.log(k);
console.log(l);

document.write('<h2>' + a + '</h2>');
document.write('<h2>' + b + '</h2>');
document.write('<h2>' + c + '</h2>');
document.write('<h2>' + d + '</h2>');
document.write('<h2>' + e + '</h2>');
document.write('<h2>' + f + '</h2>');
document.write('<h2>' + g + '</h2>');
document.write('<h2>' + h + '</h2>');
document.write('<h2>' + i + '</h2>');
document.write('<h2>' + j + '</h2>');
document.write('<h2>' + k + '</h2>');
document.write('<h2>' + l + '</h2>');

alert(a);
alert(b);
alert(c);
alert(d);
alert(e);
alert(f);
alert(g);
alert(h);
alert(i);
alert(j);
alert(k);
alert(l);

// 2
//     переопределить каждую переменную из задания 1 дав им произвольные значения Вывести каждую при помощи console.log,
//     alert, document.write

a = 'hi';
b = 'new';
c = 'page';
d = 'com'
e = '3';
f = '28';
g = '-16';
h = '1.67';
i = '2222228.9';
j = '-100500';
k = 'true or false';
l = 'false or true';

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(h);
console.log(i);
console.log(j);
console.log(k);
console.log(l);

document.write('<h4>' + a + '</h4>');
document.write('<h4>' + b + '</h4>');
document.write('<h4>' + c + '</h4>');
document.write('<h4>' + d + '</h4>');
document.write('<h4>' + e + '</h4>');
document.write('<h4>' + f + '</h4>');
document.write('<h4>' + g + '</h4>');
document.write('<h4>' + h + '</h4>');
document.write('<h4>' + i + '</h4>');
document.write('<h4>' + j + '</h4>');
document.write('<h4>' + k + '</h4>');
document.write('<h4>' + l + '</h4>');

alert(a);
alert(b);
alert(c);
alert(d);
alert(e);
alert(f);
alert(g);
alert(h);
alert(i);
alert(j);
alert(k);
alert(l);


// 3
// Создать 3 числовых и 3 стринговых константы. Вывести каждую при помощи console.log , alert, document.write

const AB = 24;
const BC = 48;
const CD = 96;
const EM1 = 'hello';
const EM2 = 'how are u?';
const EM3 = 'bye';

console.log(AB);
console.log(BC);
console.log(CD);
console.log(EM1);
console.log(EM2);
console.log(EM3);

document.write('<h2>' + AB + '</h2>');
document.write('<h2>' + BC + '</h2>');
document.write('<h2>' + CD + '</h2>');
document.write('<h2>' + EM1 + '</h2>');
document.write('<h2>' + EM2 + '</h2>');
document.write('<h2>' + EM3 + '</h2>');

alert(AB);
alert(BC);
alert(CD);
alert(EM1);
alert(EM2);
alert(EM3);

// 4
// при помощи 3х разных prompt() получить 3 слова которые являются вашими ФИО. Для фамилии имени и отчества
// создать разные переменные. Вывести каждую при помощи console.log , alert, document.write

let name = prompt('what is your name?');
let surname = prompt('what is your surname?');
let patronymic = prompt('what is your patronymic?');

console.log(`${name} ${surname} ${patronymic}`);

document.write('<h2>' + name + '</h2>');
document.write('<h2>' + surname + '</h2>');
document.write('<h2>' + patronymic + '</h2>');

alert(name);
alert(surname);
alert(patronymic);

// 5
// Взять переменные из задания 4 и сконкатенировать их в одной переменной person.

let person = name + ' ' + patronymic + ' ' +surname;
console.log(person);


// 6
// зять задние 4 и 5 и применить его к ФИО всех членов своей семьи.

let fatherName = 'Nikolay';
let fatherPatronymic = 'Georghievich';
let fatherSurname = 'Lazar';

console.log(fatherName);
console.log(fatherPatronymic);
console.log(fatherSurname);

document.write('<h2>' + fatherName + '</h2>');
document.write('<h2>' + fatherPatronymic + '</h2>');
document.write('<h2>' + fatherSurname + '</h2>');

let fatherPerson = fatherName + ' ' + fatherPatronymic + ' ' + fatherSurname;
console.log(fatherPerson);
document.write('<h2>' + fatherPerson + '</h2>');

let motherName = 'Tatjana';
let motherPatronymic = 'Illivna';
let motherSurname = 'Lazar';

console.log(motherName);
console.log(motherPatronymic);
console.log(motherSurname);

document.write('<h3>' + motherName + '</h3>');
document.write('<h3>' + motherPatronymic + '</h3>');
document.write('<h3>' + motherSurname + '</h3>');

let motherPerson = motherName + ' ' + motherPatronymic + ' ' + motherSurname;
console.log(motherPerson);
document.write('<h3>' + motherPerson + '</h3>');
//
// 7
// при помощи prompt() получить 3 числа. Привести их к числовому типу при помощи +. вывести их в консоль.
//
let number1 = +prompt('First number');
let number2 = +prompt('Second number');
let number3 = +prompt('Third number');
console.log(number1);
console.log(number2);
console.log(number3);

// 8
//     при помощи prompt() получить 4 числа. Привести их к числовому типу при помощи parseInt.
//     Сложить их между собой записав результат в переменную result и вывести в консоль браузера

let first = parseInt(prompt('first number'));
let second = parseInt(prompt('second number'));
let third = parseInt(prompt('third number'));
let fourth = parseInt(prompt('fourth number'));

let result = first + second + third + fourth;
console.log(result);
//
// 9
// при помощи prompt()  получить 3 числа с плавающей точекой. при помощи parseFloat привести их к соответсвующему
// типу. Сложить их между собой записав результат в переменную result и вывести в консоль браузера
//
let examle1 = prompt('examle1?');
let examle2 = prompt('examle2?');
let examle3 = prompt('examle3?');

parseFloat(examle1);
parseFloat(examle2);
parseFloat(examle3);

let result2 = examle1 + ' ' + examle2 + ' ' + examle3;
console.log(result2);
//
//
// 10
// при помощи prompt()  получить 3 числа с плавающей точекой. Округлить их при помощи Math.round Сложить
// их между собой записав результат в переменную  и вывести в консоль браузера
//
let raund1 = prompt('number of raund?');
console.log(Math.round(parseFloat(raund1)));

let raund2 = prompt('number of raund?');
console.log(Math.round(parseFloat(raund2)));

let raund3 = prompt('number of raund?');
console.log(Math.round(parseFloat(raund3)));

let result3 = `${raund1} + ${raund2} + ${raund3}`;
console.log(result3);


// 11
// при помощи prompt()  получить 2 целых числа. Привести их к целочисленному типу. Первое число - это число
// которое будут возводить в степень. Второе число - это число которое является степенью. При помощи Math.pow
// возвести первое число в степень второго числа.


let numb = prompt();
let pow = prompt('pow');
let result4 = Math.pow(numb,pow);
console.log(result4);


// 12
// - При помощи оператора опредеоения типа typeof определить типы следующих переменных и вывести их в консоль
// let a = 100; let b = '100'; let c = true; let d = undefined;

let a10 = 100;
let b10 = '100';
let c10 = true;
let d10 = undefined;

console.log(typeof a10);
console.log(typeof b10);
console.log(typeof c10);
console.log(typeof d10);

// 13
// Поставьте соответствующий оператор в выражениях что бы получился соответсвующий результат.
// В одинаковых выражениях в задании не использовать два одинаковых оператора.
//Каждое выражение вложить в свою переменную
// 5 < 6 -> true
// 5 > 6 -> false
// 5 >= 6 -> false
// 5 == 6 -> false
// 10 == 10 -> true
// 10 >= 10 -> true
// 10 > 10 -> false
// 10 < 10 -> false
// 10 != 10 -> false
// 123 === '123' -> false
// 123 == '123' -> true

//Дополнительно
// - Посмотрев на следюующие выражения, скажите, каков будет вывод в консоль


// console.log(132 > 100 && 45 < 12 );  false
// console.log(34 > 33 && 23 < 90 );    true
// console.log(99 > 100 && 45 > 12 );   false
// console.log(132 > 100 || 45 < 12 );  true
// console.log(111 > 11 || 45 < 111 );  true
// console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) );    false (тут у меня ошибка)
// console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) );     true
// console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) );  false
// console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 ));     true
// console.log(!!'-1');    true
// console.log(!!-1);      true
// console.log(!!'0');     true
// console.log(!!'null');  false
// console.log(!!'undefined');  false (ошибка, не учел, что это string)
// console.log(!!(3/'owu'));    true (почему здесь должно быть false?)
// console.log((111 > 11 || 45 < 111) ||  !!'0');  true
// console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 ));  false

























