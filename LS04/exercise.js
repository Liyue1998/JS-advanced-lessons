/**
 * Created by Liyue on 2018/3/16.
 */

//2018.5.20增加
//switch后边小括号里的内容是干什么用的?
//是和case进行匹配，匹配的话才执行对应的语句. 和关系表达式的结果比较

//swith就是先计算括号里表达式的值，然后逐个与后面的case标签比较
//switch是全等比较

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
}     //default
//因为new Boolean(true)是对象，它指向一块内存，
//所以case条件中没有和它匹配上的，所以结果就是default了
//总结：
//switch后边的匹配条件是new一个对象时，应该都是执行的default语句



 // LS04/demo01.js
 //上一章数据类型知识点回顾 Part1~Part3
 //Part1
var a=[1,2,3];
var b=a;
console.log(a,b);
//[1, 2, 3]  [1, 2, 3]

b.pop();
console.log(a,b);
//[1, 2]  [1, 2]

//~~~~~~~~~~~~注意此处
b=[4,5,6];
console.log(a,b);
[1, 2]  [4, 5, 6]


//Part2
1.
function foo(x){
	x.push(4);
	x=[5,6,7];
	x.push(8);
	//console.log(x);
}
var a=[1,2,3];
foo(a);
console.log(a);
//[1, 2, 3, 4]
//解：把a作为函数参数传到函数中，首先执行x.push(),此时a=[1,2,3,4]。
//    再执行x=[5,6,7],此时是在函数中创建了一个新的数组x，x=[5,6,7]。
//    再执行x.push(8),此时是将8添加到新建数组x的末尾，x=[5,6,7,8]。
//    函数调用结束后，应输出a.
2.
function foo(x){
	x.push(4);
	x=[5,6,7];
	x.push(8);
	console.log(x);
}
var a=[1,2,3];
foo(a);
console.log(a);
//[5, 6, 7, 8]
//[1, 2, 3, 4]
//解：把a作为函数参数传递到函数中，首先执行a.push(4),此时a=[1,2,3,4]。
//   再执行x=[5,6,7],此时是在函数中创建了一个新的数组x,x=[5,6,7]。
//   再执行x.push(8),此时是将8添加到新建数组x的末尾，x=[5,6,7,8]。
//   再执行console.log(a),此时应输出数组x.
//   函数调用结束后，再输出a.


//Part3
1.
function foo(x){
	x.push(4);
	//console.log(x);
	x.length=0;
	x.push(5,6,7,8);
	//console.log(x);
}
var a=[1,2,3];
foo(a);
console.log(a);
//[5, 6, 7, 8]
//解：把a作为函数参数传递到函数中，首先执行x.push(4),此时a=[1,2,3,4]。
//    再执行x.length=0,此时数组a变为空，即a=[]。
//    再执行x.push(5,6,7,8),此时数组a=[5,6,7,8]。
//    调出函数后，执行console.log(a),输出[5,6,7,8]。

2.
function foo(x){
	x.push(4);
	console.log(x);
	x.length=0;
	x.push(5,6,7,8);
	console.log(x);
}
var a=[1,2,3];
foo(a);
console.log(a);
//[1, 2, 3, 4]
//[5, 6, 7, 8]
//[5, 6, 7, 8]
//解：把a作为函数参数传递给函数，先执行x.push(4),此时a=[1,2,3,4]。
//    控制台输出[1,2,3,4]。
//    再执行x.length=0,此时数组a变为空，即a=[]。
//    再执行x.push(5,6,7,8),此时a=[5,6,7,8]。
//    控制台输出[5,6,7,8]
//    跳出函数后，执行console.log(a),输出[5,6,7,8]。




//字面量
var obj={x:1,y:2};
var arr=[1,2,3,4,5];
console.log(obj);
console.log(arr);
//{x: 1, y: 2}
//[1, 2, 3, 4, 5]

//表达式与语句 表达式语句
var o = {x:1,y:2};
a>b;


// 存在二义性的语句，要避免有二义性的语句
1.
var max = function (x,y) {
    return x>y?x:y;
};
// 下述代码是对象还是语句块  答：语句块
{
    foo:max(2,3)
}  //输出结果为3
2.
// 存在二义性的语句 补充一
var max = function (x,y) {
    return x>y?x:y;
};
{
    console.log(123);
    console.log(456);
    foo:max(2,3)
}  //输出结果为123  456  3 
3.
// 存在二义性的语句 补充二
var max = function (x,y) {
    return x>y?x:y;
};
var x = {
    foo:max(2,3)
}  //输出结果为undefined 因为存在二义性


// LS04/demo02.js
//局部变量 全局变量
function foo(){
	var a=b=3;
}
foo();
console.log("b:",b);  //输出结果3  因为b是全局变量  
console.log("a:",a);  //报错  因为a是局部变量
//函数内部var a=b=3 实际上等同于var a=3; b=3;

