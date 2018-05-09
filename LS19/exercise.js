/**
 * Created by Liyue on 2018/5/9.
 */
//什么是正则表达式
//正则表达式是对字符串和特殊字符操作的一种逻辑公式，是对字符串执行模式匹配的工具
//正则表达式通常被用来检索、替换那些符合某个模式(规则)的文本
//JS中正则表达式是一个描述字符模式的对象，可以通过字面量、RegExp构造器来生成

//正则对象的创建方式有两种
//方式一 通过字面量直接创建
var reg1=/[bcf]at/gi;
//方式二 通过RegExp构造函数来实例化正则对象
var reg2=new RegExp(/[bcf]at/,"gi");
var reg3=new RegExp("[bcf]at","gi");
//对象reg1,reg2,reg3是相同的
console.log("a fAt bat,a faT cat".match(reg1));
//(4) ["fAt", "bat", "faT", "cat"]


//在控制台上测试，了解两点
// 一、g全局、i大小写、m换行 修饰符的作用
// 二、正则对象的两种基本使用方式 1.字符串.字符串方法（正则对象） 2.正则对象.正则方法（字符串）


//11111111111111111  正则的语法概述和修饰符（g全局,i忽略大小写,m包含换行)
var regExp=/a?b/gi;
var matchResult="xxabcaabbbxyz".match(regExp);
console.log(matchResult);
//(4) ["ab", "ab", "b", "b"]

var regExp = /ab/i;
var matchResult = "xxAbcaaBbxyz".match(regExp);
console.log(matchResult);
//["Ab", index: 2, input: "xxAbcaaBbxyz"]

var regExp = /ab/gi;
var matchResult = "xxAbcaaBbxyz".match(regExp);
console.log(matchResult);
//(2) ["Ab", "aB"]

var regExp = /a*b/gi; //注意*和.的区别 ，参见在线分析工具 https://regexper.com
var matchResult = "xxAbcaaBbxyz".match(regExp);
console.log(matchResult);
//(3) ["Ab", "aaB", "b"]

var regExp = /a.b/gi;//注意*和.的区别 ，参见在线分析工具 https://regexper.com
var matchResult = "xxAbcaaBbxyz".match(regExp);
console.log(matchResult);
//["aaB"]

//22222222222222222  用正则对象来匹配字符串，也可以调用字符串方法来匹配
//方式一 字符串方法
console.log("a2b3c4d".replace(/[2-3]/,"x"));    //axb3c4d
console.log("a2b3c4d".replace(/[2-3]/g,"x"));   //axbxc4d

//方式二 正则对象方法
var regExp=/a/i;
console.log(regExp.test("ab"));  //true
console.log(regExp.test("ab"));  //true
console.log(regExp.test("ab"));  //true
console.log(regExp.test("ab"));  //true
//思考：若是加上g有什么变化，为什么
var regExp=/a/gi;
console.log(regExp.test("ab"));  //true
console.log(regExp.test("ab"));  //false  为什么
console.log(regExp.test("ab"));  //true  
console.log(regExp.test("ab"));  //false  为什么