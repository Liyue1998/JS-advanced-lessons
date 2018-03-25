/**
 * Created by Liyue on 2018/3/25.
 */

 //操作数非布尔类型，&&短路原则
 //1.当逻辑运算符&&和||两侧的操作数不是布尔类型时
 //2.首先将左操作数转换成布尔类型
 //3.对转换后的左操作数进行逻辑判断（true or false）
 //4.对于&&，转换后的左操作数若为true，则直接返回原始右操作数，若为false则直接返回原始左操作数
console.log(2&&4);  //4
console.log(0&&4);  //0
console.log({x:2}&&{name:"Jack"});  //{name:"jack"}
console.log(null&&"hello");  //注意！！！  null
console.log({}&&"world");  //world

//操作数非布尔类型，||短路原则
//1.当逻辑运算符&&和||两侧的操作数不是布尔类型时
//2.首先将左操作数转换成布尔类型
//3.对转换后的左操作数进行逻辑判断（true or false）
//4.对于||，转换后的左操作数若为true，则直接返回原始左操作数，若为false则直接返回原始右操作数
console.log(2||4);  //2
console.log(0||4);  //4
console.log({x:2}||{name:"Jack"});  //{x:2}
console.log(null||"hello");  //注意！！！  hello
console.log({}||"world");  //{}
//总结：null按false看待

//通过&&和||的组合实现如下功能，注：小括号优先级最高*（避免了使用if...else...的繁杂语句）
console.log((score>90&&"优")||(score>75&&"良")||(score>60&&"及格")||"不及格");
/*
var score = 76;
if(score>90){
    console.log("优");
}else if(score>75){
    console.log("良");
}else if(score>60){
    console.log("及格");
}else{
    console.log("不及格");
}
*/


//根据短路原则，可写出下述函数
var sum = function(a,b,c){
    b = b||4;
    c = c||5;
    return a+b+c;
};
console.log(sum(1,2,3));
console.log(sum(1,2));
console.log(sum(1));
// console.log(sum(1,0,0));  //输出10结果有误 应为0

//优化改造版本
var sum = function(a,b,c){
    if(b!=false){b = b||4;}//(b!=false)&&(b=b||4);
    if(c!=false){c = c||5;}//(c!=false)&&(c=c||5);
    return a+b+c;
};
console.log(sum(1,2,3));
console.log(sum(1,2));
console.log(sum(1));
console.log(sum(1,0,0));  //输出结果正确 为1


//略讲：非匿名函数便于调用栈追踪 测试使用匿名和非匿名函数的区别
var foo = function max(a,b){
    console.trace();
    return console.log(a>b?a:b);
};
foo(2,3);
/*console.trace 功能：追踪 标记max函数
max @ VM379:2
(anonymous) @ VM379:5
*/
//3

var foo = function max(a,b){
  
    return console.log(a>b?a:b);
};
foo(2,3);  //没有console.trace();语句时，只输出3


//函数定义 Function构造函数方式
var max = new Function("a","b","return a>b?a:b");
max(2,3);


//普通函数直接调用
function test1() {
    console.log("this is",this);
}
test1();//window

//思考嵌套的情况下
function test2() {
    function test3(){
        console.log("this is",this);
    }
    test3();
}
test2();//window

//对象方法调用
var obj = {
    name:"obj",
    x:23,
    test:function(){
        console.log(this.x,this);
    }
};
obj.test();//调用对象的方法  23 {name: "obj", x: 23, test: ƒ}
//给obj动态添加方法
var sayHi = function () {
    console.log("Hi，i'm",this.name);
};
obj.sayHi = sayHi;//给对象添加方法
obj.sayHi();  //Hi，i'm obj


//间接调用 实例一 间接调用的对象要和原对象之间，在数据结构上有对应的相似处，以便不影响调用效果
objA = {name:"AA"};
objB = {name:"BB"};
objA.foo = function(){
    console.log(this.name);
};
objA.foo();  //AA
objA.foo.call(objB);  //BB
objA.foo.apply(objB);  //BB  .apply功能和.call相似
 
//间接调用 实例二 移花接木 吸星大法
var fish = {
    name:"fish",
    swim:function (m,n) {
        console.log("i'm "+this.name+" i cam swim ___",m,n);
    }
};
var bird = {
    name:"polly",
    fly:function(m,n){
        console.log("i'm:"+this.name+" i can fly ___",m,n);
    }
};
var me = {
    name:"ABC"
};
bird.fly(5,6);  //i'm polly i can fly 5 6
fish.swim.call(me,3,4);  //i'm ABC i can swim 3 4 
bird.fly.call(me,7,8);  //i'm ABC i can fly 7 8
//swim(1,2);与swim.call(null,1,2);相同


//很多方法都可以通过间接调用的方式来调用，比如很多原型的方法
function test() {
    console.log(Array.prototype.slice.call(arguments));
}
test(1,2,3,"4",5);  
//(5) [1, 2, 3, "4", 5]


//构造函数
function Person(name){
    this.name = name;
}
Person.prototype.sayHi = function(){
    console.log("Hi,i'm "+this.name);
};
var p1 = new Person("Jack");
p1.sayHi();//Hi,i'm Jack


function test() {
    console.log(arguments);
    console.log(arguments.length);
	console.log(typeof arguments);
	console.log(arguments instanceof Array);
	console.log(arguments instanceof Object);
    console.log(Array.prototype.slice.call(arguments));
    var s = "";
    for (var i = 0; i < arguments.length; i++) {
        s += arguments[i];
    }
    return s;
}
test("hello,", "world!");
//Arguments(2) ["hello,", "world!", callee: ƒ, Symbol(Symbol.iterator): ƒ]
//2
//object
//false   问题：为什么arguments不是数组？类数组？什么是类数组？
//true
//(2) ["hello,", "world!"]
//"hello,world!"



