// - Дана textarea.
//     В неё вводится текст.
//     Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.
// const textArea2 = document.getElementById('newArea');
// const textInLocalStorage = 'text';
//
// textArea2.value = localStorage.getItem(textInLocalStorage);
//
// textArea2.onchange = ({target: {value}}) => {
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


// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
//     Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые
// инпуты для редактирования, которые уже заполнены данными объекта

const ARRAY_USERS = 'ARRAY_USERS';
let tempUser = {};
const content = document.getElementById('content');
const form1 = document.forms.form1;

form1.submit1.onclick = ev => {
    // ev.preventDefault();
    let person = {...tempUser};
    tempUser = {};
    for (let i = 0; i < form1.children.length; i++) {
        const form1Element = form1.children[i];
        if (form1Element.name && form1Element.type !== 'submit') {
            person[form1Element.name] = form1Element.value;
        }
    }
    if (!person.id) {
        person.id = new Date().getTime();
    }
    saveUser(person);
}

function saveUser(user) {
    if (localStorage.hasOwnProperty(ARRAY_USERS)) {
        const arrayUsers = JSON.parse(localStorage.getItem(ARRAY_USERS));
        arrayUsers.find(value => value.id === user.id);
        if (find) {

            const filter = arrayUsers.filter(value => value.id !== user.id);
            filter.push(user);

            localStorage.setItem(ARRAY_USERS, JSON.stringify(filter));

        } else {
            arrayUsers.push(user);
            localStorage.setItem(ARRAY_USERS, JSON.stringify(arrayUsers));
        }

    } else {
        localStorage.setItem(ARRAY_USERS, JSON.stringify([user]));
    }
}


getDataFromLSt();

function getDataFromLSt() {
    if (localStorage.hasOwnProperty(ARRAY_USERS)) {
        const arrUser = JSON.parse(localStorage.getItem(ARRAY_USERS));
        for (const user of arrUser) {
            content.appendChild(createDivPerson(user));
        }
    }
}

function createDivPerson(user) {
    const main = document.createElement('div');
    let flag = true;
    for (const key in user) {
        if (flag) {
            const h3 = document.createElement('h3');
            h3.innerText = key + " : " + user[key];
            main.appendChild(h3);
            flag = false;
        } else {
            const p = document.createElement('p');
            p.innerText = key + " : " + user[key];
            main.appendChild(p);
        }
    }
    main.style = "width : 300px; border: red 1px solid; float : left";
    const b1 = document.createElement('button');
    const b2 = document.createElement('button');
    b1.innerText = "Edit";
    b2.innerText = "Delete";
    b1.onclick = function () {
        editUser(user.id);
    }
    b2.onclick = function () {
        deleteUser(user.id);
    }


    main.appendChild(b1);
    main.appendChild(b2);

    return main;
}

function deleteUser(id) {
    const parse = JSON.parse(localStorage.getItem(ARRAY_USERS));
    const filter = parse.filter(user => user.id !== id);
    localStorage.setItem(ARRAY_USERS, JSON.stringify(filter));
    location.reload();
}

function editUser(id) {
    const parse = JSON.parse(localStorage.getItem(ARRAY_USERS));
    const user = parse.find(user => user.id === id);
    for (let i = 0; i < form1.children.length; i++) {
        const form1Element = form1.children[i];
        if (form1Element.name && form1Element.type !== 'submit') {
            for (const key in user) {
                if (form1Element.name === key) {
                    form1Element.value = user[key];
                }
            }
        }

    }
    tempUser = user;

}