//循环语句
for(var i=0;i<5;i++){
	console.log("in for ",i);
}
console.log("out for ",i);
//in for  0
//in for  1
//in for  2
//in for  3
//in for  4
//out for  5


// LS04/demo03.js
//ES5 中没有块作用域
{
    var a = 20;
}
console.log(a);  //20  大括号外也能访问到a


if(true){
    var a = 20;
}
console.log(a);  //20


for(var i = 0;i<5;i++){
    console.log("in for ",i);
}
console.log("out of for ",i);//可正常输出，不报错


// 思考：下边的例子是否报错，输出什么，相关知识参考预解析部分
// 你是否能够区分undefined和undeclared
if(false){
    var b = 30;
}
console.log(b);  //undefined

//undefined 只定义未赋值会得到undefined 
//undeclared 没有定义之前直接使用变量或函数会得到undeclared报错


//    LS04/demo04~demo06.js
//严格模式 目的：
//消除javascript语法的一些不合理、不严谨之处，减少一些怪异行为
//消除代码运行的一些不安全之处，保证代码运行的安全

//使用方法  "use strict" //全局使用

1.//非严格模式 输出123
function  sloppyFunc() {
    sloppyVar = 123;
}
sloppyFunc();
console.log(sloppyVar);
2. //严格模式 报错
'use strict'
function  sloppyFunc() {
    sloppyVar = 123;
}
sloppyFunc();
console.log(sloppyVar);
3. //检测是否在严格模式的方法
   //注意：严格模式下，this指向undefined.
   //     非严格模式下，this指向的是window对象
   /*
   function foo(){
	'use strict'
	console.log(this);
   }
   foo();  //undefined
   */
eg:
"use stirct"
function isStrictMode() {
    return this === undefined?true:false;
}
isStrictMode();  //true
eg:
function isStrictMode() {
    return this === undefined?true:false;
}
isStrictMode();  //false

//     LS04/demo07.js
//严格模式下禁止删除不可改变的属性的变量

//严格模式下禁止删除未定义的变量
delete foo;            //true
delete window.foo;	   //true
'use strict';
delete foo;			   //报错
delete window.foo;	   //true

//严格模式下禁止函数参数重名
1.
function f(a, a, b) {
    return a+b;
}
f(2,3,4);  //非严格模式下正常执行 7
2.
"use strict";
function f(a, a, b) {
    return a+b;
}
f(2,3,4);  //严格模式下报错

//严格模式下的arguments，变与不变
function f(a){
    "use strict";
    a = 42;
    return [a, arguments[0]];
}
var pair = f(17);

console.log(pair[0]);  //42
console.log(pair[1]);  //17

//     LS04/demo08.js
// switch 语句在比较值时使用的是全等操作符(即===),因此不会发生类型转换

var j = new Number(23);
switch (j){
    case 23:
        console.log("case_111");
        break;
    case "23":
        console.log("case_222");
        break;
    case new Number(23):
        console.log("case_333");
        break;
    default:
        console.log("case_default");
}  //case_default
//问题：j为何值时，才能输出case_333     ?????????????????????????????

1.
var i = 65;
switch(true){
    case i>=60:
        alert('及格');
        break;
    case i<60:
        alert('不及格');
        break;
    default:
        alert('default');
}     //及格
2.
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
}     //default

// 利用switch的穿透性:求某月某日是一年中的第几天?
var year = 2017,
    month = 5,
    date = 20,
    sum = 0;
switch(month-1){
    case 11:
        sum += 30;
    case 10:
        sum += 31;
    case 9:
        sum += 30;
    case 8:
        sum += 31;
    case 7:
        sum += 31;
    case 6:
        sum += 30;
    case 5:
        sum += 31;
    case 4:
        sum += 30;
    case 3:
        sum += 31;
    case 2:
        sum += year%4==0&&year%100!=0||year%400==0?29:28;
    case 1:
        sum += 31;
    default:
        sum += date;
}
console.log(sum);


//     LS04/demo10.js
//for ... in 遍历数组
var arr=[2,"33"];
for(var i in arr){          //i是数组中元素下标
	console.log(i,arr[i]);
}
//0 2
//1 33

//for ... in 遍历对象
var obj={x:10,y:20,z:"30"};
for(var k in obj){
	console.log(k,obj[k],typeof obj[k]);
}
//x 10 number
//y 20 number
//z 30 string


var obj1={x:1};
var obj2=Object.create(obj1);
obj2.y=2;
obj2.z=3;
for(var k in obj2){
	console.log(k,obj2[k]);
}
//y 2
//z 3
//x 1




//switch 补充

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
