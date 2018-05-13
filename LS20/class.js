var str="xx-xxy-xx";
//以-作为分隔
var a=str.split("-");
console.log(a);
//(3) ["xx", "xxy", "xx"]

var str="xx-x*y-xx";
var a=str.split(/[-*]/gi);
console.log(a);
//(4) ["xx", "x", "y", "xx"]
//[-*]表示即能匹配到"-",也能匹配到"*"

//test方法：检测字符串中是否能匹配到..


//https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions#note
//       \d匹配数字  
//       \D匹配非数字
"a2d5".replace(/\d/gi,"X");  //aXdX
"aXdX"
"a2d5".replace(/\D/gi,"X");  //X2X5
"X2X5"
//      \w匹配一个单字字符（字母、数字或者下划线）            
//      \W匹配一个非单字字符（字母、数字或者下划线）    
"a2d5".replace(/\w/gi,"X"); 
"XXXX"
"a2d5".replace(/\W/gi,"X"); 
"a2d5"
//      \s 匹配一个空白字符，包括空格、制表符、换页符和换行符。
//      \S 匹配一个非空白字符
"a2d5".replace(/\s/gi,"X"); 
"a2d5"
"a2d5".replace(/\S/gi,"X"); 
"XXXX"

//在JS正则中，"8"代表任意字符

//     \b匹配边界   
//     \B匹配非边界
console.log("123123 123".replace(/\b123/g,"*"));
//*123 *

//     &以谁作为结尾   n&

//     $以谁作为开头??

//     "$&"表示整个被匹配的字符串



//正则表达式特殊字符 三 （量词）
//"?"出现0次或1次（最多1次）  + 出现1次或多次（至少1次）   "*"出现0次或多次（任意次）
//{n} 出现n次       {n,m} 出现n到m次      {n,}出现至少n次

console.log("nooooonooy".replace(/o?/g,"*"));
//*n******n***y*
console.log("AaBbAb_AaaBbbAba".replace(/Aa?/g,0));
//0Bb0b_0aBbb0ba

console.log("nooooonooy".replace(/o{5}/g,"*"));
//n*nooy
////以最大的为基准，先匹配2个的，再匹配1个的:
console.log("nooooonooy".replace(/o{1,2}/g,"*"));
//n***n*y


//正则表达式贪婪模式与非贪婪模式
//默认为贪婪模式（即尽可能多的匹配），在量词后加？可设置为非贪婪模式
"12345678".replace(/\d{3,6}/,'X');  //默认为贪婪模式
"X78"
"12345678".replace(/\d{3,6}?/,'X');
"X45678"

//正则表达式的分组
//使用小括号来进行分组 ，如：/(Name){3}/g
//意为，匹配Name连续出现3次的字符串
console.log("lililiasd".replace(/(li){3}/g,"!"));
//!asd
//思考：匹配Name连续出现3次的正则，/Name{3}/，这样可以么？
//不可以，会匹配到 Nameee

//正则表达式的分组的反向引用
//思考：如何将2017-10-23转成10/23/2017


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~RegExp及String相关的正则方法
//test方法和exec方法都需要注意，每次匹配完之后lastindex是什么，下次匹配会从此处开始

//正则表达式RegExp原型方法（test）
var regExp = /a/gi;
console.log(regExp.test("ab"));//true
//可以匹配到，因为"ab"中有"a"
console.log(regExp.test("ab"));//false 为什么？
//第一次匹配之后，系统会记录第一次匹配完后的位置，
//这一次从"b"开始匹配，所以匹配不到"a"
console.log(regExp.test("ab"));//true
//第二次匹配之后，"ab"整个字符串已经被匹配完，所以从头开始匹配
//之后以此类推 形成一个循环
console.log(regExp.test("ab"));//false

//思考
//如果加了g，循环了若干次后是true还是false，为什么？test中的lastIndex
//加上g后，都为true

//正则表达式RegExp原型方法（exec），可获得详细信息



//数组对象的push方法

//exec和match方法类似，但exec更强大
