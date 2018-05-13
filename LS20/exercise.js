/**
 * Created by Liyue on 2018/5/11.
 */

"2017-10-23".replace(/(\d{4})-(\d{2})-(\d{2})/,"$2/$3/$1");
//"10/23/2017"
"2017-10-23".replace(/(?:\d{4})-(\d{2})-(\d{2})/,"$2/$3/$1");
//"23/$3/10"
//这个例子中，后两个(\d{2})对应的是$1、$2，没有$3,所以最后输出是23/$3/10

//~~~~~~~~~~~~~~~~~~~~~~~~~Part1 正则表达式简介及正则对象
//正则表达式是对字符串和特殊字符操作的一种逻辑公式，
//是对字符串执行模式匹配的工具
//正则表达式通常被用来检索、替换那些符合某个模式（规则）的文本
//Js中正则表达式是一个描述字符模式的对象，可以通过字面量、
//RegExp构造器来生成
//正则对象的创建方式一 通过字面量直接创建
var reg1=/[bcf]at/gi;
//正则对象的创建方式二 通过RegExp构造函数实例化正则对象
var reg2=new RegExp(/[bcf]at/,"gi");  //常见形式
var reg3=new RegExp("[bcf]at","gi");
console.log("a fAt bat,a faT cat".match(reg1));  //同reg2,reg3
//(4) ["fAt", "bat", "faT", "cat"]
//结果是含有4个元素的数组
//reg1表达式意为， at前有b或c或f，不分大小写



var regExp=/a?b/gi;
var matchResult="xxabcaabbbxyz".match(regExp);
console.log(matchResult);
//ab ab b b
//正则表达式/a?b/gi中, 
//?在a的后面，表示a出现0次或1次(最多一次)

var regExp=/ab/i;
var matchResult="xxAbcaaBbxyz".match(regExp);
console.log(matchResult);
//["Ab", index: 2, input: "xxAbcaaBbxyz", groups: undefined]
var regExp=/ab/gi;
var matchResult="xxAbcaaBbxyz".match(regExp);
console.log(matchResult);
//Ab aB

var regExp=/a*b/gi;
var matchResult="xxAbcaaBbxyz".match(regExp);
console.log(matchResult);
//Ab aaB b
//正则表达式/a*b/gi中,*出现在a的后面，
//代表a可以出现0次或多次(任意次)

var regExp=/a.b/gi;
var matchResult="xxAbcaaBbxyz".match(regExp);
console.log(matchResult);
//aaB
//一个 . 代表一个除了回车和换行符之外的所有字符
//等效于[^\r\n]


console.log("a2b3c4d".replace(/[2-3]/,"X"));
//aXb3c4d
console.log("a2b3c4d".replace(/[2-3]/g,"X"));
//aXbXc4d
//加上g后，匹配到整个字符串中的范围为2~3的数字

//test初步了解
var regExp=/a/gi;
console.log(regExp.test("ab"));  //true
console.log(regExp.test("ab"));  //false 
console.log(regExp.test("ab"));  //true
console.log(regExp.test("ab"));  //false

var regExp = /a/i;
console.log(regExp.test("ab"));  //true
console.log(regExp.test("ab"));  //true
console.log(regExp.test("ab"));  //true
console.log(regExp.test("ab"));  //true
//解释：
//加上g之后在全局范围内查找，所以会记录第一次查找的位置，第二次接着向后查找，直到整个字符串查找完毕。
//不加g的时候，每次都从最开始查找，所以才每次查找都是true。

var regExp=/a/gi;
console.log(regExp.test("ab"));  //true
//可以匹配到，因为"ab"中有"a"
console.log(regExp.test("ab"));  //false 
//第一次匹配之后，系统会记录第一次匹配完后的位置，
//这一次从"b"开始匹配，所以匹配不到"a"
console.log(regExp.test("ab"));  //true
//第二次匹配之后，"ab"整个字符串已经被匹配完，所以从头开始匹配
//之后以此类推 形成一个循环
console.log(regExp.test("ab"));  //false



// 正则表达式之 \
// 匹配一个词的边界 \b 一个词的边界就是一个词不被另外一个词跟随的位置或者不是另一个词汇字符前边的位置。
// 注意:一个匹配的词的边界并不包含在匹配的内容中。
console.log(/oo/.test("moon"));     //true
console.log(/oo\b/.test("moon"));   //false
console.log(/oon\b/.test("moon"));  //true
console.log(/\boo/.test("moon"));   //false

