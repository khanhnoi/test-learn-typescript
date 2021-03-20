console.log('--EXtend')

class Champion {
    name: string;
    description: String;
    skill: String[];
    // heal: number;

    constructor(name:string,description:String,skill: String[]) {
        this.name = name;
        this.description = description;
        this.skill = skill;
    }
    show():void {
        console.log(`${this.name} : ${this.description} `)
        // return `${this.name} : ${this.description} `
    }
    // show() {
    //     return `${name} : ${description} `
    // }
}

class Assassin extends Champion {
    dame:String;
    constructor(name:string,description:String,skill: String[],dame:String) {
        super(name,description,skill);
        this.dame = dame;
    }
    show() :void {
        super.show();
        //  console.log('this.dame');
        console.log(this.dame);
        // return `${this.name} : ${this.description} , ${this.dame} `
    }
}

let shen = new Champion('shen',' the eye of twilight' , ['attack', 'punch']);
let garen = new Champion('gren',' demacia' , ['attack', 'spin']);
shen.show()
garen.show()

let ShenAssassin = new Assassin('shenAssassin',' the eye of twilight' , ['attack', 'punch'], "Actack Super")
ShenAssassin.show()

//--Access modifier

class Course {
    id:number;
    // public name:string; // giog nhau
    private name:string; // giog nhau
    size:number
    constructor( id:number,name:string,size:number) {
        this.id =id;
        this.name=name;
        this.size=size;
        
    }
    show() :void{
        console.log(`${this.name} and ${this.size} and ${this.id} `)
    } 
    test2():void {
        console.log(this.name)
    }
}

class CodeCoure extends Course {
    file: String;
    constructor(id:number,name:string,size:number,file: String){
        super(id, name,size)
        this.file = file;
    }
    show() :void{
        // super.show()
        // console.log(`${this.name} and ${this.size} and ${this.id} and ${this.file} `)
        console.log(` ${this.file} `)
    }
    // test1():void {
    //     console.log(this.name)
    // }
}
let testCoure = new Course(1,'code1',1000);
let testCode = new CodeCoure(2,'code2',2000,'file1');
testCode.show();

// console.log(testCode.name)
testCoure.test2()

//---ACCESSOR
console.log('---ACCESSOR')
class Hero {
    private _name :string;

    constructor(_name :string) {
        // super(props);
        this._name = _name;       
    }
    // getter
    
    public getName() : string {
        return this._name;
    }
    
    public setName(v : string) {
        this._name = v;
    }
    
    
}

let shen2 = new Hero('shen2');
console.log(shen2.getName())
shen2.setName('SHenNoi');
console.log(shen2.getName())

//--Generic trong class
class Calc {
    static show<T>(x : T[]): void {
        console.log(x)
    }
}

Calc.show<string>(['1','ss','adfsdf'])
Calc.show<any>([1000,'ss','adfsdf'])

//--interface
console.log('--interface  type')

interface person {
    name: string,
    age?: number
}

function showDescripton(onePerson: person ):void {
    console.log(`${onePerson.name} : ${onePerson.age}`)
}

showDescripton({name:"khanh",age:22})
//--interface Class => class dc tao ra tu interface -> tối thiếu phải có đủ thuốc tích và các hàm
console.log('--interface  class => implements')

interface ChampionInterface {
    name: String;
    heal: Number;
    dame: Number;

    show():void ;
    skill(heal: number) :any ;
    bReturn(): void;
}

class Tuong implements ChampionInterface {
    name: String;
    heal: Number;
    dame: Number;

    show():void {
        console.log('show')
    }
    skill(heal: number) :any {
        return 10
    }
    bReturn(): void {
        console.log('B ve')
    }
}

//-- Name space

module Android {
    export class String {

    }
    class Number {

    }
}

let xiaomi = new Android.String();
