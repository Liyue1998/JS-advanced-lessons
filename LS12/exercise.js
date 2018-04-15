/**
 * Created by Liyue on 2018/4/15.
 */

 //闭包引入案例  
 //有什么方法能读写函数内部的局部变量
function f1(){
	var x=1;
	function f2(){
		return x++;
	}
	return f2();
}
var f3=f1();
console.log(f3);  //1
console.log(f3);  //1

function f1(){
	var x=1;
	function f2(){
		return x++;
	}
	return f2;
}
var f3=f1();
console.log(f3());  //1
console.log(f3());  //2

//闭包是由函数和与其相关的引用环境组合而成的实体
//闭包是词法作用域中的函数和其相关变量的包裹体
function createInc(startValue){
	return function(step){
		startValue+=step;
		return startValue;
	}
}
var inc=createInc(5);
console.log(inc(1));
console.log(inc(2));  //前两次输出中，startValue常驻内存
inc=createInc(5);
console.log(inc(1));
//6
//8  //因为执行console.log(inc(1));后，startValue没有被释放，值变为6,6+2=8
//6  //inc=createInc(5);重新创建了一个闭包


//若一个函数离开了它被创建时的作用域，它还是会与这个作用域的变量相关联
//闭包是一个函数外加上该函数创建时所建立的作用域
function foo(){
	var i=0;
	function bar(){
		console.log(++i);
	}
	return bar;
}
var a=foo();
var b=foo();
a();  //1  函数bar和其相关词法上下文中的变量i，构成了一个闭包
a();  //2  返回的函数bar，依然能够访问到变量i（
b();  //1  
b();  //2
b();  //3  上述例子可说明a和b是两个不同的闭包


//闭包的常见形式
//①以函数对象形式返回
var tmp=100;
function foo(x){
	var tmp=3;
	return function(y){
		console.log(x+y+(++tmp));
	}
}
var fee=foo(2);  //fee是函数对象 f(y){...}
fee(10);  //x=2,y=10,++tmp=4 结果16
fee(10);  //x=2,y=10,++tmp=5 结果17
fee(10);  //x=2,y=10,++tmp=6 结果18


function foo(x){
	var tmp=3;
	return function(y){
		x.count=x.count?x.count+1:1;
		console.log(x+y+tmp,x.count);
	}
}
var age=new Number(2);  //age是数字对象，值为2
var bar=foo(age);  //bar=foo(2),bar是函数对象 f(y){...}
bar(10);  //x=2,y=10,tmp=3,开始x.count未定义 结果为15,1
bar(10);  //x=2,y=10,tmp=3,x.count=2 结果为15,2
bar(10);  //x=2,y=10,tmp=3,x.count=3 结果为15,3


//②作为对象的方法返回
function counter(){
	var n=0;
	return {
		count:function(){return ++n;},
		reset:function(){n=0;return n;}
	}
}
var c=counter(),d=counter();
console.log(c.count());  //1
console.log(d.count());  //1
console.log(c.reset());  //0
console.log(c.count());  //1
console.log(d.count());  //2
//c和d为两个不同的闭包


//闭包的作用及常用场景
//作用：可通过闭包来访问隐藏在函数作用域内的局部变量
function f1(){
	var n=999;
	function f2(){
		console.log(++n);
	}
	return f2;
}
var f=f1();  //f是函数对象 f f2(){...}
f();  //f()即为调用f2 结果为1000
f();  //1001
//该实例中，无法在f1函数外直接得到变量n的值，可以通过闭包间接的在f1函数外访问和修改n


//闭包的实际应用案例
//单例模式实例：因为闭包，所以a常驻内存，始终存在
function fn(){
	var a;
	return function(){
		return a || (a=document.body.appendChild(document.createElement('div')));
	}
};
var f=fn();  //f是函数对象
f();  //调用f函数，return(a || ...)
function closureExample(objID,text,timedelay){
	setTimeout(function(){
		console.log(objID,text);
	},timedelay);
}  //定时修改DOM节点案例，1秒后执行，仍能访问到objID
closureExample("myDiv","Closure is Create",1000);
//undefined
//myDiv Closure is Create  (1秒后被执行)