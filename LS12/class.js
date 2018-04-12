/**
 * Created by Liyue on 2018/4/12.
 */

function f1(){
	var x=1;
	function f2(){
		return x++;
	}
	return f2;
}
var f3=f1();
console.log(f3());
console.log(f3());
console.log(f3());
console.log(f3());
//1
//2
//3
//4

//闭包的概念
function createInc(startValue){
	return function(step){
		startValue+=step;
		return startValue;
	}
}
var inc=createInc(5);
console.log(inc(1));
console.log(inc(2));
console.log(inc(5));
console.log(inc(1));
var inc2=createInc(5);
console.log(inc1(1));
console.log(inc2(1));
//6
//8
//13
//14
//6
//7


var tmp=100;
function foo(x){
	var tmp=3;
	return function(y){
		console.log(x+y+(++tmp));
	}
}
var fee=foo(2);
fee(10);
fee(10);
fee(10);
//16
//17
//18


var tmp=100;
function foo(x){
	//var tmp=3;
	return function(y){
		console.log(x+y+(++tmp));
	}
}
var fee=foo(2);
fee(10);
fee(10);
fee(10);
// 113
// 114
// 115

var db = (function() {
	// 创建一个隐藏的object, 这个object持有一些数据
	// 从外部是不能访问这个object的
		var data = {};
	// 创建一个函数, 这个函数提供一些访问data的数据的方法
		return function(key, val) {
			if (val === undefined) { return data[key] } // get
			else { return data[key] = val } // set
		};
	// 我们可以调用这个匿名方法
	// 返回这个内部函数，它形成了一个闭包
	})();
	
	db('x'); // 返回 undefined
	db('x', 1); // 设置data['x']为1
	db('x'); // 返回 1
	// 我们不能直接访问data这个object本身
	// 但是我们可以设置它的成员
