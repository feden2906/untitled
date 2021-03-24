// CLASS

// 1.Определите переменные str, num, flag и txt со значениями «Привет», 123, true, «true».
// При помощи оператора typeof убедитесь, что значения переменных принадлежат типам: string, number и  boolean.

let str = 'Привет';
let num = 123;
let flag = true;
let txt = 'true';

console.log(typeof str);
console.log(typeof num);
console.log(typeof flag);
console.log(typeof txt);

// 2. Создайте переменные a1, a2, a3, a4, a5. При помощи математических операторов (сложение, вычитание и т.д.)
// найдите значения выражений:
//     5 + 3,
//     5 - 3,
//     5 * 3,
//     5 / 3,
//     5 % 3
// поместив результат каждого выражения в соответствующую переменную. Например, let a1 = 5 + 3.

let a1 = 5 + 3;
let a2 = 5 - 3;
let a3 = 5 * 3;
let a4 = 5 / 3;
let a5 = 5 % 3;

console.log(a1, a2, a3, a4, a5);

// 3.  Создайте переменные a6, a7, a8, a9, a10. Поместите в них результат выражений:
//     5 % 3,
//     3 % 5,
//     5 + '3',
//     '5' - 3,
//     75 + 'кг'

let a6 = 5 % 3;
let a7 = 3 % 5;
let a8 = 5 + '3';
let a9 = '5' - 3;
let a10 = 75 + 'кг';

console.log(a6, a7, a8, a9, a10);

// 4. Напишите код, который находит площадь прямоугольника высота 23см. ( переменная height),
// шириной 10см (переменная width), значение площади должно хранится в числовой переменной s.

let height = +prompt('height');
let width = +prompt('width');

let s = height * width;
console.log(s);


// 5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
//     результат поместите в переменную v.

let heightC = +prompt('10м');
let dC = +prompt('4м');

let v = heightC * (dC / 2);
console.log(v);


// 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
// Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор
// возведения в степень ** ).

let n = 3;
let m = 4;
// let k = Math.pow(3, 2) + Math.pow(4,2);
let k = Math.sqrt(n ** 2 + m ** 2);
console.log(k);


// 7. Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить спомощью document.write,
// alert и console.log

let str1 = 'Hello world';
console.log(str1);
document.write('<h2>' + str1 + '</h2>');
alert(str1);


// 8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на
// новой строки спомощью \n).

let myName = 'Alexei Lazar';
let myAge = 33;
let myHobby = 'to read';

alert(myName + '\n' + myAge + '\n' + myHobby + '\n');


// 9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//     Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//     Вывести в документ содержимое переменной concatenation спомощью document.write

let str10 = 'Кто';
let str20 = 'ты';
let str30 = 'такой?';
let concatenation = `${str10} ${str20} ${str30}`;
document.write(concatenation);


// 10. Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
// let str = '20';
// let a = 5;
// document.write(str + a + "<br/>");   205, потому что при конкатенации string и числа, они просто встают рядом.
// document.write(str - a + "<br/>");   15, потому что нет конкатенации и string ведет себя как число
// document.write(str * '2' + "<br/>"); это подсмотрел в видео (40)
// document.write(str / 2 + "<br/>");   и это (10), но, тут все понятно


// 11. Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?
//  parseInt("3.14")   3
//  parseInt("-7.875")  -7
// parseInt("435")   435
// parseInt("Вася")   Nan


// 12.  С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные, которые будут использоваться
// далее, повторите код ниже
// let str = prompt("Enter something", "ho-ho")
// console.log(str);

let str100 = prompt("Enter something", "ho-ho")
console.log(str100);

// 13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи
// метода alert

let first = +prompt(10);
let second = +prompt(20);
let newResult = first + second;
alert(newResult);

// 14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст,
// а вам не обходимо вывести строку такого вида
// Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert

let userName = prompt('userName');
let userSurname = prompt('userSurname');
let userAge = prompt('userAge');
alert('Доброго вечера' + ' ' + userName + ' ' + userSurname + ' ' + 'мои поздравления что вам' + ' ' + userAge);





