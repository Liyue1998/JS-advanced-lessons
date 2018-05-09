/**
 * Created by Liyue on 2018/5/7.
 */


var arr1=[2,5,8];
var arr2=[1,6,7];
arr1.forEach(function(a){
    console.log(a,this);
},arr2);
console.log(arr2);
//2 (3) [1, 6, 7]
//5 (3) [1, 6, 7]
//8 (3) [1, 6, 7]
//(3) [1, 6, 7]

var arr1=[2,5,8];
var arr2=[1,6,7];
arr1.forEach(function(a,i){
    console.log(a,i,this);
},arr2);
console.log(arr2);
//2 0 (3) [1, 6, 7]
//5 1 (3) [1, 6, 7]
//8 2 (3) [1, 6, 7]
// (3) [1, 6, 7]


//every和some


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~标准内置对象-构造器(Date)
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Part1 Date简介及创建Date对象
var date1=new Date(2017,9,18,12,34,1);
console.log(date1);
//Wed Oct 18 2017 12:34:01 GMT+0800 (中国标准时间)  
//月份虽然是9，但实际表示的是10

//若years为2位的话自动加1900:
var date2 = new Date(17,9,18,12,34,1);
console.log(date2);
//Thu Oct 18 1917 12:34:01 GMT+0800 (中国标准时间)

//注意日期的格式 此处的08代表8月还是9月，对比上一个创建形式:
var date3 = new Date("2017-08-09");
console.log(date3);
//Wed Aug 09 2017 08:00:00 GMT+0800 (中国标准时间)

var date4=new Date(1000);
console.log(date4);
//Thu Jan 01 1970 08:00:01 GMT+0800 (中国标准时间)

//获得当前日期
var date5=new Date();
console.log(date5);
//Mon May 07 2018 14:34:11 GMT+0800 (中国标准时间)

//无效的日期：
var date6=new Date(NaN);
console.log(date6);  
//Invalid Date
//实例化成功了，但这个date不是一个有效的日期:
date6 instanceof Date;
//true

//补充思考
var n1 = new Number("123");  //对象类型 object
var n2 = Number("123");      //数值型   number
console.log(n1,typeof n1);
console.log(n2,typeof n2);
//Number {123} "object"
//123 "number"


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Part2 Date方法（静态方法、原型方法）

console.log(Date.now());
//1525675172043
//毫秒数是从1970年1月1号1时0分开始计算的

console.log((new Date()).getTime());
//1525675276567


//判断7月7号是星期几
var today=new Date();
today.setMonth(6);  //设置月份，实际是7月，因为下标index从0开始
console.log(today); 
//Sat Jul 07 2018 14:47:37 GMT+0800 (中国标准时间)
console.log(today.getDay()); //getDay()方法是获得星期几
//6     //星期6


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Part3
//计算时间
//1秒=1000毫秒   1小时=3600秒   1天=24小时
//所以   1000*3600*24即为一天的毫秒数 
var today=new Date();
today.getTime();
//1525676523974
today+3600*24;
//"Mon May 07 2018 15:02:03 GMT+0800 (中国标准时间)86400"
var newDate=new Date(today+3600*24);
newDate;
//Mon May 07 2018 15:02:03 GMT+0800 (中国标准时间)
var newDate=new Date(today.getTime()+2000*3600*24);
newDate;
//Wed May 09 2018 15:02:03 GMT+0800 (中国标准时间)
var today=new Date();
var newDate=new Date(today.getTime()+1000*3600*24*50);
console.log(newDate);
//Tue Jun 26 2018 15:05:15 GMT+0800 (中国标准时间)


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~PPT20 正则表达式

var str="a fAt bat,a faT cat";
var reg1=/[bc]at/gi;
str.replace(reg1,"xx");
//"a fAt xx,a faT x

//正则的语法概述和修饰符（g全局,i忽略大小写,m包含换行)
var str="a fAt bat,a faT cat";
var reg2=new RegExp(/fat/,"g");
str.replace(reg2,"XX");
//"a fAt bat,a faT cat"
var str="a fAt bat,a faT cat";
var reg2=new RegExp(/fat/,"i");
str.replace(reg2,"XX");
//"a XX bat,a faT cat"
var str="a fAt bat,a faT cat";
var reg2=new RegExp(/fat/,"gi");
str.replace(reg2,"XX");
//"a XX bat,a XX cat"


