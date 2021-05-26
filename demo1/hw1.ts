// Створити такі класи:
//   1) Депутат
// - імя
// - вік
// - стать
// - ступінь чесності (0-100)
// - мінімальна сума хабаря
///

enum EDept {
    DEP1 = 'dep1',
    DEP2 = 'dep2',
    DEP3 = 'dep3',
    DEP4 = 'dep4',
    DEP5 = 'dep5',
    DEP6 = 'dep6',
    DEP7 = 'dep7',
    DEP8 = 'dep8'
}

enum EGendersDept {
    MALE = 'male',
    FEMALE = 'female'
}

class Dept {
    public name: EDept;
    protected age: number;
    private gender: EGendersDept;
    public honestyLevel: number;
    public minimumMoney?: number;

    constructor(name: EDept, age: number, gender: EGendersDept, honestyLevel: number, minimumMoney?: number) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.honestyLevel = honestyLevel;
        this.minimumMoney = minimumMoney;
    }
}

let dept1 = new Dept(EDept.DEP2, 61, EGendersDept.FEMALE, 43, 1100);

// 2) Партія
// - назва
// - голова (Депутат)
// - члени партії (Масив депатутатів)

enum EFraction {
    FRACTION1 = 'fraction1',
    FRACTION2 = 'fraction2',
    FRACTION3 = 'fraction3',
    FRACTION4 = 'fraction4',
    FRACTION5 = 'fraction5',
}

class Fraction {
    public name: EFraction;
    private leader: EDept;
    protected members: Array<EDept>;

    constructor(name: EFraction, leader: EDept, members: Array<EDept>) {
        this.name = name;
        this.leader = leader;
        this.members = members;
    }
}

let fraction1 = new Fraction(EFraction.FRACTION3, EDept.DEP1, [EDept.DEP3, EDept.DEP5])


// 3) Верхрвна рада
// - масив партій
// - решті полів на вибір

enum EChambers {
    ONE = 'one',
    TWO = 'two',
}

class Rada {
    protected numberOfChambers: EChambers;
    protected fractions: Array<EFraction>;

    constructor(numberOfChambers: EChambers, fractions: Array<EFraction>) {
        this.numberOfChambers = numberOfChambers;
        this.fractions = fractions;
    }
}

let rada = new Rada(EChambers.TWO, [EFraction.FRACTION2, EFraction.FRACTION4, EFraction.FRACTION5]);


// Мають бути присутні такі можливості:
//   - додати\видалити фракцію
// - вивести всі фракції
// - вивести конкретну фракцію
// - додати\видалити депутата з фракції
// - вивести всіх хабарників фракції
// - вивести найбільшого хабарника у фрації
// - вивести найбільшого хабарника верховної ради
// - вивести фсіх депутатів фракції
// - спробувати дати взятку. Чим чесніший депутат тим склідніше дати йому хабаря.
//   Дача хабаря має мати 3 стани
// - не успішна
// - успішна
// - вгається
//
// Якщо сума взяти менша за мінімальку, тоді хабарь дати не можливо
// Сума при якій депутат перестає вагатись рівна "мінімальна сума * % чесності".
//   Тобто, якщо депутат чесний на 10% і сума взяти рівна 1000, а видаєте 1200, то депатут перестає вагатись,
//   та бере хабар.
//   Але якщо при таких самих усовах хабар складає 1050, то він буде вагатись.
//
// !!! Хабарником рахується людина, в якої рівень чесності нижчий за 50 !!!