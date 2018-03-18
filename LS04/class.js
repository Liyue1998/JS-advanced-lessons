arguments  //得到隐藏的实参（实参个数大于形参个数时）
function f(a){
	console.log(a);
	console.log(arguments[1]);
	console.log(arguments[2]);
}
f(1,2,3);
//1
//2
//3

function foo(){
	var a=b=3;  //var a=3;  b=3;
}
foo();
console.log("b:",b);//不报错。b定义到全局对象上的一个属性上：b==window.b  true
console.log("a:",a);//报错 a是局部变量，无法访问到
//var a=3;  b=3;

//ES5中的块（ES5中没有块作用域）

if(false){
	var b=30;
}
console.log("输出："+b);  //输出：undefined

//关于严格模式
function foo(){
	console.log("this:",this);
}
foo();
//this: Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}
//非严格模式下  this指向的是window对象
function foo(){
	'use strict'
	console.log(this);
}
foo();
//undefined
//严格模式下  this指向的是undefined


//函数功能：判断是否为严格模式
"use strict"
function isStrictMode(){
	if(this==undefined)
		return true;
	else{
		return false;
	}
}
isStrictMode();
true

function isStrictMode(){
	if(this==undefined)
		return true;
	else{
		return false;
	}
}
isStrictMode();
false



//switch语句  
var i = 65;
switch(new Boolean(true)){
    case i>=60:
        alert('及格');
        break;
    case i<60:
        alert('不及格');
        break;
    default:
        alert('default');
}//default
//(new Boolean(true)返回的是true或false,实际返回了false，直接执行default语句

var i = 65;
switch(new Boolean(true)){
    case (new Boolean(i>=60)):
        alert('及格');
        break;
    case (new Boolean(i<60)):
        alert('不及格');
        break;
    default:
        alert('default');
}//default
//引用类型，指向的不是堆区中同一块内存。new Boolean(true)===new Boolean(true) 判等不成功
//swith就是先计算括号里表达式的值，然后逐个与后面的case标签比较，
//如果找到匹配的，就从那个case标签开始向下执行，直到switch语句结束或者遇到break以及其他跳转语句。


