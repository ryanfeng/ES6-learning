模拟重载：
    function() {
        var args = arguments;
        if (typeof args[0] === 'object' && args[0]) {
            if (args[0].name) {
                this.name = args[0].name;
            }
            if (args[0].age) {
                this.age = args[0].age;
            }
        } else {
           if (args[0]) {
                this.name = args[0];
           }
           if (args[1]) {
                this.age = args[1];
           }
        }
    }

    Person.prototype.toString = function() {
        return 'name=' + this.name + ", age=" + this.age;
    }

    var p = new Person('ryan', 22);
    p.toString();

    var p1 = new Person({name: 'ryan', age: 22});
    p1.toString();

调用父类方法：
    function Person(name) {
        this.name = name;
    }

    Person.prototype.init = function() {
        ....
    }

    function Student(name ,className) {
        Person.apply(this, name);
        this.className = className;
    }

    Student.prototype.init = function() {
        Person.prototype.init.apply(this, arguments);
    }

链式调用：
    function ClassManager() {
        ...
    }
    ClassManager.prototype.addClass = function(str) {
        console.log("class:" + str + "added");
        return this;
    }
    var manager = new ClassManager();
    manager.addClass('classA').addClass("classB"),addClass("classC");

抽象类：

模块化：
    var moduleA;
    moduleA = function() {
        var prop = 1;
        function func() {}
        return {
            func： func,
            prop: prop
        }
    }();

    moduleA = new function() {
        var prop = 1;
        function func() {}
        this.prop = prop;
        this.func = func;
    }

