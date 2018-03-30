/**
 * Created by Liyue on 2018/3/30.
 */

 //函数作为返回值输出
var x=12;
var obj = {
    x:34,
    fun2:function(){
        console.log(this.x,this);
    }
};
var fun1 = function () {
    return function fun2() {
        return this.x;//若改为 return this;
    }
};
obj.fun3 = fun1;
obj.fun4 = fun1();
console.log(obj.fun3());//ƒ fun2() {return this.x;//若改为 return this;}
console.log(obj.fun3()());//12
console.log(obj.fun4());//34
//已知obj.fun3=fun1;所以调用obj.fun3即是调用fun1,而fun1的功能是return一个返回值，即函数fun2
//obj.fun3()是函数fun2,所以obj.fun3()()即是调用fun2，即fun2()，所以返回值是12.因为此处调用主体是全局的fun1?
//obj.fun4=fun1(),所以obj.fun4()即为fun1()(),易知fun1()是函数fun2,所以fun1()()即为调用fun2,所以值为34.因为？


//思考如下代码输出什么 值类型
console.log(a,b);//输出什么
var b = 23;
console.log(a,b);//输出什么
var a = b;
console.log(a,b);//输出什么
//等价于
var b,a;
console.log(a,b);  //undefined,undefiend
b=23;
console.log(a,b);  //undefined,23
a=b;
console.log(a,b);  //23,23


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
AA();  //AA_1
AA=function(){
	console.log("AA_2");
};
AA();  //AA_2


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
