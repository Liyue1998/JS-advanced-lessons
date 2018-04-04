/**
 * Created by Liyue on 2018/4/2.
 */

 //静态词法作用域补充部分
var scope="global";
function checkScope(){
	var scope="local";
	return function(){
		return scope;
	};
}
console.log(checkScope()());
//local

var scope="global";
function checkScope(){
	var scope="local";
	return new Function("return scope");
}
console.log(checkScope()());
//global


//关于块作用域
var userId=123;
document.onclick=function(){
	console.log(userId);
};
//...
//...
var a=2,b=3;
if(a<b){
	var userId=234;
}
//点击后 234

var userId=123;
document.onclick=function(){
	console.log(userId);
};
//...
//...
(function(){
var a=2,b=3;
if(a<b){
	var userId=234;
}}());
//点击后 123


// 理解执行上下文（通俗的例子）


console.log("全局上下文-start");
var x = 1;
function foo(){
    console.log("foo上下文-start");//设置断点
    var y = 2;
    function bar(){
        console.log("bar上下文-start");//设置断点
        var z = 3;
        console.log(x+y+z);
        console.log("bar上下文-end");//设置断点
    }
    bar();
    console.log("foo上下文-end");//设置断点
}
foo();//设置断点
console.log("全局上下文-end");//设置断点

//全局上下文-start
//foo上下文-start
//bar上下文-start
//6
//bar上下文-end
//foo上下文-end
//全局上下文-end


