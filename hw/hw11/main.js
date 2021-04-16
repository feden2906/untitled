// - Дана textarea.
//     В неё вводится текст.
//     Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.
// const textArea = document.getElementById('newArea');
// const textInLocalStorage = 'text';
//
// textArea.value = localStorage.getItem(textInLocalStorage);
//
// textArea.onchange = ({target: {value}}) => {
//     localStorage.setItem(textInLocalStorage,value);
// }


// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
//     Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
//     Сделайте ваш скрипт как можно более универсальным.
// const info = document.getElementById('info');
// for (const tag of info) {
//     if (tag.type === 'radio') {
//         let value = localStorage.getItem(tag.name);
//         if (tag.id === value) {
//             tag.checked = true;
//         } else if (tag.type === 'checkbox') {
//             let bool = localStorage.getItem(tag.name);
//             tag.checked = bool === 'true';
//         }
//     } else {
//         tag.value = localStorage.getItem(tag.name);
//     }
// }
//
// info.oninput = ({target: {type, name, value, checked, id}}) => {
//     if (type === 'radio') {
//         localStorage.setItem(name, id);
//     } else if (type === 'checkbox') {
//         localStorage.setItem(name, checked);
//     } else
//         localStorage.setItem(name, value);
// }


// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).
// const back = document.getElementById('back');
// const forward = document.getElementById('forward');
// const save = document.getElementById('save');
// const textArea = document.getElementById('textArea');
// const input = 'input';
// let currentIndex = 0;
//
// if (!localStorage.getItem(input)) {
//     localStorage.setItem(input, JSON.stringify([]))
// } else {
//     const item = JSON.parse(localStorage.getItem(input));
//     currentIndex = item.length -1;
//     textArea.value = item[currentIndex];
// }
//
// save.onclick = () => {
//     const data = textArea.value;
//     const arr = JSON.parse(localStorage.getItem(input));
//     arr.push(data);
//     localStorage.setItem(input, JSON.stringify(arr));
// }
//
// back.onclick = () => {
//     const arr = JSON.parse(localStorage.getItem(input));
//     if (currentIndex - 1 >= 0) {
//         currentIndex--;
//     } else {
//         currentIndex = arr.length - 1;
//     }
//     textArea.value = arr[currentIndex];
// }
//
// forward.onclick = () => {
//     const arr = JSON.parse(localStorage.getItem(input));
//     if (currentIndex + 1 < arr.length) {
//         currentIndex++;
//     } else {
//         currentIndex = 0;
//     }
//     textArea.value = arr[currentIndex];
// }




















