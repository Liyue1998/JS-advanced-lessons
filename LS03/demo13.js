/**
 * Created by Liyue on 2018/3/12.
 */

//Number原型方法(Number对象继承的方法）
// Number.prototype.toFixed();
// Number.prototype.toPrecision();
// Number.prototype.toString();
// Number.prototype.toExponential();

//Number对象：
var n1=12345.6789;
//1.
console.log(n1.toFixed(2));  //12345.68
//toFixed()函数返回一个字符串，该字符串以定点表示法表示当前数值。简言之，就是小数点后有指定位数的小数，如果数字本身的小数位数不足，则以0进行填充。
//该函数属于Number对象
//2.
console.log(n1.toPrecision(2));  //1.2e+4  （1.2乘以10的四次方）
//toPrecision()函数返回一个字符串，该字符串以指数记数法或定点记数法来表示当前数值。  参数值意义为保留有效数位个数 
//该函数属于Number对象
//3.
console.log(n1.toString());  //12345.6789
//Number.toString()函数返回表示该数字的指定进制形式的字符串。  参数值可选，意义为进制数
//该函数属于Number对象
//4.
console.log(n1.toExponential(2));  //1.23e+4  
//toExponential()函数返回一个字符串，该字符串以指数计数法表示当前数值。  参数值可选，意义为小数点后保留位数
//该函数属于Number对象

//Math对象
Math.floor //向下取整
Math.ceil  //向上取整
Math.round  //四舍五入
console.log(Math.round(-3.2));  //-3
console.log(Math.round(-3.5));  //-3
console.log(Math.round(-3.8));  //-4

//关于NaN
console.log(typeof NaN);     //number
console.log(NaN==NaN);       //false
console.log(NaN===NaN);      //false
console.log(isNaN("12,3"));  //true



//Part 000000000
//字符串比较
console.log("B".localeCompare("A"));  //1
console.log("13".localeCompare("15"));  //-1 前边小-1
console.log("15".localeCompare("15"));  //0  一样大0
console.log("15".localeCompare("13"));  //1  前边大1



//Part 111111111 字符串提取
//slice()
var str2="abcdef";
console.log(str2.slice(2));  //cdef 

console.log(str2.slice(2,5));  //cde 返回字符串，下标从2开始，到5之前（不含5）
console.log(str2.slice(2,-2));  //cd 返回字符串，下标从2开始，到-2结束之前（不含-2）

console.log(str2.slice(-2));  //ef  返回字符串，从倒数第一到倒数第二倒数时，最后一个下标为-1
console.log(str2.slice(-1));  //f 返回字符串，倒数第一个字符

//split()
var arr6="abcdef";
console.log(arr6.split("c"));  //返回数组 ["ab", "def"] 
console.log(arr6.split("c",1));  //["ab"]
console.log(arr6.split("c",2));  //["ab", "def"]
console.log(arr6.split("c",3));  //["ab", "def"]
console.log(arr6.split("c",0));  //[]

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var str9="abcdef";
//1.
console.log(str9.charAt(2));  //c  返回下标为2的字符 参数只有一个
//charAt()函数返回字符串对象中指定索引处的字符。
//该函数属于String对象
//2.
console.log(str9.charCodeAt(0));  //97
//charCodeAt()函数返回一个整数，该整数表示String对象中指定索引处的字符的Unicode编码。
//该函数属于String对象
//3.
var str11 = "abcdefabcdef";
console.log(str11.indexOf("d",4));  //9
//返回一个下标值，“d”是要索引的字符，“4”指从4开始往后查找
//indexOf()函数用于查找子字符串在当前字符串中第一次出现的位置。
//该函数属于String对象


//substr 与 substring的区别   功能：截取字符串
1.
var str13="abcdefghijklmn";
var str14=str13.substr(2,5);  //5为要截取的长度
console.log(str13,str14);  //str13未受到破坏
//abcdefghijklmn    cdefg 
2.
var str15=str13.substring(2,5);  //5表示结束位置：到下标为5之前，即e
console.log(str13,str15);  //str13未受到破坏
//abcdefghijklmn cde

//Part 222222222 字符串变换
var str16="aaa".concat("bbb");  //aaabbb  连接字符串
var str17="    abc def     \r\n  ".trim();  //abc def   
//返回已移除前导空格、尾随空格和行终止符的原始字符串
var str18="abcDEF".toLowerCase();  //abcdef  将字符串中的字符都转化为小写字母
var str19="abcDEF".toUpperCase();  //ABCDEF  转化成大写字母