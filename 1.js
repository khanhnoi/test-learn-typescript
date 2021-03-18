//----String
var text;
text = "Khanh Noi";
// text = 43;
var text2;
text2 = 'Hello worlds';
console.log("Oh, " + text2 + " , \u0111\u00E2y l\u00E0 " + text);
//---Numner
var num;
num = 43;
console.log(num);
//--ArrString
var arrString;
arrString = ['Khanh', "Shen", 'Khánh Nòi'];
console.log(arrString[2]);
var arrString2 = ["Xnxx", "Xvideo", 'hentaiz'];
//---ArrNum
var arrNum = [1, 2, 3, 4, 5];
console.log(arrNum);
//--Boolean
var flag = true;
console.log(flag);
//--ENUM
var checkStatus;
(function (checkStatus) {
    checkStatus[checkStatus["NEW"] = 0] = "NEW";
    checkStatus[checkStatus["OLD"] = 1] = "OLD";
    checkStatus[checkStatus["DONE"] = 2] = "DONE";
})(checkStatus || (checkStatus = {}));
console.log(checkStatus);
console.log(checkStatus.NEW);
//--tuple
// let hv: string[] = ['khanh', 43]
//- Found 1 error. Watching for file changes.
var tupleTest = ['khanh', 43, 'noi'];
console.log(tupleTest);
//--Any  - là bất kì cái gì -> khia bao obj
var test;
x = 'test kn';
console.log(x);
x = ['hihi', 0101, 'vl', 11];
console.log(x);
x = {
    key: "value",
    key2: "value2",
    obj1: {
        key: "value",
        key2: "value2"
    }
};
console.log(x);
//--Void  - ko tra ve gia tri
function calcSomeThing() {
    console.log("Calculating..........");
    // return 'result';
    // is not assignable to type 'void'.
}
calcSomeThing();
