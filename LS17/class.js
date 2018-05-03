/**
 * Created by Liyue on 2018/4/28.
 * 深入理解JS的继承方式
 */

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`Part1 JS对象-对象原型继承
var superObj={
	x:1,
	y:2
};
var subObj_First=Object.create(superObj);
var subObj_Second=Object.create(superObj);
subObj_First.__proto__.x=5;
console.log(subObj_Second.x);
//5

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~重点理解
function Person(name,age){
	this.name=name;
	this.age=age;
};
Person.prototype.showName=function(){
	console.log(this.name);
};
function Student(name,age,id){
	Person.call(this,name,id);
	this.id=id;
}
Student.prototype.__proto__=Person.prototype;
var s1=new Student('xxx',22,2017001);
var s2=new Student('www',23,2017002);
//Person.call(this,name,id);和var s1=new Student('xxx',22,2017001);
//等价于this.name=name;  this.age=age;
//因为在Person.call(this,name,id);中  this指向的是调用的主体s1
//Person.call(this,name,id);的含义是this(s1)调用Person(把Person当做普通函数来调用)

//Student.prototype.__proto__=Person.prototype;
//s1的原型的原型指向了Person的原型

Person.__proto__===Function.prototype;
true

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function Person(name,age){
    this.name = name;
    this.age = age;
};
Person.prototype.showName = function(){
    console.log(this.name);
};
function Student(name,age,id){
    Person.call(this,name,age);
    this.id = id;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
var s1 = new Student("xxx",22,2017001);
var s2 = new Student("www",23,2017002);
//在此例中，
s1.__proto__.__proto__===Person.prototype;
true



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//一、
function Person(name,age){
    this.name = name;
    this.age = age;
};
Person.prototype.showName = function(){
    console.log(this.name);
};
function Student(name,age,id){
    Person.call(this,name,age);
    this.id = id;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
/*
ƒ Student(name,age,id){
    Person.call(this,name,age);
    this.id = id;
}
*/

//二、
function Person(name,age){
    this.name = name;
    this.age = age;
};
Person.prototype.showName = function(){
    console.log(this.name);
};
function Student(name,age,id){
    Person.call(this,name,age);
    this.id = id;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype;
//Person {}

//一、和二、的区别： 语句Student.prototype.constructor = Student;
//Student.prototype.constructor = Student;使指向正确
//如果不加这句，Student.prototype会指非

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Part3 JS继承补充部分
//静态方法是构造器函数对象（类）的属性，原型方法是实例化对象（对象）的原型的属性



//静态方法实例与原型方法实例
var BaseClass = function() {};
BaseClass.prototype.f2 = function () {
    console.log("This is a prototype method ");
};
BaseClass.f1 = function(){   //定义静态方法
    console.log("This is a static method ");
};
BaseClass.f1();//This is a static method
var instance1 = new BaseClass();
instance1.f2();   //This is a prototype method



//思考下述案例 实例方法 原型方法
var BaseClass = function() {};
BaseClass.prototype.method1 = function(){
    console.log("1 This is a method in Base.prototype");
};
var instance1 = new BaseClass();
instance1.method1();   //结果为 1 This is a method in Base.prototype

instance1.method1 = function(){
    console.log("2 This is a method in instance1");
};
instance1.method1();//访问的哪一个method1？ //2 This is a method in instance1



//再谈对象原型的constructor属性
// 1 确定对象的构造函数名
function Foo() {}
var f = new Foo();
console.log(f.constructor.name);  //Foo
//constructor属性：通过构造函数实例化出的对象的构造函数

// 2 创建相似对象







//对象的公有属性、私有属性（回顾闭包）
function A(id) {
    this.publicId = id;
    var privateId = 456;
    this.getId = function () {
        console.log(this.publicId,privateId);
    };
}
var a = new A(123);
console.log(a.publicId);  //123
console.log(a.privateId);  //undefined 私有属性不能直接访问
a.getId();  //123  456   通过构造函数内部的getId方法可以获得私有属性 