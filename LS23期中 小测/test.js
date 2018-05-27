/**
 * Created by Liyue on 2018/5/21.
 */

 1.   数据类型的判断
console.log(typeof Number); //
console.log(typeof String); //
console.log(typeof Boolean); //
console.log(typeof Object); //
console.log(typeof Array); //
console.log(typeof Function); //
console.log(typeof RegExp); //
console.log(typeof Error); //
console.log(typeof Date); //以上都是 function.都可以用new实例化对象
                          //都是可以看做构造函数的

console.log(typeof Math); //object
console.log(typeof JSON); //object
                          //不能实例化对象，非构造器
Math instanceof Object;     true
Math instanceof Function;   false
JSON instanceof Function;   false

2.  "=="与"==="
var a={x:1,y:2};
var b={x:1,y:2};
a===b; false  //类型相同,但不指向同一块内存
a==b; false   //引用类型，看是否指向同一块内存
a.x===b.x; true  //虽然在堆区，所在内存不同，
                 //但都是基本数据类型，按值比较
a.x==b.x; true  //虽然在堆区，所在内存不同
                //但都是基本数据类型，按值比较


3.   逻辑运算符&&  ||的短路原则
//前提：逻辑运算符&&和||两侧操作数不是Boolean类型时
//&&
首先将原始左操作数转化成Boolean型，
  若转化后的Boolean型为false,则直接返回判断的结果false
  若转化后的Boolean型为true，则返回原始右操作数
      若原始右操作数是可以进行判断的表达式，则返回判断的结果，true或false
      //例 (5>1)&&(5>2)  返回true
      否则（即原始右操作数是基本数据类型或一个对象）返回原始右操作数本身
      //例1 (5>1)&&null  返回null
      //例2 (5>1)&&undefined  返回undefined
      //例3 (5>1)&&({})  返回{}

//||
首先将原始左操作数转化成Boolean型，
  若转化后的Boolean型为true，则直接返回判断的结果true
  若转化后的Boolean型为false，则返回原始右操作数
      若原始右操作数是可以进行判断的表达式，则返回判断的结果，true或false
      //例 (5<1)||(3>2)  返回true
      否则（即原始右操作数为基本数据类型或一个对象）返回原始右操作数本身
      //例1 (5<1)||null  返回null
      //例2 (5<1)||undefined  返回undefined
      //例3 (5<1)||({})  返回{}

4.

5.  预解析
var a=10;
function foo(){
	console.log(a);
	var a=2;
	console.log(a);
}
foo();
//undefined
//2
//上述代码等价于:
var a=10;
function foo(){
    var a;
	console.log(a);
	a=2;
	console.log(a);
}
foo();

//另外，若是函数体内没有定义a，则会输出全局的a
var a=10;
function foo(){
	console.log(a);
}
foo();
//10


6.  闭包
var tmp=10;
function foo(x){
	var tmp=3;
	return function(y){
		console.log(x+y+(++tmp));
	}
}
var fee=foo(2);
fee(10);  //16
fee(10);  //17
fee(10);  //18


//闭包引入案例(思考下述两个案例的区别,那个x始终未被释放) 答：第二个里边的x
1.
function f1(){
	var x = 1;
	function f2(){
		return x++;
	}
	return f2();
}
var f3 = f1();
//观察f1中的x变量
console.log(f3);//1
console.log(f3);//1
2.
function f1(){
	var x = 1;
	function f2(){
		return x++;
	}
	return f2;
}
var f3 = f1();
//观察f1中的x变量
console.log(f3());//1
console.log(f3());//2


//闭包的概念
//例一
function createInc(startValue){
	return function(step){
		startValue+=step;
		return startValue;
	}
}
var inc = createInc(5);
console.log(inc(1));//6
console.log(inc(2));//8
inc = createInc(5);  //相当于重新创建了一个闭包
console.log(inc(1));//6
//例二
function createInc(startValue){
	return function(step){
		startValue+=step;
		return startValue;
	}
}
var inc = createInc(5);  //创建了一个闭包
console.log(inc(1));//6
console.log(inc(2));//8
var inc2 = createInc(5);  //又创建了一个不同的闭包
console.log(inc(1));//9  //属于第一个闭包
console.log(inc2(1));//6


