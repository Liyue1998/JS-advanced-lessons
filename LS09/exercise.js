/**
 * Created by Liyue on 2018/4/4.
 */

 //JS 词法作用域
 var name = "Jack";
function echo() {
    console.log(name);
}
echo();   //Jack

//词法作用域 与调用形式无关 实例一
var name = "Jack";
function echo() {
    console.log(name);
}
function foo() {
    var name = "Bill";
    echo();
}
foo();   //Jack

//词法作用域 与调用形式无关 实例一改动
var name = "Jack";
function echo() {
    console.log(name);
}
function foo() {
    var name = "Bill";
    function fee(){
        var name = "Lucy";
        echo();
    }
    fee();
}
foo();   //Jack

//通过new Function实例化的函数对象，不一定遵从静态词法作用域
var scope = "g";
function foo(){
	var scope = "l";
	return new Function("console.log(scope);")
}
foo()();   //g


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


//使用IIFE来解决上述问题
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



// LS10/demo04_2.js   调用栈 Call Stack
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



console.log("全局上下文-start");
var x = "家中环境-";
function goToStore_A(){
    console.log("goToStore_A 上下文-start");
    var y = "文具店A环境-";
    goToBank_C();
    console.log("goToStore_A 上下文-end");
}
function goToStore_B(){
    console.log("goToStore_B 上下文-start");
    var y = "文具店B环境-";
    goToBank_C();
    console.log("goToStore_B 上下文-end");
}
function goToBank_C(){
    console.log("goToBank_C 上下文-start");
    var z = "银行C环境-";
    console.log("goToBank_C 上下文-end");
}
function goToBank_D(){
    console.log("goToBank_D 上下文-start");
    var z = "银行D环境-";
    console.log("goToBank_D 上下文-end");
}
goToStore_A();
console.log("全局上下文-end");
//全局上下文-start
//goToStore_A 上下文-start
//goToBank_C 上下文-start
//goToBank_C 上下文-end
//goToStore_A 上下文-end
//全局上下文-end


// 使用Chorme的 Watch窗口（追踪x，y，z）和
// Scope窗体（观察作用域链的变化）
console.log("全局上下文-start");
var x = "家中环境-";
function goToStore_A(){
    console.log("goToStore_A 上下文-start");//设置断点
    var y = "文具店A环境-";
    goToBank_C();//设置断点
    // goToBank_D();//设置断点
    console.log("goToStore_A 上下文-end");//设置断点
}
function goToStore_B(){
    console.log("goToStore_B 上下文-start");//设置断点
    var y = "文具店B环境-";
    goToBank_C();//设置断点
    // goToBank_D();//设置断点
    console.log("goToStore_B 上下文-end");//设置断点
}
function goToBank_C(){
    console.log("goToBank_C 上下文-start");//设置断点
    var z = "银行C环境-";
    //console.log(x+y+z);
    console.log("goToBank_C 上下文-end");//设置断点
}
function goToBank_D(){
    console.log("goToBank_D 上下文-start");//设置断点
    var z = "银行D环境-";
    //console.log(x+y+z);
    console.log("goToBank_D 上下文-end");//设置断点
}
goToStore_A();//设置断点
// goToStore_B();//设置断点
console.log("全局上下文-end");//设置断点