/**
 * Created by Liyue on 2018/3/29.
 */
//思考如下代码输出什么 值类型
console.log(a,b);//输出什么
var b = 23;
console.log(a,b);//输出什么
var a = b;
console.log(a,b);//输出什么
//等价于什么


foo();
var foo = function(){
    console.log("foo");
};
foo();
//等价于
var foo;
foo();
foo=function(){
    console.log("foo");
};
foo();


AA();
function AA(){
    console.log("AA_1");
}
var AA = function AA(){
    console.log("AA_2");
};
AA();
//等价于
function AA(){
    console.log("AA_1");
}
var AA;

AA();
AA = function AA(){
    console.log("AA_2");
};
AA();


//demo09.js~~~~~~~~~~~~~~~~~~~~~
//全局变量与局部变量
var x="outside f1";
var f1=function(){
	console.log(x);
}
f1();  //outside f1
console.log(x);  //outside f1


var x="outside f1";
var f1=function(){
	var x="inside f1";
	console.log(x);
}
f1();  //inside f1
console.log(x);  //outside f1  


//预解析与作用域
var name = "Jack";
function echo() {
    console.log(name);
}
function foo() {
    var name = "Bill";
    echo();
}
foo();  //Jack
//找到函数声明的地方，往上找name，此时echo()访问不到foo中的name,而访问到全局的name


//ES5中无块作用域
if(true){
    var z = 23;
}
console.log(z);
//等价于
var z;
if(true){
	z=23;
}
console.log(z);  //23


if(false){
	var z=24;
}
console.log(z);  //undefined
//等价于
var z;
if(false){
	z=24;
}
console.log(z);  //undefined


//demo10.js~~~~~~~~~~~~~~~~~~~
if(true){
    var i = 0;
}
function foo(){
	console.log("j:",j);  //j: undefined
	var j=10;
	console.log("j:",j);  //j: 10
}
foo();
console.log("i:",i);//0
console.log("j:",j);//报错
//等价于
var i;
if(true){
    i=0;
}
function foo(){
	var j;
	console.log("j:",j);  //j: undefined
	j=10;
	console.log("j:",j);  //j: 10
}
foo();
console.log("i:",i);//0  因为i是全局变量（ES5没有块作用域）
console.log("j:",j);//报错  因为j是函数体中的变量，全局下访问不到


