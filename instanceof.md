#在判断变量，函数类型方面我们一般使用typeof，但是范围只有几种类型，使用instanceof 是比较精确的。
###使用方式：
    [1, 2] instanceof Array === true;
    new Object() instanceof Array === false;
    [1, 2] instanceof new Object() === true;
###继承中关系：
    function Person() {}
    function Student() {}
    Student.prototype = new Person();//Object.create(Person.prototype);
    Student.prototype.constructor = Student;

    var stu = new Student();
    stu instanceof Student //true;

    var per = new Person();
    per instanceof Person //true

    //父类和子类关系  
    per instanceof Student 
    //false 
    stu instanceof Person 
    //true 
###数据类型
#####数据类型有6种，null/undefined/number/boolean/string/object,其中object包括Function,Array,Date.
#####其中基本类型就是那五中，但是他们有包装对象Number，String，Boolean。
    var str = new String("123");  
    str.t = 1;//1
    console.log(str.t) //str是一个对象了
    
    var str = "123";
    str.t = 1;//1
    console.log(str.1);//undefined str还是一个基本类型,但是
    console.log(str.length); //3
    //为什么呢?在进行获取或者赋值属性,str会先封装成String对象，最后在还原回来。
    //str.1的时候是对象，但完后就变成基本类型了，再去输出str.t所以就不存在了。
##类型检测
####主要有typeof，instanceof，Object.prototype.toString，constructor，duck type
    typeof 100 number
    typeof true boolean
    typeof function function
    typeof undifined undifined
    typeof new Obejct() object
    typeof [1, 2] object
    typeof NaN number
    typeof null object 
    //应该返回null,但浏览器问题

    Object.prototype.toString.apply([]) [object Array]
    Object.prototype.toString.apply(undefined) [object Undefined]
    Object.prototype.toString.apply(null) [object Null]
    Object.prototype.toString.apply(function(){}) [object Function]
    //null,undefined在IE678会返回[obejct object]    
