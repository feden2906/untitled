// 1) Створити масив з 20 чисел та:
//     a) відсортувати його від меншого до більшого.

let numbers = [2, 24, 8, 900, 46, 271, 3.6, 59, 102, 77, 333, 14, 0, 71, 240, 111.4, 9, 67, 701, 151]

let numbers1 = numbers.sort((a, b) => {
    return a - b;
})
console.log(numbers1);

//     b) відсортувати його від більшого до меншого.

let numbers2 = numbers.sort((a, b) => {
    return b - a;
})
console.log(numbers2);

//     c) Відфілтрувати числа які є кратними 3.

let numbers3 = numbers.filter((value) => {
    return value % 3 === 0;
})
console.log(numbers3);

// d) Відфілтрувати числа які є більшими за 10.

let numbers4 = numbers.filter((value) => {
    return value > 10;
})
console.log(numbers4);

// e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write

numbers.forEach((value, index) => {
    document.write(`<br> ${index} <br>`);
    document.write(`<br> ${value} <br>`);
})

// f) За допомогою map збільшити кожен елемент в масиві в три рази.

let numbers5 = numbers.map((value) => value * 3 );
console.log(numbers5);


//     g) Порахувати загальну суму всіх елментів у масиві (reduce)

let numbers6 = numbers.reduce((acc, currentValue) => {
    return acc + currentValue;
}, 0)
console.log(numbers6);


// 2) Створити масив з 20 стрічок та:

let str = ['Jhon', 'Robert', 'Mary', 'Lucy', 'Samantha', 'Daniel', 'Pith', 'Marcus', 'Drew', 'Angelica', 'Anna',
'Lui', 'Olban', 'Kira', 'Stacey', 'Luke', 'Emily', 'Ghram', 'George', 'Abigale']

//     a) Відсортувати його в алфавітному порядку
let str1 = str.sort();
console.log(str1);

// b) Відсортувати в зворотньому порядку

let str2 = str.sort((a,b) => {
  if (a < b) {
      return 1
  }
    return -1
})
console.log(str2);

// c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)

let str3 = str.filter((name) => {
    return name.length > 4
})
console.log(str3);


// d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'

let str4 = str.map((name) => {
    return 'Sam says ' + name;
})
console.log(str4);

// 3) Все робити тільки за допомогою методів масивів!
//     Дано масив :
    const users = [
        {name: 'vasya', age: 31, isMarried: false},
        {name: 'petya', age: 30, isMarried: true},
        {name: 'kolya', age: 29, isMarried: true},
        {name: 'olya', age: 28, isMarried: false},
        {name: 'max', age: 30, isMarried: true},
        {name: 'anya', age: 31, isMarried: false},
        {name: 'oleg', age: 28, isMarried: false},
        {name: 'andrey', age: 29, isMarried: true},
        {name: 'masha', age: 30, isMarried: true},
        {name: 'olya', age: 31, isMarried: false},
        {name: 'max', age: 31, isMarried: true}
    ];
// a) відсортувати його за  віком (зростання , а потім окремо спадання)

let users1 = users.sort((a,b) => {
    return a.age - b.age
})
console.log(users1);

let users2 = users.sort((a,b) => b.age - a.age)
console.log(users2);


// b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)

let users3 = users.sort((a,b) => a.name.length - b.name.length)
console.log(users3);

let users4 = users.sort((a,b) => b.name.length - a.name.length)
console.log(users4);

// c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення),
// та зберегти це в новий масив (первинний масив залишиться без змін)

// const newUsers = users.map((value, index,) => ({...value, id: index+1}))

const newUsers = users.map((value, index,) => {
    const {name,age,isMarried} = value;
    return {name,age,isMarried,id: index + 1};
})
console.log(users);
console.log(newUsers);

// d) відсортувати його за індентифікатором

let newUsers2 = newUsers.sort((a,b) => a.id - b.id)
console.log(newUsers2);

// e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)

let users5 = users.reduce((acc,value) => {
    if (value.isMarried === true) {
        value.newAppartment = true;

        acc.push(value);
    }
    console.log(acc);
    return acc;
}, [])









