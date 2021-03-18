console.log('++ FUNC RETURN')

//--func return number
function calcSum():number {
    return 100;
}
console.log(calcSum())

//--func return string
function greeter():string {
    return "hello Khánh Noi"
}
console.log(greeter())

//--func return StringArr
function arrStr():String[] {
    return ['khanh', 'noi', 'dz'];
}
console.log(arrStr())

//--func return Obj
function objTest(): any {
    return {
        name: "khánh",
        age: 22
    }
}
console.log(objTest())

//+++++++++++
console.log('++ FUNC (a,b) ')
//--func (a,b) return
function calcAverage(x:number, y:number):void {
console.log("Average: " + (x+y)/2)
}
calcAverage(5,6)
calcAverage(9,4)

//--func anonymous
let func = function(x:number, y:number):number {
    return x+y;
    }
console.log(func(1,99))

//---func anonymous2
let func2: (x:number, y:number) => number = function(x,y) {
    return x+y;
}
console.log(func2(2,99))

//---func đâu phải function =>
let func3 = (x:number,y:number) :number => {
    return x+y;
}
console.log(func3(3,99))

