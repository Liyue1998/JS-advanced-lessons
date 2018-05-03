/**
 * Created by Liyue on 2018/5/1.
 */

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Part1 JS对象-对象原型继承
//JavaScript的原型继承是对象-对象的继承
var superObj={
	x:1,
	y:2
};
var subObj_First=Object.create(superObj);
var subObj_Second=Object.create(superObj);
subObj_First.__proto__.x=5;   //若此行写为subObj_First.x=5;结果优势如何
console.log(subObj_Second.x);
//5
//改动后：
var superObj={
	x:1,
	y:2
};
var subObj_First=Object.create(superObj);
var subObj_Second=Object.create(superObj);
subObj_First.x=5;
console.log(subObj_Second.x);
//1


////通过构造函数创建的对象的原型共享问题
////以下写法实现了原型继承，但存在原型共享的问题
function Person(name){
	this.name=name;
};
Person.prototype.age=22;
Person.prototype.showName=function(){
	console.log(this.name);
};
function Student(id){
	this.id=id;
}
Student.prototype=new Person("Mike");
var s1=new Student(2017001);
var s2=new Student(2017002);
console.log(s1.name,s1.age,s1.id); //Mike 22 2017001
console.log(s2.name,s2.age,s2.id); //Mike 22 2017002

s1.__proto__.name="Jack";  
//s1.prototype即Student.prototype;即实例化对象new Person("Mike")
console.log(s2.name); //"Jack"
s2.__proto__.__proto__.age=99;
//即为Person.prototype;其中Person.prototype.age=22;
//Person.prototype.showName=f(){};
console.log(s2.age); //99  
//将22改成了99

//如何给每个student对象单独添加自身属性name和age
s1.name = "Bill";
s1.age = 22;
s2.name = "Colin";
s2.age = 23;


////通过Object.create创建的对象的原型共享问题
////以下写法实现了原型继承，但存在原型共享的问题
function Person(name){
	this.name = name;
}
Person.prototype.age = 22;
Person.prototype.showName = function(){console.log(this.name);};
   
var person1 = new Person("Mike");
var student1 = Object.create(person1,{id:{value:123,writable:true}});
var student2 = Object.create(person1,{id:{value:456,writable:true,enumerable:true}});
console.log(student1.name,student1.age,student1.id); //Mike 22 123
console.log(student2.name,student2.age,student2.id); //Mike 22 456
student1.__proto__.name = "Jack";
console.log(student2.name); //Jack
student2.__proto__.__proto__.age = 99;
console.log(student2.age); //99



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Part2 通过构造函数模拟类-类的继承
//JS实现继承的形式 一
function Person(name,age){
	this.name=name;
	this.age=age;
};
Person.prototype.showName=function(){
	console.log(this.name);
};
function Student(name,age,id){
	Person.call(this,name,age);
	this.id=id;
}
Student.prototype.__proto__=Person.prototype;
var s1=new Student("xxx",22,2017001);
var s2=new Student("www",23,2017002);
//推荐：将方法添加到对象的原型上（即构造函数的prototype上）便于共享，节省内存



//JS实现继承的形式 二
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
// console.log(Person.prototype.constructor); //
// console.log(Student.prototype.constructor); //
Student.prototype.constructor = Student;
var s1 = new Student("xxx",22,2017001);
var s2 = new Student("www",23,2017002);


//JS实现继承的形式 二
/*
关于constructor的解释：
当定义一个构造器（函数）时，
该构造器就会有prototype属性，prototype.constructor指向这个构造器本身：
function Student() {}
Student.prototype.constructor === Student; // true

当用该构造器创建Student实例时，就可以通过constructor判断是由Student构造的。
var bosn = new Student();
bosn.constructor === Student;// true

该constructor属性并不是bosn这个对象上的，而是从原型链（Student.prototype）上来的。
bosn.hasOwnProperty('constructor'); // false
*/
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
//出于继承目的修改了Student.prototype：
Student.prototype = Object.create(Person.prototype);
//这时，Student.prototype.constructor已经不是Student了（指飞了），
//而是Person,如下第二行：
console.log(Person.prototype.constructor); //Person
console.log(Student.prototype.constructor); //Person
//为了避免误解，手动重设Student.prototype.constructor属性，
//这样通过new Student创建的实例的constructor又可以正确取到Student了:
Student.prototype.constructor = Student;
var s1 = new Student("xxx",22,2017001);
var s2 = new Student("www",23,2017002);
s1.constructor===Student;  //true



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Part3 JS继承补充部分
//静态方法与原型方法的区别 
//静态方法是构造器函数对象（类）的方法，
//原型方法是实例化对象（对象）的原型的方法
var BaseClass=function(){};
BaseClass.prototype.f2=function(){
	console.log("This is a prototype method");
};
BaseClass.f1=function(){
	console.log("This is a static method");
};
BaseClass.f1(); //This is a static method
var instance1=new BaseClass();
instance1.f2(); //This is a prototype method
//This is a static method
//This is a prototype method


//思考下述案例 实例方法 原型方法
var BaseClass=function(){};
BaseClass.prototype.method1=function(){
	console.log("1 This is a method in Base.prototype");
};
var instance1=new BaseClass();
instance1.method1(); //访问的是原型上的method1
//输出结果为 1 This is a method in Base.prototype
instance1.method1=function(){
	console.log("2 This is a method in instance1");
};
instance1.method1(); //访问的是instance1本身的method1
//输出结果为 2 This is a method in instance1


// 思考下述实例
var BaseClass=function(){
	this.method1=function(){
		console.log('1 Defined by the "this" in the instance method');
	}
};
var instance1=new BaseClass();
instance1.method1=function(){
	console.log('2 Defined directly in the instance method');
};
BaseClass.prototype.method1=function(){
	console.log('3 Defined by the prototype instance method');
};
instance1.method1();  
//2 Defined directly in the instance method


function A(id){
	this.publicId=id;
	var privateId=456;
	this.getId=function(){
		console.log(this.publicId,privateId);
	};
}
var a=new A(123);
console.log(a.publicId); //123
//console.log(a.privateId);  //undefined  访问不到
a.getId(); //123 456
//涉及到访问私有属性时，需将间接访问私有变量的函数定义在构造函数中



//constructor属性的应用
// 1 确定对象的构造函数名
function Foo() {}
var f = new Foo();
console.log(f.constructor.name);  //Foo
/*
function Foo(){}
var f=new Foo();
console.log(f.constructor);
//ƒ Foo(){}
*/

// 2 创建相似对象
function Constr(name){
	this.name=name;
}
var x=new Constr("Jack");
var y=new x.constructor("Mike");
console.log(y);
console.log(y instanceof Constr);
//Constr {name: "Mike"}
//true
//x.constructor即为Constr
console.log(x.constructor===Constr);  //true

// 3 constructor可用于指定构造函数
function Person(area){
    this.type = 'person';
    this.area = area;
}
Person.prototype.sayArea = function(){
    console.log(this.area);
};
var Father = function(age){
    this.age = age;
};
Father.prototype = new Person('Beijin');
console.log(Person.prototype.constructor); //function person()
console.log(Father.prototype.constructor); //function person()
Father.prototype.constructor = Father;     //修正constructor指向
console.log(Father.prototype.constructor); //function father()
var one = new Father(25);
/*
    ƒ Person(area){
    this.type = 'person';
    this.area = area;
	}
    ƒ Person(area){
    this.type = 'person';
    this.area = area;
	}
	ƒ (age){
    this.age = age;
	}
*/