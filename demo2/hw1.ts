
import {IDept} from "./interface/interface";
import {IFraction} from "./interface/fraction";
import {IRada} from "./interface/rada";

// Створити такі класи:
//   1) Депутат
// - імя
// - вік
// - стать
// - ступінь чесності (0-100)
// - мінімальна сума хабаря
//////

class Dept {
    public name: string;
    public age: number;
    public gender: string;
    public honestyLevel: number;
    public minimumMoney?: number;

    constructor(name: string, age: number, gender: string, honestyLevel: number, minimumMoney?: number) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.honestyLevel = honestyLevel;
        this.minimumMoney = minimumMoney;
    }

    //функція взяти забар// Якщо сума взяти менша за мінімальку, тоді хабарь дати не можливо
// Сума при якій депутат перестає вагатись рівна "мінімальна сума * % чесності".
//   Тобто, якщо депутат чесний на 10% і сума взяти рівна 1000, а видаєте 1200, то депатут перестає вагатись,
//   та бере хабар.
//   Але якщо при таких самих усовах хабар складає 1050, то він буде вагатись.
// - спробувати дати взятку. Чим чесніший депутат тим склідніше дати йому хабаря.
//   Дача хабаря має мати 3 стани
// - не успішна
// - успішна
// - вгається
// !!! Хабарником рахується людина, в якої рівень чесності нижчий за 50 !!!

    public giveMoney = (money: number): void => {
        if (this.honestyLevel > 50 || money < this.minimumMoney) {
            console.log(`${this.name} don't take money`);
            return
        }
        if (money < this.minimumMoney + this.minimumMoney * this.honestyLevel / 100) {
            console.log(`${this.name} thinking take money or not`);
            return;
        }
        console.log(`${this.name} take the ${money} money`)
        return;
    }
}

const deputat1: IDept = new Dept('kravchuk', 57, 'male', 72, 100000);
const deputat2: IDept = new Dept('medvedchuk', 53, 'male', 20, 99000);
const deputat3: IDept = new Dept('tymoshenko', 48, 'female', 34, 15000);
const deputat4: IDept = new Dept('razumkov', 40, 'male', 51);
const deputat5: IDept = new Dept('lyashko', 54, 'male', 40, 20000);

deputat1.giveMoney(6500);
deputat2.giveMoney(150000);
deputat3.giveMoney(12500);
deputat4.giveMoney(99);
deputat5.giveMoney(24000);

// 2) Партія
// - назва
// - голова (Депутат)
// - члени партії (Масив депатутатів)

class Fraction {
    public name: string;
    public leader: IDept;
    public members: Array<IDept>;

    constructor(name: string, leader: IDept, members: Array<IDept>) {
        this.name = name;
        this.leader = leader;
        this.members = members;
    }

    // - додати\видалити депутата з фракції

    public addDept = (dept: IDept): void => {
        this.members.push(dept);
    }

    public deleteDept = (dept: string): void => {
        this.members.filter(({name}) => name !== dept)
    }

    // - вивести конкретну фракцію
    public membersOfFraction = (): void => {
        console.log(`Fraction: ${this.name}`);
        this.members.map(({name, age}) => console.log(`Name: ${name} - Age: ${age}`))
    }

    // - вивести всіх хабарників фракції
    public MoneyMakers = (): void => {
        console.log(`MoneyMakers from ${this.name} : `);
        this.members
            .filter(({honestyLevel}) => honestyLevel < 50)
            .forEach(({name, honestyLevel}) => console.log(`${name} - ${honestyLevel}`));
    }

    // - вивести найбільшого хабарника у фрації
    public TheBigMoneyMakers = (): void => {
        const TheBigMoneyMakers: IDept = this.members.sort((a, b) => a.honestyLevel - b.honestyLevel)[0];
        console.log(`TheBigMoneyMakers in fraction: ${this.name} : ${TheBigMoneyMakers.name}`);
    }

}

const fraction1: IFraction = new Fraction('fraction1', deputat2, [deputat3, deputat2]);
const fraction2: IFraction = new Fraction('fraction2', deputat1, [deputat1, deputat5]);
const fraction3: IFraction = new Fraction('fraction3', deputat4, [deputat4, deputat2]);


// 3) Верхрвна рада
// - масив партій
// - решті полів на вибір

class Rada {
    public numberOfChambers: number;
    public fractions: Array<IFraction>;

    constructor(numberOfChambers: number, fractions: Array<IFraction>) {
        this.numberOfChambers = numberOfChambers;
        this.fractions = fractions;
    }

    //   - додати\видалити фракцію
    public addFraction = (fraction: IFraction): void => {
        this.fractions.push(fraction);
    }

    public deleteFraction = (fractionName: string): void => {
        this.fractions = this.fractions.filter(({name}) => name !== fractionName);
    }

    // - вивести всі фракції
    public showAllFractions = (): void => {
        console.log('All Fraction of Rada: ')
        this.fractions.forEach(({name, leader}) => {
            console.log(`Fraction ${name}. The Leader: ${leader.name}`);
        });
    }

    public showOneFraction = (FractionName: string): void => {
        const fraction: IFraction = this.fractions.filter(({name}) => name === FractionName)[0];
        console.log(fraction.name, fraction.leader, fraction.members)
    }

    // - вивести найбільшого хабарника верховної ради
    public showTheBigMoneyMakerInRada = (): void => {
        const showTheBigMoneyMakerInRada: IDept = this.fractions
            .map((fraction) => fraction.members.sort((a, b) => a.honestyLevel - b.honestyLevel)[0])
            .sort((a, b) => a.honestyLevel - b.honestyLevel)[0];

        console.log(`The Big Money Maker in Ukraine: ${showTheBigMoneyMakerInRada.name}`);
    }
}






