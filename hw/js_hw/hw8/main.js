// Реалізовуємо свій компютерний магазин.
// ===
// Необхідно реалізувати базовий клас комютера. Який має лише параметри:
//     Оперативна память.
//     Потужність процесора. (цифра від 0 до 1000)
// Назва.
//     В кожного компютера має бути метод включання.

class MyComputer {
    constructor(ram, cpu, name, onOffType) {
        this.ram = ram;
        this.cpu = cpu;
        this.name = name;
        this.onOffType = onOffType;
    }
}

// ===
// Від базового компютрера треба реалізувати ноутбук.
//     Він має нову властивість дюймаж монітора.
//
//     У нього зявляється нова змінна роботи батареї. Ця змінна визначається як потужність / (дюйми * оперативку)

class Notebook extends MyComputer {
    constructor(ram, cpu, name, onOffType, monitorSize, batteryWork) {
        super(ram, cpu, name, onOffType);
        this.monitorSize = monitorSize;
        this.batteryWork = batteryWork;
        this.batteryWork = Math.round(this.cpu / (this.monitorSize * this.ram));
    }
}

let newNotebook = new Notebook(8, 600, 'asus', 'start', 22);
console.log(newNotebook);

// ===
// Від ноутбука потрібно зробити ультрабук.
//     Він має нову змінну ваги.
//     При включенні ультрабуку має видаватися помилка, якшо вага більша за 2кг та батарея тримаж менше ніж 4 години.

class UltraBook extends Notebook {
    constructor(ram, cpu, name, onOffType, monitorSize, batteryWork, weight) {
        super(ram, cpu, name, onOffType, monitorSize, batteryWork);
        this.weight = weight;
        if (this.weight > 2) {
            console.log('the battery less than 4 hours');
        } else {
            console.log('good');
        }

    }
}

let newUltraBook = new UltraBook(8, 400, 'ULTRA', 'ON', 22, 5, 1.7);


// ===
// Від базвого класу потрібно створити базовий ПК.
//     В нього має бути новий метод запуску ігор.
//     Кількість FPS визначається як потужність / опервтивку.
//     Example: `You are playing *GAME_NAME* with *FPS_COUNT* FSP`
//

class NewPC extends MyComputer {
    constructor(ram, cpu, name, onOffType, fps) {
        super(ram, cpu, name, onOffType);
        this.fps = fps;
        //     this.fps = this.cpu / this.ram;
        // }
        //
        // startGame(gameName) {
        //     console.log(`You are playing ${gameName} with ${this.fps} FSP`);
    }

    // Компютер можна апгрейдити.
//     Потужність процесора можна збільшувати максимум на 10%. Зменшувати її не можна.
//     Оперативку можна збільшити лише в 2 рази. Зменшувати її не можна.
//     Для зміни характеритик мають бути свої методи. Мняти змінну "в лоб" заборонено.

    cpuUpgrade(percents) {
        if (percents <= 10) {
            this.cpu += (this.cpu * percents) / 100;
            console.log(`Потужність процесора в ${this.name} збільшено на ${percents}% (${this.cpu})`);
        } else {
            console.error(`Не можна збільшити потужність процесора в ${this.name} на ${percents}%`);
        }
    }

    ramUpgrade(upgrade) {
        if (upgrade <= 2) {
            this.ram += this.ram * upgrade;
            console.log(`New ram: ${this.ram}`);
        } else {
            console.error(`ERROR`);
        }
    }
}

let newPC = new NewPC(6, 700, 'HP', 'ON');
console.log(newPC);

// newPC.startGame('Fallout 4');
newPC.cpuUpgrade(15);
newPC.ramUpgrade(12);


// ===
// Від базового ПК необхідно зробити ігнорий ПК.
//     Кількість ФПС має бути рівно в 2 рази більший ніж в звичайного ПК.
//     При запуску однієї гри потужніть процесора має падати на 0.1%.
// Якшо потужність процесора менша ніж 500. І оперативка менша за 8 потрібно ивдати помилку,
//     що на цьому відрі ігри не запускаються.

