// - Сворити масив нецензцрних слів.
// const words = ['politics', 'money', 'war', 'religion', 'shopping', 'pop-music'];

//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві нецензурних слів кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

// const input = document.getElementById('wordSearch');
// const button = document.getElementById('but1');
//
// button.onclick = () => {
//     let text = input.value;
//     let result = words.includes(text);
//     if (result) {
//         alert('be smarter! read the books!');
//     }
// }


// - Сворити масив нецензцрних слів.
// const wordsSecondArr = ['politics', 'money', 'war', 'religion', 'shopping', 'pop-music'];

//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

// const input = document.getElementById('wordsInPhrase');
// const button = document.getElementById('but2');
//
// button.onclick = ev => {
//     let textNew = input.value.split(' ');
//
//     let flag = false;
//     textNew.forEach(word => {
//         flag = wordsSecondArr.includes(word);
//     })
//     if (flag) {
//         alert('be smarter! read the books!');
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




















