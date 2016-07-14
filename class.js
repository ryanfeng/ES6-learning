/**
 * Created by wb-fkc215799 on 2016/7/14.
 */
//ES5的类的创建
function Point(x, y) {
    "use strict";
    this.x = x;
    this.y = y;
}

Point.prototype.toString = function() {
    "use strict";
    return "(" + this.x + "," + this.y + ")";
};

var p = new Point(10, 10);

//ES6的类的创建方式
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return "(" + this.x + "," + this.y + ")";
    }
}
var p1 = new Point(1, 2);

typeof Point; //function
Point === Point.prototype.constructor; //true

//类添加多个方法
Object.assign(Point.prototype, {
    toString() {},
    toValue() {}
});

//ES6不可以枚举
Object.keys(Point.prototype);
Object.getOwnPropertyNames(Point.prototype);

//ES6每个class必须有一个constructor,默认会返回this，就是这个对象的实例
class Foo {
    constructor() {
        return Object.create(null);
    }
}

new Foo() instanceof Foo //false

//类的构造函数必须实例化才能用。也就是必须new一个对象出来
Foo(); //报错

//实例的属性除非显式定义在其本身（即定义在this对象上），否则都是定义在原型上（即定义在class上）
let point = new Point(1, 2);
point.hasOwnProperty("x"); //true
point.hasOwnProperty("y"); //true
point.hasOwnProperty("toString"); //false
point.__proto__.hasOwnProperty("toString"); //true

//类的所有实例共享一个原型对象
var p1 = new Point(2, 1);
var p2 = new Point(1, 2);
p1.__proto__ == p2.__proto__; //true

//类的实例可以通过__proto__给Class添加方法,推荐使用
point.__proto__.printName = function() {
    "use strict";
    return "wangxiaole"
};
p1.printName(); //wnagxiaole

//类名的使用和E5是一样的
Point.name //Point

//class的另外一种写法
const MyClass = class {};
let inst = new MyClass();

let person = new class {
    constructor(name) {
        this.name = name;
    }

    sayName() {
        console.log(this.name);
    }
}.("李四");//这是一个立即执行Class
person.sayName();

//class不存在变量提升
new Foo();//ReferenceError
class Foo {}


