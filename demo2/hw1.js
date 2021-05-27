"use strict";
exports.__esModule = true;
// Створити такі класи:
//   1) Депутат
// - імя
// - вік
// - стать
// - ступінь чесності (0-100)
// - мінімальна сума хабаря
//////
var Dept = /** @class */ (function () {
    function Dept(name, age, gender, honestyLevel, minimumMoney) {
        var _this = this;
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
        this.giveMoney = function (money) {
            if (_this.honestyLevel > 50 || money < _this.minimumMoney) {
                console.log(_this.name + " don't take money");
                return;
            }
            if (money < _this.minimumMoney + _this.minimumMoney * _this.honestyLevel / 100) {
                console.log(_this.name + " thinking take money or not");
                return;
            }
            console.log(_this.name + " take the " + money + " money");
            return;
        };
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.honestyLevel = honestyLevel;
        this.minimumMoney = minimumMoney;
    }
    return Dept;
}());
var deputat1 = new Dept('kravchuk', 57, 'male', 72, 100000);
var deputat2 = new Dept('medvedchuk', 53, 'male', 20, 99000);
var deputat3 = new Dept('tymoshenko', 48, 'female', 34, 15000);
var deputat4 = new Dept('razumkov', 40, 'male', 51);
var deputat5 = new Dept('lyashko', 54, 'male', 40, 20000);
deputat1.giveMoney(6500);
deputat2.giveMoney(150000);
deputat3.giveMoney(12500);
deputat4.giveMoney(99);
deputat5.giveMoney(24000);
// 2) Партія
// - назва
// - голова (Депутат)
// - члени партії (Масив депатутатів)
var Fraction = /** @class */ (function () {
    function Fraction(name, leader, members) {
        var _this = this;
        // - додати\видалити депутата з фракції
        this.addDept = function (dept) {
            _this.members.push(dept);
        };
        this.deleteDept = function (dept) {
            _this.members.filter(function (_a) {
                var name = _a.name;
                return name !== dept;
            });
        };
        // - вивести конкретну фракцію
        this.membersOfFraction = function () {
            console.log("Fraction: " + _this.name);
            _this.members.map(function (_a) {
                var name = _a.name, age = _a.age;
                return console.log("Name: " + name + " - Age: " + age);
            });
        };
        // - вивести всіх хабарників фракції
        this.MoneyMakers = function () {
            console.log("MoneyMakers from " + _this.name + " : ");
            _this.members
                .filter(function (_a) {
                var honestyLevel = _a.honestyLevel;
                return honestyLevel < 50;
            })
                .forEach(function (_a) {
                var name = _a.name, honestyLevel = _a.honestyLevel;
                return console.log(name + " - " + honestyLevel);
            });
        };
        // - вивести найбільшого хабарника у фрації
        this.TheBigMoneyMakers = function () {
            var TheBigMoneyMakers = _this.members.sort(function (a, b) { return a.honestyLevel - b.honestyLevel; })[0];
            console.log("TheBigMoneyMakers in fraction: " + _this.name + " : " + TheBigMoneyMakers.name);
        };
        this.name = name;
        this.leader = leader;
        this.members = members;
    }
    return Fraction;
}());
var fraction1 = new Fraction('fraction1', deputat2, [deputat3, deputat2]);
var fraction2 = new Fraction('fraction2', deputat1, [deputat1, deputat5]);
var fraction3 = new Fraction('fraction3', deputat4, [deputat4, deputat2]);
// 3) Верхрвна рада
// - масив партій
// - решті полів на вибір
var Rada = /** @class */ (function () {
    function Rada(numberOfChambers, fractions) {
        var _this = this;
        //   - додати\видалити фракцію
        this.addFraction = function (fraction) {
            _this.fractions.push(fraction);
        };
        this.deleteFraction = function (fractionName) {
            _this.fractions = _this.fractions.filter(function (_a) {
                var name = _a.name;
                return name !== fractionName;
            });
        };
        // - вивести всі фракції
        this.showAllFractions = function () {
            console.log('All Fraction of Rada: ');
            _this.fractions.forEach(function (_a) {
                var name = _a.name, leader = _a.leader;
                console.log("Fraction " + name + ". The Leader: " + leader.name);
            });
        };
        this.showOneFraction = function (FractionName) {
            var fraction = _this.fractions.filter(function (_a) {
                var name = _a.name;
                return name === FractionName;
            })[0];
            console.log(fraction.name, fraction.leader, fraction.members);
        };
        // - вивести найбільшого хабарника верховної ради
        this.showTheBigMoneyMakerInRada = function () {
            var showTheBigMoneyMakerInRada = _this.fractions
                .map(function (fraction) { return fraction.members.sort(function (a, b) { return a.honestyLevel - b.honestyLevel; })[0]; })
                .sort(function (a, b) { return a.honestyLevel - b.honestyLevel; })[0];
            console.log("The Big Money Maker in Ukraine: " + showTheBigMoneyMakerInRada.name);
        };
        this.numberOfChambers = numberOfChambers;
        this.fractions = fractions;
    }
    return Rada;
}());
