ʹ�÷�ʽ��
    [1, 2] instanceof Array === true;
    new Object() instanceof Array === false;
    [1, 2] instanceof new Object() === true;

�̳У�
    function Person() {}
    function Student() {}
    Student.prototype = new Person();//Object.create(Person.prototype);
    Student.prototype.constructor = Student;

    var stu = new Student();
    stu instanceof Student //true;

    var per = new Person();
    per instanceof Person //true

    per instanceof Student //false
    stu instanceof Person //true

