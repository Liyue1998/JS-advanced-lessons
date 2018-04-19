/**
 * Created by Liyue on 2018/4/16.
 */

var wb={
	name:'WB',
	age:20,
	sex:'女',
	hobby:"吃鸡",
	play:function(){
		console.log(this.name+"喜欢玩"+this.hobby);
	}
};
wb.play();
//WB喜欢玩吃鸡


//函数也是对象
var i = new String("str");          // String Object
var h = new Number(1);              // Number Object
var g = new Boolean(true);          // Boolean Object
var j = new Object({name : "Tom"}); // Object Object
var k = new Array([1, 2, 3, 4]);    // Array Object
var l = new Date();                 // Date Object
var m = new Error();
var n = new Function();
var o = new RegExp("\\d");
//以上都是对象，实例化出来的也都是对象。
//检测是否为对象，应该用instanceof Object
//构造函数是函数，也是对象：
String instanceof Function;  //true
String instanceof Object;    //true


console.log(Function instanceof Function);  //true
console.log(new Function() instanceof Function);  //true
console.log((new(new Function())) instanceof Function);  //false


// Part 2
// instanceof
console.log(Object instanceof Function);
console.log(Object instanceof Object);
console.log(Boolean instanceof Function);
console.log(Boolean instanceof Object);
console.log(String instanceof Function);
console.log(String instanceof Object);
console.log(Number instanceof Function);
console.log(Number instanceof Object);
console.log(Function instanceof Function);
console.log(Function instanceof Object);
console.log(Array instanceof Function);
console.log(Array instanceof Object);
console.log(Date instanceof Function);
console.log(Date instanceof Object);
console.log(Math instanceof Function);  //false
console.log(Math instanceof Object);
console.log(JSON instanceof Function);//false
console.log(JSON instanceof Object);


var o={
	_x:1.0,
	get x(){
		return this._x;	
	},
	set x(val){
		this._x=val;
	}
};
console.log(o.x);  //1  //调用get x()，那么该属性就变成一个只读属性
o.x=2;  
console.log(o.x,o._x);  //2 2
//访问和设置时，都不能加小括号

var o={
	_x:1.0,
	get x(){
		return this._x;	
	}
};
console.log(o.x);  //1
o.x=2;  //因为没有写设置属性，即set x(){},所以该语句是给对象o添加了一个数据属性，即x:2
o.x;  //1 //因为访问器属性优先级高于数据属性，所以o.x;会调用get x(){},返回的是_x:1.0  所以结果为1


//JS对象访问器属性实例
var p1={
	_name:"Jack",
	_age:23,
	set age(val){
		if(val>0 && val<150){
			this._age=val;
		}
		else{
			console.log("请设置正常值");
		}
	},
	get age(){
		return this._age;
	}
};
p1.age=178;  //请设置正常值  //调用set方法
console.log(p1.age);  //23  //调用get方法
//实现数据属性的间接访问，可实现数据的验证、过滤、运算等功能 


//拓展
var arr=[1,2,3];
arr.__proto__;  //[constructor: ƒ, concat: ƒ, pop: ƒ, push: ƒ, shift: ƒ, …]
arr.__proto__ === Array.prototype;  //true

//{}.__proto__ ===

({}).__proto__ === Array.prototype;  //false




var obj={
	x:12
};
obj.__proto__ === Object.prototype;  //true
//obj的原型是Object.prototype

var o2=Object.create(o);
o2.__proto__ === o;  //true

//////
var Person=function(name){
	this.name=name;
}
var p=new Person("abc");
p.__proto__ === Person.prototype;  //true

Person.__proto__===Function.prototype;  //true





var obj={
	x1:12,
	x2:23,
	x3:34
};
for(var i=1;i<4;i++){     //注意：此处i应从1开始
	console.log(obj["x"+i]);
}
//12
//23
//34


