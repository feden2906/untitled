// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи (mon-year)

let elementById = document.getElementById('main_header');
elementById.innerHTML = '<h1>FEB-2021</h1>';
elementById.style.color = 'green';

// b) робить шириниу елементу ul 400px

let elementsByTagNameUl = document.getElementsByTagName('ul');
for (let i = 0; i < elementsByTagNameUl.length; i++) {
    elementsByTagNameUl[i].style.width = '400px';
    elementsByTagNameUl[i].style.padding = '0';
    elementsByTagNameUl[i].style.boxSizing = 'border-box';
}

// c) робить шириниу всіх елементів з класом linkList шириною 50%

let elementsByClassName = document.getElementsByClassName('linkList');
for (let i = 0; i < elementsByClassName.length; i++) {
    elementsByClassName[i].style.width = '50%';
}

// d) отримує текст який зберігається в елементі з класом listElement2

let textListElement2 = document.getElementsByClassName('listElement2');
for (let i = 0; i < textListElement2.length; i++) {
    let innerText = textListElement2[i].innerText;
    console.log(innerText);
}

// e) отримує всі елементи li та змінює ім колір фону на сірий

let colorLiElements = document.getElementsByTagName('li');
for (let i = 0; i < colorLiElements.length; i++) {
    colorLiElements[i].style.backgroundColor = 'grey';
}

// f) отримує всі елементи 'a' та додає їм клас anchor

let aNewClass = document.getElementsByTagName('a');
for (let i = 0; i < aNewClass.length; i++) {
    aNewClass[i].classList.add('anchor');
}

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3,
// змінює йому розмір тексту на 40 пікселів

let aNewFontSize = document.getElementsByTagName('a');
for (let i = 0; i < aNewFontSize.length; i++) {
    if (aNewFontSize[i].innerHTML === 'link3') {
        aNewFontSize[i].style.fontSize = '40px';
    }
}

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

let aNewClassXXX = document.getElementsByTagName('a');

for (let i = 0; i < aNewClassXXX.length; i++) {
    aNewClassXXX[i].classList.add('element_XXX');   //////  XXX как текст.контент я не сделал,чтобы не сбить предыдущее задание.
}

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// let newBackgroundSubHeader = document.getElementsByClassName('sub-header');
// for (let i = 0; i < newBackgroundSubHeader.length; i++) {
//     newBackgroundSubHeader[i].style.backgroundColor = prompt('enter color');
// }


// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст
// елемнту = content 2 segment . Колір отримати з prompt()

// let newColorText = document.getElementsByClassName('sub-header');
// for (let i = 0; i < newColorText.length; i++) {
//     if (newColorText[i].innerHTML === 'content 2 segment') {
//         newColorText[i].style.backgroundColor = prompt('enter color')
//     }
// }


// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний.
// Текст отримати з prompt()

// const newTextContent_1 = document.getElementsByClassName('content_1');
// for (let i = 0; i < newTextContent_1.length; i++) {
//     newTextContent_1[i].innerHTML = prompt('enter text');
// }


// l) отримати елементи p та змінити їм padding на 20px

let pNewPadding = document.getElementsByTagName('p');
for (let i = 0; i < pNewPadding.length; i++) {
    pNewPadding[i].style.padding = '20px';
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)

let newTextElement = document.getElementsByClassName('text2');
for (let i = 0; i < newTextElement.length; i++) {
    newTextElement[i].innerHTML = 'FEB-2021';
}

//////
document.write('-----------------------------------------------------------------');
/////


// 2) Є масив котрий характеризує правила.
//     Створити скрипт який ітерує цей масив, та робить кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути така ж структура яка міститься в файлі rules.html

let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    }
];

for (const rule of rules) {

    let wrap = document.createElement('div');
    let rulesDiv = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.style.backgroundColor = 'silver';
    h3.style.border = '2px solid black';
    let p = document.createElement('p');
    p.style.backgroundColor = 'gold';
    p.style.border = '2px solid black';
    h3.innerHTML = `${rule.title}`;
    p.innerHTML = `${rule.body}`;
    document.body.appendChild(wrap);
    wrap.appendChild(rulesDiv);
    rulesDiv.appendChild(h3);
    rulesDiv.appendChild(p);
}


//////
document.write('-----------------------------------------------------------------');
/////



// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
    let usersWithId = [
        {id: 1, name: 'vasya', age: 31, status: false},
        {id: 2, name: 'petya', age: 30, status: true},
        {id: 3, name: 'kolya', age: 29, status: true},
        {id: 4, name: 'olya', age: 28, status: false}
    ];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//         {
//             id: 1, // <===
//             name: 'vasya',
//             age: 31,
//             status: false,
//             address: {
//                 user_id: 1, // <===
//                 country: 'Ukraine',
//                 city: 'Ternopil'
//             }
//         },
//         // TO BE CONTINUED .....
//     ]

for (const users of usersWithId) {
    for (const cities of citiesWithId) {
        if (users.id === cities.user_id) {
            users.address = cities;
        }
    }
}

console.log(usersWithId);


















