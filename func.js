console.log('++ FUNC RETURN');
//--func return number
function calcSum() {
    return 100;
}
console.log(calcSum());
//--func return string
function greeter() {
    return "hello Khánh Noi";
}
console.log(greeter());
//--func return StringArr
function arrStr() {
    return ['khanh', 'noi', 'dz'];
}
console.log(arrStr());
//--func return Obj
function objTest() {
    return {
        name: "khánh",
        age: 22
    };
}
console.log(objTest());
//+++++++++++
console.log('++ FUNC (a,b) ');
//--func (a,b) return
function calcAverage(x, y) {
    console.log("Average: " + (x + y) / 2);
}
calcAverage(5, 6);
calcAverage(9, 4);
//--func anonymous
var func = function (x, y) {
    return x + y;
};
console.log(func(1, 99));
//---func anonymous2
var func2 = function (x, y) {
    return x + y;
};
console.log(func2(2, 99));
//---func đâu phải function =>
var func3 = function (x, y) {
    return x + y;
};
console.log(func3(3, 99));
