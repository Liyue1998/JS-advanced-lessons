//1.给定这样一个连字符串，var s1 = "dgfhfgh254bhku289fgdhdy675gfh";
//写一个function提取上述字符串中的字符最终输出：[254,289,675]
var s1 = "dgfhfgh254bhku289fgdhdy675gfh";
function check(str){
	var reg=new RegExp(/[0-9][0-9][0-9]/,"gi");
	//或者 var reg=new RegExp(/\d\d\d/,"gi");
	//或者 var reg=new RegExp(/\d+/,"g");
	console.log(str.match(reg));
}
check(s1);
//["254", "289", "675"]


//2.给定这样一个连字符串，var s2 = "get-element-by-id";
//写一个function转换为驼峰命名法形式的字符串输出：getElementById
var s2 = "get-element-by-id";
function Trans(str) {
  var reg1 =/-(\w)/g;
  var newstr=str.replace(reg1, function(match, p) {
      return p.toUpperCase();
   })
  console.log(newstr);
}
Trans(s2);
//getElementById


//3.写出正则表达式，从一个字符串中提取链接地址。
//如var s3 = "测试<a href = http://www.baidu.com/>笔试</a> <a href = http://www.edu2act.cn/>笔试</a>正则";
//写一个function从s3中提取出网址，输出数组：["www.baidu.com","www.edu2act.cn"]
var s3 = "测试<a href = http://www.baidu.com/>笔试</a> <a href = http://www.edu2act.cn/>笔试</a>正则";
function newString(s) {  
    var reg = /(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|-)+)/g; 
    s = s.match(reg);  
    console.log(s);
}  
newString(s3);
//(2) ["http://www.baidu.com/", "http://www.edu2act.cn/"]


//4.查看常用正则表达式
https://www.imooc.com/article/15885