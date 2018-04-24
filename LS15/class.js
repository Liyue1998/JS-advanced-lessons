/**
 * Created by Liyue on 2018/4/23.
 */

 //回顾
 //对象的三种创建方法~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 //第一种
 var obj1={
	name:"Jack",
	sex:'女'
};
console.log(obj1);  //输出该对象{name: "Jack", sex: "女"}
//第二种

var obj2=Object.create(obj1);
obj2.age=20;
console.log(obj2);  //{age: 20}
//第三种
//obj3的类型是Person   
//Person充当了类的角色
function Person(weight,height){  //先写构造函数
	this.weight=weight;
	this.height=height;
}
var obj3=new Person(40,160);     //通过实例化创建出一个对象
console.log(obj3);  //Person {weight: 40, height: 160}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


function Person(name){  
	this.name=name;
}
var p1=new Person("abc");
var p2=new Person("def");
//开辟出两块不同的内存，分别存储p1,p2
p1 instanceof Person;  //true  //p1是Person类型


var empty={};
var obj2=Object.create(
	empty,{x:{value:1},y:{value:2,enumerable:true}
});
console.log(obj2);
//{y: 2, x: 1}
//因为y是可枚举的，默认将可枚举的变量在前边输出





//新内容 PPT15   JS对象及继承方式综述
var a={};
a.__proto__;
//{constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …
a.__proto__ === Object.prototype;  
true

var b=new Object();
b.__proto__ === Object.prototype;  
true
/* 
创建空对象a和空对象b的两种创建方式是类似的（针对空对象来说）
*/

b.__proto__.__proto__;
null
Object.prototype.__proto__;
null
// !!! Object.prototype.__proto__; 原型是null
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~·


//JS对象的原型链
var obj1={x:1};
var obj2=Object.create(obj1);
obj2.y=2;
var obj3=Object.create(obj1);
obj3.y=3;
console.log(obj1,obj2,obj3);
//{x: 1} {y: 2} {y: 3}

//obj2和obj3共享同一个原型obj1
console.log(obj2.x);   //1  //obj2自身找不到x，就去原型链上找

console.log(obj2.__proto__);  //{x: 1}  //即obj1

//通过obj2更改其原型属性：
obj2.__proto__.x=5;
console.log(obj2.x);  //此时obj2.x的值成为5

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var proObj = {
    z:3
};

var obj = Object.create(proObj);
obj.x = 1;
obj.y = 2;

console.log(obj.x);//1
console.log(obj.y);//2
console.log(obj.z);//3

console.log("z" in obj);//true
console.log(obj.hasOwnProperty("z"));//false


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//JS对象的原型链-自有属性和继承属性的操作
obj.z = 5;

console.log(obj.hasOwnProperty("z"));
console.log(obj.z);
console.log(proObj.z);

obj.z = 8;
console.log(obj.z);

delete obj.z;//true
console.log(obj.z);

delete obj.z;//true
console.log(obj.z);//still 3

//如何删除原型上的属性
delete  obj.__proto__.z;//或者delete proObj.z;
console.log(obj.z);//此时彻底没有z了

//注意：hasOwnProperty是原型方法
//调用的主体为obj,先在自身上找该方法，找不到的话去原型链上去找
//区别与Object.keys(obj)这种静态方法

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


//~~~~~~~~~~~~~Part3 基于构造函数实现的原型继承

//构造函数充当类的角色
//ES5中没有类的概念

function Person(name,age){ 
	this.name=name;
	this.age=age;
}
Person.prototype.sayHi=function(){
	console.log(this.name,this.age);
}
var p=new Person("Mike",23);
p.sayHi();
//Mike 23

p.__proto__ === Person.prototype;
true
//p的原型对象指向的是Person的prototype

Person.__proto__ === Function.prototype;
true
//空对象等效于new Object
//空函数等效于new Function

Person.__proto__.__proto__ === Object.prototype;
true 

Person.__proto__.__proto__.__proto__ === null;  //Object.prototype.__proto__ === null;
true



//Function.__proto__ 意为Function的原型 *******************************************************************
//constructor
function Person(name,age){ 
	this.name=name;
	this.age=age;
}
Person.prototype.sayHi=function(){
	console.log(this.name,this.age);
}
var p=new Person("Mike",23);
p.constructor;
/*
ƒ Person(name,age){ 
	this.name=name;
	this.age=age;
}
*/

p.hasOwnProperty('constructor');
false
'constructor' in p;
true
//以上四行说明：p自身没有constructor属性，而是定义在原型上。 以下代码验证：
p.__proto__.hasOwnProperty('constructor');
true


//拓展 Array类比Fucntion
var arr=new Array();
arr.__proto__ === Array.prototype;
true
arr.__proto__.__proto__ === Object.prototype;
true
arr.__proto__.__proto__.__proto__ === null;
true




////////////////////
function MyObj() { }
MyObj.prototype.z = 3;

var obj = new MyObj();
obj.x = 1;
obj.y = 2;

console.log(obj.x);//1
console.log(obj.y);//2
console.log(obj.z);//3

console.log("z" in obj);//true
console.log(obj.hasOwnProperty("z"));//false

//////////////////////
function MyObj() { }
MyObj.__proto__.z = 3;

var obj = new MyObj();
obj.x = 1;
obj.y = 2;

console.log(obj.x);//1
console.log(obj.y);//2
console.log(obj.z);//undefined

console.log("z" in obj);//false
console.log(obj.hasOwnProperty("z"));//false
