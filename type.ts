
//----String
let text: string;

text = "Khanh Noi";
// text = 43;

let text2 : string;
text2 = 'Hello worlds'

console.log(`Oh, ${text2} , đây là ${text}`)

//---Numner

let num: number;
num = 43
console.log(num)


//--ArrString

let arrString : string[]

arrString = [ 'Khanh', "Shen", 'Khánh Nòi']
console.log(arrString[2])

let arrString2 : string[] = ["Xnxx", "Xvideo", 'hentaiz']

//---ArrNum

let arrNum : number[] = [1,2,3,4,5];
console.log(arrNum)

//--Boolean

let flag : boolean = true;
console.log(flag)

//--ENUM
enum checkStatus { NEW, OLD, DONE}
console.log(checkStatus)
console.log(checkStatus.NEW)

//--tuple
// let hv: string[] = ['khanh', 43]
//- Found 1 error. Watching for file changes.
let tupleTest: [string, number, string] = [ 'khanh', 43, 'noi'];
console.log(tupleTest)

//--Any  - là bất kì cái gì -> khia bao obj
let test : any;
test = 'test kn';
console.log(test)
test = ['hihi', 0101, 'vl', 11];
console.log(test);
test = {
    key: "value",
    key2: "value2",
    obj1: {
        key: "value",
    key2: "value2",
    }
}
console.log(test);

//--Void  - ko tra ve gia tri

function calcSomeThing():void {
    console.log("Calculating..........")

    // return 'result';
    // is not assignable to type 'void'.
}
calcSomeThing()

//-- Ép kiểu ??? -> đê nó gợi ý code :v
let type1: any;
type1 = ' type 1 TS xxxxxxx';
console.log((<string>type1).length);
//not number -> string dc
//Not string -> number dc
//Chia kieu any
let strNum:number = 10;
console.log(strNum + 10);
// console.log((<string>strNum) + 10);
// console.log( (strNum as string) + 10);
