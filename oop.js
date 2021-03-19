console.log('--OOP--');
//--Class
var Chamption = /** @class */ (function () {
    //de tao ta instance
    function Chamption(name, slogan, heal) {
        this.name = name;
        this.stogan = slogan;
        this.heal = heal;
    }
    Chamption.prototype.display = function () {
        return this.name + " c\u00F2n \u0111\u01B0\u1EE3c g\u1ECDi l\u00E0 " + this.stogan + ", m\u00E1u c\u01A1 b\u1EA3n : " + this.heal;
    };
    return Chamption;
}());
var shen = new Chamption('shen', 'mat hoang hon', 540);
console.log(shen.display());
//--OOP2
var Phone = /** @class */ (function () {
    function Phone(name, price, color, rated) {
        this.name = name;
        this.price = price;
        this.color = color;
        this.rated = rated;
    }
    Phone.prototype.show = function () {
        return this.name + "  is priced " + this.price;
    };
    return Phone;
}());
var iphone = new Phone('iphone', 1000, ['red', 'gray', 'black'], 5);
console.log(iphone);
console.log(iphone.show());
//--OOP3
console.log('-------------');
var state;
(function (state) {
    state[state["Create"] = 10] = "Create";
    state[state["Processing"] = 11] = "Processing";
    state[state["Finish"] = 12] = "Finish";
})(state || (state = {}));
var Work = /** @class */ (function () {
    function Work(id, name, status) {
        this.id = 1;
        this.name = 'Playing';
        this.id = id;
        this.name = name;
        this.status = status;
    }
    Work.prototype.show = function () {
        return this.name + " have status " + this.status;
    };
    Work.test = function () {
        console.log('xxx');
    };
    return Work;
}());
console.log(Work);
// console.log(Work.name );
console.log('-------------');
var work1 = new Work(1, 'Dev', state.Create);
console.log(work1);
console.log(work1.name);
console.log(work1.show());
// let work2 = new Work();
// console.log(work2);
// console.log(work2.show())
console.log(Work.test());
