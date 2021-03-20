var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError(
          "Class extends value " + String(b) + " is not a constructor or null"
        );
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
console.log("--EXtend");
var Champion = /** @class */ (function () {
  // heal: number;
  function Champion(name, description, skill) {
    this.name = name;
    this.description = description;
    this.skill = skill;
  }
  Champion.prototype.show = function () {
    console.log(this.name + " : " + this.description + " ");
    // return `${this.name} : ${this.description} `
  };
  return Champion;
})();
var Assassin = /** @class */ (function (_super) {
  __extends(Assassin, _super);
  function Assassin(name, description, skill, dame) {
    var _this = _super.call(this, name, description, skill) || this;
    _this.dame = dame;
    return _this;
  }
  Assassin.prototype.show = function () {
    _super.prototype.show.call(this);
    //  console.log('this.dame');
    console.log(this.dame);
    // return `${this.name} : ${this.description} , ${this.dame} `
  };
  return Assassin;
})(Champion);
var shen = new Champion("shen", " the eye of twilight", ["attack", "punch"]);
var garen = new Champion("gren", " demacia", ["attack", "spin"]);
shen.show();
garen.show();
var ShenAssassin = new Assassin(
  "shenAssassin",
  " the eye of twilight",
  ["attack", "punch"],
  "Actack Super"
);
ShenAssassin.show();
//--Access modifier
var Course = /** @class */ (function () {
  function Course(id, name, size) {
    this.id = id;
    this.name = name;
    this.size = size;
  }
  Course.prototype.show = function () {
    console.log(this.name + " and " + this.size + " and " + this.id + " ");
  };
  Course.prototype.test2 = function () {
    console.log(this.name);
  };
  return Course;
})();
var CodeCoure = /** @class */ (function (_super) {
  __extends(CodeCoure, _super);
  function CodeCoure(id, name, size, file) {
    var _this = _super.call(this, id, name, size) || this;
    _this.file = file;
    return _this;
  }
  CodeCoure.prototype.show = function () {
    // super.show()
    // console.log(`${this.name} and ${this.size} and ${this.id} and ${this.file} `)
    console.log(" " + this.file + " ");
  };
  return CodeCoure;
})(Course);
var testCoure = new Course(1, "code1", 1000);
var testCode = new CodeCoure(2, "code2", 2000, "file1");
testCode.show();
// console.log(testCode.name)
testCoure.test2();
//---ACCESSOR
console.log("---ACCESSOR");
var Hero = /** @class */ (function () {
  function Hero(_name) {
    // super(props);
    this._name = _name;
  }
  // getter
  Hero.prototype.getName = function () {
    return this._name;
  };
  Hero.prototype.setName = function (v) {
    this._name = v;
  };
  return Hero;
})();
var shen2 = new Hero("shen2");
console.log(shen2.getName());
shen2.setName("SHenNoi");
console.log(shen2.getName());
//--Generic trong class
var Calc = /** @class */ (function () {
  function Calc() {}
  Calc.show = function (x) {
    console.log(x);
  };
  return Calc;
})();
Calc.show(["1", "ss", "adfsdf"]);
Calc.show([1000, "ss", "adfsdf"]);
//--interface
console.log("--interface  type");
function showDescripton(onePerson) {
  console.log(onePerson.name + " : " + onePerson.age);
}
showDescripton({ name: "khanh", age: 22 });
//--interface Class => class dc tao ra tu interface -> tối thiếu phải có đủ thuốc tích và các hàm
console.log("--interface  class => implements");
var Tuong = /** @class */ (function () {
  function Tuong() {}
  Tuong.prototype.show = function () {
    console.log("show");
  };
  Tuong.prototype.skill = function (heal) {
    return 10;
  };
  Tuong.prototype.bReturn = function () {
    console.log("B ve");
  };
  return Tuong;
})();
//-- Name space -> đặt tên kko sợ trùng từ khoá, dễ quản lts module có hệ thộng
var Android;
(function (Android) {
  var String = /** @class */ (function () {
    function String() {}
    return String;
  })();
  Android.String = String;
  var Number = /** @class */ (function () {
    function Number() {}
    return Number;
  })();
})(Android || (Android = {}));
var xiaomi = new Android.String();