class GamePc extends NewPC {
    constructor(ram, cpu, name, onOffType, fps) {
        super(ram, cpu, name, onOffType, fps);
        this.fps *= 2;
    }

    newGame(game) {
        if (this.cpu < 500 && this.ram < 8) {
            console.error(`На цьому відрі ${game} не запускаються`);
        } else {
            this.cpu -= this.cpu * 0.1;
            console.log(`Ви граєте в ${game} на ${this.fps} fps, cpu: ${this.cpu}`);
        }
    }
}

let newGamePc = new GamePc(16, 900, 'asus', 'ON', 400);
console.log(newGamePc);

newGamePc.newGame('Fallout 4');


/////////////////////////////////////////////////////////////////////////////////////////////////////////////


// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }

function TagObject(titleOfTag, action, attrs) {
    this.titleOfTage = titleOfTag;
    this.action = action;
    this.attrs = attrs || [];
}

let a = new TagObject('<a>', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.',
    [{titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
        {titleOfAttr: 'coords', actionOfAttr: 'Устанавливает координаты активной области'}]);
console.log(a);

let div = new TagObject('<div>', 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.',
    [{titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>'},
        {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому'}]);
console.log(div);

let h1 = new TagObject('<h1>', 'Тег <h1> представляет собой наиболее важный заголовок первого уровня.',
    [{titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание заголовка'},
        {
            titleOfAttr: 'class',
            actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением'
        }]);
console.log(h1);

let span = new TagObject('<span>', 'Тег <span> предназначен для определения строчных элементов документа.',
    [{titleOfAttr: 'contextmenu', actionOfAttr: 'Устанавливает контекстное меню для элемента'},
        {
            titleOfAttr: 'dir',
            actionOfAttr: 'Задает направление и отображение текста — слева направо или справа налево'
        }]);
console.log(span);


// -  Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }

class TagClass {
    constructor(nameTag, actionTag, attrsTag) {
        this.nameTag = nameTag;
        this.actionTag = actionTag;
        this.attrsTag = attrsTag || [];

    }
}

let aForClass = new TagClass('<a>', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.',
    [{titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
        {titleOfAttr: 'coords', actionOfAttr: 'Устанавливает координаты активной области'}]);

let divForClass = new TagClass('<div>', 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.',
    [{titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>'},
        {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому'}]);

let h1ForClass = new TagClass('<h1>', 'Тег <h1> представляет собой наиболее важный заголовок первого уровня.',
    [{titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание заголовка'},
        {
            titleOfAttr: 'class',
            actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением'
        }]);

let spanForClass = new TagClass('<span>', 'Тег <span> предназначен для определения строчных элементов документа.',
    [{titleOfAttr: 'contextmenu', actionOfAttr: 'Устанавливает контекстное меню для элемента'},
        {
            titleOfAttr: 'dir',
            actionOfAttr: 'Задает направление и отображение текста — слева направо или справа налево'
        }]);

console.log('_________________________________________________')
console.log(aForClass);
console.log(divForClass);
console.log(h1ForClass);
console.log(spanForClass);


// -- Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

let car = {
    model: 'Studebaker US6',
    manufacturer: 'Studebaker Corporation',
    yearOfIssue: 1941,
    maxSpeed: 69,
    engineVolume: 7,
    driver: 'New Driver',

    drive: function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    },

    info: function () {
        console.log(`model: ${this.model} \n manufacturer: ${this.manufacturer} \n yearOfIssue: ${this.yearOfIssue} \n maxSpeed: ${this.maxSpeed} \n engineVolume: ${this.engineVolume} \n driver: ${this.driver}`);
    },

    increaseMaxSpeed: function (newSpeed) {
        this.maxSpeed = newSpeed;
        console.log(`New max speed: ${newSpeed}`);
    },

    changeYear: function (newValue) {
        this.yearOfIssue = newValue;
        console.log(`New year of Issue: ${newValue}`);
    },

    addDriver: function (newDriver) {
        this.driver = newDriver;
    }

}

car.info();
car.drive();
car.increaseMaxSpeed(90);
car.changeYear(1990);
car.info();
car.addDriver({name: 'Andrii', age: 23, experienceYears: 5});

console.log(car.driver);








