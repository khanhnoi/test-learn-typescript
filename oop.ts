console.log('--OOP--');

//--Class

class Chamption {
    name : string;
    stogan: string;
    heal: number;
    //de tao ta instance
    constructor(name:string,slogan:string,heal:number) {
        this.name = name;
        this.stogan = slogan;
        this.heal = heal
    }

    display() {
        return `${this.name} còn được gọi là ${this.stogan}, máu cơ bản : ${this.heal}`;
    }

}

let shen = new Chamption('shen', 'mat hoang hon', 540);
console.log(shen.display())

//--OOP2
class Phone {
    name: string;
    price:number;
    color: string[];
    rated: number;

    constructor(name:string,price:number, color:string[],rated: number) {
        this.name = name;
        this.price = price;
        this.color = color;
        this.rated = rated;
    }
    show() {
        return `${this.name}  is priced ${this.price}`
    }
}

let iphone = new Phone('iphone', 1000, ['red', 'gray', 'black'], 5);
console.log(iphone)
console.log(iphone.show())

//--OOP3
console.log('-------------');
enum state {
    Create = 10,
    Processing,
    Finish
}

class Work {
    id: number = 1;
    name: string = 'Playing';
    status: state;
    constructor(id:number, name:string,status:state) {
        this.id = id;
        this.name = name;
        this.status =status
    }
    show() {
        return `${this.name} have status ${this.status}`
    }
    static test() {
        console.log('xxx')
    }
}console.log(Work );
// console.log(Work.name );
console.log('-------------')
let work1 = new Work(1, 'Dev', state.Create);
console.log(work1);
console.log(work1.name);
console.log(work1.show())
// let work2 = new Work();
// console.log(work2);
// console.log(work2.show())
console.log(Work.test())