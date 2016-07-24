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

