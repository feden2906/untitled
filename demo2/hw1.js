// Створити такі класи:
//   1) Депутат
// - імя
// - вік
// - стать
// - ступінь чесності (0-100)
// - мінімальна сума хабаря
//////
var EDept;
(function (EDept) {
    EDept["DEP1"] = "dep1";
    EDept["DEP2"] = "dep2";
    EDept["DEP3"] = "dep3";
    EDept["DEP4"] = "dep4";
    EDept["DEP5"] = "dep5";
    EDept["DEP6"] = "dep6";
    EDept["DEP7"] = "dep7";
    EDept["DEP8"] = "dep8";
})(EDept || (EDept = {}));
var EGendersDept;
(function (EGendersDept) {
    EGendersDept["MALE"] = "male";
    EGendersDept["FEMALE"] = "female";
})(EGendersDept || (EGendersDept = {}));
var Dept = /** @class */ (function () {
    function Dept(name, age, gender, honestyLevel, minimumMoney) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.honestyLevel = honestyLevel;
        this.minimumMoney = minimumMoney;
    }
    return Dept;
}());
var dept1 = new Dept(EDept.DEP2, 61, EGendersDept.FEMALE, 43, 1100);
console.log(dept1);
// 2) Партія
// - назва
// - голова (Депутат)
// - члени партії (Масив депатутатів)
var EFraction;
(function (EFraction) {
    EFraction["FRACTION1"] = "fraction1";
    EFraction["FRACTION2"] = "fraction2";
    EFraction["FRACTION3"] = "fraction3";
    EFraction["FRACTION4"] = "fraction4";
    EFraction["FRACTION5"] = "fraction5";
})(EFraction || (EFraction = {}));
var Fraction = /** @class */ (function () {
    function Fraction(name, leader, members) {
        this.name = name;
        this.leader = leader;
        this.members = members;
    }
    return Fraction;
}());
var fraction1 = new Fraction(EFraction.FRACTION3, EDept.DEP1, [EDept.DEP3, EDept.DEP5]);
// 3) Верхрвна рада
// - масив партій
// - решті полів на вибір
var EChambers;
(function (EChambers) {
    EChambers["ONE"] = "one";
    EChambers["TWO"] = "two";
})(EChambers || (EChambers = {}));
var Rada = /** @class */ (function () {
    function Rada(numberOfChambers, fractions) {
        this.numberOfChambers = numberOfChambers;
        this.fractions = fractions;
    }
    return Rada;
}());
var rada = new Rada(EChambers.TWO, [EFraction.FRACTION2, EFraction.FRACTION4, EFraction.FRACTION5]);
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
