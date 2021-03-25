// // --створити масив та вивести його в консоль:
// // - з 5 числових значень
//
// let numbers = [14, 26, 78, 110, 600];
// console.log(numbers);
//
// // - з 5 стічкових значень
//
// let words = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
// console.log(words);
//
// // - з 5 значень стрічкового, числового та булевого типу
//
// let other = [15, 'hello', true, 'bye', false];
// console.log(other);
//
// // -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//
// let zero = [];
// zero[0] = 10;
// zero[1] = 26;
// zero[2] = 'hello okten';
// zero[3] = true;
// console.log(zero);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
//
for (let i=0; i<10; i++) {
    document.write('<div>some text</div>');
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let i=0; i<10; i++) {
    document.write(`<div>some text ${i}</div>`);
}


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
//
let i = 0;
while (i<20) {
    document.write('<h1>random text </h1>');
    i++;
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let j = 0;
while (j<20) {
    document.write(`<h1>random text ${j}</h1>`);
    j++;
}

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let str1 = [1, 2, 13, 16, 38, 50, 99, 101, 2000, 9999999];
for (let toStr1 of str1) {
    console.log(toStr1);
}

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

const str2 = ['ab', 'bc', 'cd', 'de', 'ef', 'fg', 'gh', 'hi', 'ij', 'jk'];
for (let toStr2 of str2) {
    console.log(toStr2)
}

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let str3 = [12, 4, true, 'summer', 'spring', 1000, false, 'autumn', 54.4, -80];
for (const toStr3 of str3) {
    console.log(toStr3);
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки
// булеві елементи

const str4 = ['march', 'april', 'may', 'june', true, false, 9, 66, 666, 100500];
for (let i = 0; i < str4.length; i++) {
    if (typeof str4[i] === 'boolean') {
        console.log(str4[i])
    } else {

    }
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки
// числові елементи

const str5 = ['march', 'april', 'may', 'june', true, false, 9, 66, 666, 100500];
for (let i = 0; i < str5.length; i++) {
    if (typeof str5[i] === 'number') {
        console.log(str5[i])
    } else {

    }
}


// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки
// рядкові елементи

let str6 = ['march', 'april', 'may', 'june', true, false, 9, 66, 666, 100500];
for (let i = 0; i < str6.length; i++) {
    if (typeof str6[i] === 'string') {
        console.log(str6[i])
    } else {

    }
}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.

let str7 = [];
str7[0] = 15;
str7[1] = false;
str7[2] = 444;
str7[3] = 'hello world';
str7[4] = 180;
str7[5] = '-550';
str7[6] = 'wer';
str7[7] = true;
str7[8] = 888;
str7[9] = 8888;

for (let i = 0; i < str7.length; i++) {
    console.log(str7[i]);

}


// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 10; i++) {
    console.log(i);
    document.write(`<br> ${i} </br>`)

}


// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 100; i++) {
    console.log(i);
    document.write(`<br> ${i} </br>`)
}


// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 100; i=i+2) {
    console.log(i);
    document.write(`<br> ${i} </br>`)
}

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

for (let i = 0; i < 100; i++) {
    if (i%2 === 0) {
        console.log(i);
        document.write(`<br> ${i} </br>`)
    }
}

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

for (let i = 0; i < 100; i++) {
    if (i%2 === 1) {
        console.log(i);
        document.write(`<br> ${i} </br>`)
    }
}

// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
// - Відтворити роботу годинника, відрахувавши  2 години  (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)

const time = 59;
let second = 0;
let minute = 0;
let hours = 0;

for (let i = 0; i <=23 && hours !== 3 && minute !== 21; i++) {
    console.log('hours: ', hours++);

    for (let i = 0; i <= time && hours !== 3 && minute !== 21; i++) {
        console.log('minute: ', minute++);

        for (let i = 0; i <= time; i++) {
            console.log('second: ', second++);

        }
        second = 0;
    }
    minute = 0;
}




// Додатково
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

let box1 = [ 'a', 'b', 'c'];
let oneWord1 = '';
for (let i = 0; i < box1.length; i++) {
    oneWord1 = oneWord1 + box1[i];
}
console.log(oneWord1);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

let box2 = [ 'a', 'b', 'c'];

let g = 0;
let oneWord2 = '';
while (g < box2.length) {
    oneWord2 = oneWord2 + box2[g];
    i++;
}
console.log(oneWord2);


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

let box3 = [ 'a', 'b', 'c'];
let oneWord3 = '';
for (let toBox3 of box3) {
    oneWord3 = oneWord3 + toBox3;
}
console.log(oneWord3);