console.log("moon".search(/oo/));    //1
console.log("moon".search(/oo\b/));  //-1
console.log("moon".search(/oon\b/)); //1
console.log("moon".search(/\boo\b/));//-1
//search方法，能匹配到时返回1，匹配不到就返回-1

//匹配一个非单词边界 \B 他匹配一个前后字符都是相同类型的位置：都是单词或者都不是单词。
//一个字符串的开始和结尾都被认为是非单词。
console.log(/oo\B/.test("moon"));   //true
console.log(/oon\B/.test("moon"));  //false
console.log(/oo\B/.test("moon"));   //true
console.log(/\Boo\B/.test("moon")); //true

console.log("moon".match(/oo\B/));//["oo", index: 1, input: "moon"]
console.log("moonoonxoo".match(/oo\B/));//["oo", index: 1, input: "moonoonxoo"]
console.log("moon".match(/oon\B/));//null
console.log("moo".match(/\Boo\B/));//null

"noonday".replace(/\Boo/,"xx");
"nxxnday"
"noonday".search(/\Boo/);
1

"possibly yesterday".replace(/y\B./,"aaa");
"possibly aaasterday"
"possibly yesterday".replace(/y\B/,"aaa");
"possibly aaaesterday"

//  \d匹配一个数字等价于[0-9]  例如， /\d/ 或者 /[0-9]/ 匹配"B2 is the suite number."中的'2'
//  \D匹配一个非数字等价于[^0-9]  例如， /\D/ 或者 /[^0-9]/ 匹配"B2 is the suite number."中的'B'

/*
\w
匹配一个单字字符（字母、数字或者下划线）。
等价于[A-Za-z0-9_]。
例如, /\w/ 匹配 "apple," 中的 'a'，"$5.28,"中的 '5' 和 "3D." 中的 '3'。
*/

/*
\W
匹配一个非单字字符。
等价于[^A-Za-z0-9_]。
例如, /\W/ 或者 /[^A-Za-z0-9_]/ 匹配 "50%." 中的 '%'。
 */

//  \s匹配一个空白字符 例如, /\s\w*/ 匹配"foo bar."中的' bar'
//  \S匹配一个非空白字符 例如, /\S\w*/ 匹配"foo bar."中的'foo'

//\d \D \w \W \s \S 案例
"sdafsa sdfea2s".replace(/a\ds/g,"*");  //sdafsa sdfe*
"sdafsa sdfea2s".replace(/a\Ds/g,"*");  //sd*a sdfea2s
"sdafsa sdfea2s".replace(/a\ws/g,"*");  //sd*a sdfe*
"sdafsa sdfea2s".replace(/a\Ws/g,"*");  //sdafs*dfea2s

var str="test22314234244dgfqeqe232qe13ed";
var newStr=str.search(/\dqe/);
console.log(newStr);
var str1=str.replace(/\dqe/,11223344);
console.log(str1);
//24
//test22314234244dgfqeqe231122334413ed

//匹配一个非单词边界  /\B../匹配"noonday"中得'oo', 而/y\B./匹配"possibly yesterday"中得’ye‘
console.log("noonday".match(/\B../));  
//["oo", index: 1, input: "noonday", groups: undefined]
console.log(/\B../.test("noonday"));   //true

//默认为贪婪模式（即尽可能多的匹配）
"12345678".replace(/\d{3,6}/,'X');
//"X78"
//在量词后加?可设置为非贪婪模式
"12345678".replace(/\d{3,6}?/,'X');
//"X45678"

//正则表达式的分组
//思考：匹配Name连续出现3次的正则，/Name{3}/，这样可以么. 答：不可以
//使用小括号来进行分组 ，如：/(Name){3}/g   
//或 |、分组中的或 |
"NameNameNameee".match(/Name{3}/);
//["Nameee", index: 8, input: "NameNameNameee", groups: undefined]
"NameNameNameee".match(/(Name){3}/);
//(2)["NameNameName", "Name", index: 0, input: "NameNameNameee", groups: undefined]

//正则表达式的分组的反向引用
"2017-10-23".replace(/(\d{4})-(\d{2})-(\d{2})/,"$2/$3/$1");
//"10/23/2017"
"2017-10-23".replace(/(\d{4})-(\d{2})-(\d{2})/,"$2-$3-$1");
//"10-23-2017"

//正则表达式的分组的忽略分组
"2017-10-23".replace(/(?:\d{4})-(\d{2})-(\d{2})/,"$2/$3/$1");
//"23/$3/10"
//这个例子中，后两个(\d{2})对应的是$1、$2，没有$3
//所以最后输出是23/$3/10

