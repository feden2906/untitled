// 1) Напишіть код,  який за допомоги document.getElementById або
// document.getElementsByClassName або document.getElementsByTagName :
// a) отримує текст з параграфа з id "content"

let elementById = document.getElementById('content');

// b) отримує текст з блоку з id "rules"

let elementsByIdNew = document.getElementById('rules');

// c) замініть текст параграфа з id 'content' на будь-який інший

elementById.innerHTML = '<br> Some text <br>'

// d) замініть текст параграфа з id 'rules' на будь-який інший

elementsByIdNew.innerText = 'Some NEW text';

// e) змініть кожному елементу колір фону на червоний

elementById.style.backgroundColor = 'red';
elementsByIdNew.style.backgroundColor = 'red';

// f) змініть кожному елементу колір тексту на синій

elementById.style.color = 'blue';
elementsByIdNew.style.color = 'blue';

// g) отримати весь список класів елемента з id=rules і вивести їх в console.log

console.log(elementsByIdNew.classList);

// h) отримати всі елементи з класом fc_rules

let fcRulesElement = document.getElementsByClassName('fc_rules');

// i) поміняти колір тексту у всіх елементів fc_rules на червоний

for (let i = 0; i < fcRulesElement.length; i++) {
    fcRulesElement[i].style.backgroundColor = 'red';

}

///////////////////////////////////////////////////////////////////////////////////////


let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];

// 2) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за
// допомоги document.createElement. Вставити цей блок на сторінку

for (const user of users) {
    let name = document.createElement('div');
    name.innerHTML = `Name: ${user.name} `;
    name.style.backgroundColor = '#0a97e5';
    name.style.color = 'black';
    name.style.border = '2px solid black';
    document.body.appendChild(name);
}


// 3) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок
// за допомоги document.createElement. Блок з адресою зробити окремим блоком, з
// блоками для кожної властивості

for (const user of users) {
    let nameDiv = document.createElement('div');
    nameDiv.innerHTML = `Name: ${user.name} `;
    nameDiv.style.backgroundColor = 'green';
    nameDiv.style.border = '2px solid gold';
    nameDiv.style.color = 'gold';
    document.body.appendChild(nameDiv);
    let addressDiv = document.createElement('div');
    addressDiv.innerHTML = `City: ${user.address.city} Country: ${user.address.country} Street: ${user.address.street}
    HouseNumber: ${user.address.houseNumber}`;
    addressDiv.style.backgroundColor = 'gold';
    addressDiv.style.border = '2px solid green';
    addressDiv.style.color = 'green';
    document.body.appendChild(addressDiv);
}





















