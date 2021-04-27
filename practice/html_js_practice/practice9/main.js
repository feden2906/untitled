// - Сворити масив нецензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві нецензурних слів кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

// const words = ['politics', 'money', 'war', 'religion', 'shopping', 'pop-music'];
//
// const input = document.getElementById('wordSearch');
// const button = document.getElementById('but1');
//
// button.onclick = () => {
//     let text = input.value;
//     let result = words.includes(text);
//     if (result) {
//         alert('be smarter! read the books!');
//     } else {
//         alert('It`s OK');
//     }
// }


// - Сворити масив нецензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

// const wordsSecondArr = ['politics', 'money', 'war', 'religion', 'shopping', 'pop-music'];
//
// const input2 = document.getElementById('wordsInPhrase');
// const button2 = document.getElementById('but2');
//
// button2.onclick = ev => {
//     let textNew = input2.value.split(' ');
//
//     let flag = true;
//     textNew.forEach(word => {
//         flag = wordsSecondArr.includes(word);
//     })
//     if (flag) {
//         alert('be smarter! read the books!');
//     } else {
//         alert('It`s OK')
//     }
// }


// -- Створити скрипт, котрий бере зчитує на сторінці (rules.html) текст і робить збоку меню-зміст по всіх заголовках які є в тексті.
//     При кліку на пункт заголовку ви маєте відправлятись  до цього пункту в тексті

// let tagH2 = document.getElementsByTagName('h2');
//
// let content = document.getElementById('content');
// let wrap = document.getElementById('wrap');
// let ul = document.createElement('ul');
//
// for (let i = 0; i < tagH2.length; i++) {
//     let li = document.createElement('li');
//     let a = document.createElement('a');
//     let element = 'element' + i;
//     a.href = '#' + element;
//     tagH2[i].setAttribute('id', element);
//     a.innerHTML = tagH2[i].innerText;
//     li.appendChild(a);
//     ul.appendChild(li);
// }
// content.appendChild(ul);
// content.style.width = '30%';
// content.style.float = 'left';
// wrap.style.width = '70%';
// wrap.style.float = 'left';

// -- Взяти масив юзерів
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
// Створити три чекбокси. Кожний з них активує фільтр для вищевказаного масиву. Фільтри можуть працювати як разом так і окремо.
// 1й - відфільтровує юзерів зі статусом false (залишає зі статусом false)
// 2й - залишає старших 29 років включно
// 3й - залишає тих в кого місто Київ
// Дані виводить в документ

const content = document.getElementById('content');
const userDiv = document.createElement('div');
userDiv.appendChild(renderContent(usersWithAddress));
console.log(userDiv);

const input1 = document.createElement('input');
const input2 = document.createElement('input');
const input3 = document.createElement('input');

const label1 = document.createElement('label');
const label2 = document.createElement('label');
const label3 = document.createElement('label');

const button = document.createElement('button');

label1.innerText = 'зі статусом false';
label2.innerText = '29 років';
label3.innerText = 'місто Київ';

button.innerText = 'Filter On';

input1.type = 'checkbox';
input2.type = 'checkbox';
input3.type = 'checkbox';

content.appendChild(userDiv);

content.appendChild(label1);
content.appendChild(input1);
content.appendChild(label2);
content.appendChild(input2);
content.appendChild(label3);
content.appendChild(input3);

content.appendChild(button);

button.onclick = ev => {
    let myArray = JSON.parse(JSON.stringify(usersWithAddress));

    if (input1.checked) myArray = myArray.filter(value => !value.isMarried);
    if (input2.checked) myArray = myArray.filter(value => value.age >= 29);
    if (input3.checked) myArray = myArray.filter(value => value.address.city === 'Kyiv');

    userDiv.innerHTML = '';
    userDiv.appendChild(renderContent(myArray));
}


function renderContent(array) {
    const main = document.createElement('div');
    array.forEach(item => {
        const div = document.createElement('div');
        div.innerHTML = JSON.stringify(item);
        main.appendChild(div);
    })
    return main;
}


















