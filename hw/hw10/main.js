// - Створити довільний елемент с id = text. використовуючи JavaScript, зробіть так, щоб при кліку на кнопку зникавл елемент с id="text".
// const element = document.getElementById('text');
//
// element.onclick = (ev => {
//     element.hidden = true;
// })


//     - Створіть кнопку, при кліку на яку, вона буде приховувати сама себе.
// const buttonHidden = document.getElementById('but1');
//
// buttonHidden.onclick = (ev => {
//     buttonHidden.hidden = true;
// })


// - Створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи менше він ніж 18, та повідомити про це користувача
// let age = document.getElementById('age');
// let confirmAge = document.getElementById('ageResult');
//
// confirmAge.onclick = (ev => {
//     if (+age.value < 18) {
//         alert('goodbye')
//     }
// })


// - Створіть меню, яке розгортається/згортається при клику
// const menu  = document.getElementById('menu');
// const hideMenu  = document.getElementById('hideMenu');
// let menuBack = true;
//
// hideMenu.onclick = (ev => {
//     menu.style.display = menuBack ? 'none' : 'block';
//     menuBack = !menuBack;
// })


// - Створіть список коментарів , приклад об'єкту коментаря - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вивести список коментарів в документ, кожний в своєму блоці.
//     Додайте кожному коментарю по кнопці для згортання його body.
// const comments = [
//     {title: 'AAA', body: 'aaaaa'},
//     {title: 'BBB', body: 'bbbbb'},
//     {title: 'CCC', body: 'ccccc'},
//     {title: 'DDD', body: 'ddddd'}
// ]
// let list = document.getElementById('commentsList');
//
// comments.forEach(item => {
//     let h1Comment = document.createElement('h1');
//     let pComment = document.createElement('p');
//     let divResult = document.createElement('div');
//     let button = document.createElement('button');
//     button.innerText = 'hide';
//     button.onclick = () => {
//         pComment.hidden = !pComment.hidden;
//     }
//
//     divResult.appendChild(h1Comment);
//     divResult.appendChild(pComment);
//     divResult.appendChild(button);
//
//     h1Comment.innerHTML = item.title;
//     pComment.innerHTML = item.body;
//
//     list.appendChild(divResult);
// })


// - Створити 2 форми  по 2 інпути в кожній. створити кнопку при кліку на яку зчитується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// const but1 = document.getElementById('button1');
//
// but1.onclick = ev => {
//     const myForm = document.forms;
//     for (const item of myForm) {
//         for (const input of item) {
//             console.log(input.value);
//         }
//     }
// }


// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кількість ячейок в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.
// const newElement = document.getElementById('element');
//
// const createTable = (str, column, tag) => {
//     const target = document.getElementById(tag);
//     const table = document.createElement('table');
//     for (let i = 0; i < str; i++) {
//         const tr = document.createElement('tr');
//         for (let j = 0; j < column; j++) {
//             const td = document.createElement('td');
//             td.innerText = `${i} : ${j}`;
//             tr.appendChild(td);
//         }
//         table.appendChild(tr);
//     }
//     target.appendChild(table);
// }
//
// createTable(6,8,'element')

// - Напишіть «Карусель» – стрічку зображень, яку можна гортати вліво-вправо нажаттям на стрілочки.

// const image = [
//     {
//         alt: 'Aristotel',
//         url: './img/Aristotel.jpg'
//     },
//
//     {
//         alt: 'Platon',
//         url: './img/Platon.jpg'
//     },
//
//     {
//         alt: 'Socrat',
//         url: './img/Socrat.jpg'
//     }
// ]
//
// const but1 = document.getElementById('but1');
// const but2 = document.getElementById('but2');
// const pictures = document.getElementById('pictures');
// let currentIndex = 0;
//
// but1.onclick = () => {
//     if (currentIndex - 1 < 0) {
//         currentIndex = image.length - 1;
//     } else {
//         currentIndex = currentIndex - 1;
//     }
//     pictures.src = image[currentIndex].url
//     pictures.alt = image[currentIndex].alt
//
// }
//
// but2.onclick = () => {
//     if (currentIndex + 1 > image.length - 1) {
//         currentIndex = 0;
//     } else {
//         currentIndex = currentIndex + 1;
//     }
//     pictures.src = image[currentIndex].url
//     pictures.alt = image[currentIndex].alt
//
// }