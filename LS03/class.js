{x:1}=={x==1};  //false 基本数据类型
NaN==NaN;  //false 特例
console.log(NaN === NaN); //false
//方法也是属性：
//当函数作为某一个对象的属性时，我们叫其方法

//split分割
//concat拼接
//substr(4,7) 


/*各种方法
var str="abc_def_ghi_jkl_mn";
str.split("_");
(5) ["abc", "def", "ghi", "jkl", "mn"]
str.split("_",2);
(2) ["abc", "def"]
str.concat("_opq");
"abc_def_ghi_jkl_mn_opq"
str.substr(4,7);
"def_ghi"
str.substring(4,7);
"def"
str.slice(2);
"c_def_ghi_jkl_mn"
str.slice(2,5);
"c_d"
str.slice(-2);
"mn"
str.slice(2,-2);
"c_def_ghi_jkl_"
str.bold();
"<b>abc_def_ghi_jkl_mn</b>"
str.link();
"<a href="undefined">abc_def_ghi_jkl_mn</a>"
*/

//null 需要注意一点
//console.log(typeof null);  //object

//区分undefined和undeclare
//未声明与未定义

//在js里函数就是对象：
function foo(){
	
}
console.log(foo instanceof Object);  //true


//一个区别
//基本数据类型 修改属性，本身不改变
var str="abcdef";
str.length;
str.length=1;  //把包装对象的属性改了   临时，完了之后拆箱释放，所以不影响
console.log(str,str.length);  //abcdef 6
//对象 修改对象的属性，对象本身发生改变
var arr=[1,2,3,4,5];
arr.length=1;
console.log(arr,arr.length);  //[1] 1
/*
//包装对象
var a = 123;
var b = new Number(a);

console.log(a == b);
console.log(a === b);//true or false 为什么

//临时包装对象
var str = "abcde";
console.log(str.length);//5 临时包装成了String对象
str.length = 1;
console.log(str.length,str);//5 "abcde" 临时包装对象并不影响原始值

var arr = [1,2,3,4];
console.log(arr.length);//4
arr.length = 1;
console.log(arr.length,arr);//1 [1]
*/


if(new Boolean(false)){
	console.log("执行");
}  //执行     对象转换为布尔类型都是true

typeof NaN;  //"number"

console.log(parseFloat("123.345xx"));
//console.log(window.parseFloat("123.345xx"));
//console.log(Number.parseFloat("123.345xx"));

//隐式类型转换
var temp="23"-1;
typeof temp;  //"number"

var a1=2;
var b1=new Number(2);
a1==b1;  //true

var a=2;
if(2==a){    //2==a反写有好处：避免少写一个等号。反写的话会提示错误，小技巧.  if(2=a)、if(a=2)
	console.log("输出");
}  //输出

var n1 = 12345.6789;
console.log(n1.toFixed(2));
console.log(n1.toPrecision(2));
console.log(n1.toString());
console.log(n1.toExponential(2));
12345.68
1.2e+4
12345.6789
1.23e+4

console.log(Math.round(-3.5));  //四舍五入 结果 -3
console.log(Math.ceil(3.2));    //向上取整 结果 4


//slice方法
var str2="abcdef";
console.log(str2.slice(2));  //cdef
console.log(str2.slice(2,5));  //cde
console.log(str2.slice(2,3));  //c

console.log(str2.slice(-2));  //ef
console.log(str2.slice(-1));  //f
console.log(str2.slice(0));  //abcdef

console.log(str2.slice(2,-2));  //cd