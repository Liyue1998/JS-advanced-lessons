/**
 * Created by Liyue on 2018/6/4.
 * JS异步与网络数据交互
 */

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    //console.log(xhr.readyState,xhr.status);
    if (xhr.readyState == 4) {
        //表示服务器的相应代码是200；正确返回了数据
        if (xhr.status == 200) {
            var message = xhr.responseText;
            console.log(message);
        }
    }
};
xhr.open("get", "http://127.0.0.1:8080?getInfo=MyGetInformation", true);
//xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");//post需增加
xhr.send();



//   PPT27. ES6中的let与const

//const指向的对象引用不可变，但其属性是可变的
const a=[];
a=[1];  //报错

const a=[];
a.push(1);  //ok

// Part1 ES5中的var及其缺陷
//ES5通过var声明变量（无块作用域，可能造成变量污染）
//ES5中变量生命周期解决方案IIFE


//例1 通过var定变量 ES5中没有块作用域 { }外可以访问{ }内变量
{
	var a=23;
}
console.log(a);  //23  由于没有块作用域，a可以正常输出

//例2
for(var i=0;i<5;i++){
	console.log(i);     //0 1 2 3 4
}
console.log(i); //5 此时i依然存在


//例3 通过var声明的变量，由于没有块作用域，容易造成变量污染
var userId = 123;
document.onclick = function () {
    console.log("userId = ",userId);
};

//一长串代码后，假如忘记上边定义了userID，容易重复定义造成变量污染
var a=2,b=3;
if(a<b){
    var userId = 234;
}


//可以通过IIFE(立即执行表达式)来解决上述问题
(function () {
    var a=2,b=3;
    if(a<b){
        var userId = 234;
        console.log(userId);        
    }
}());  //234

(function () {
    var a=2,b=3;
    if(a<b){
        var userId = 234;
        console.log(userId);        
    }
}());
console.log(userId);  //此时userId已经不存在了
//先输出234
//然后 报错


//变量共享问题
for(var i=0;i<3;i++){
	setTimeout(function(){
		console.log(new Date,i);
	},1000*i)
}
console.log("i:",i);
//首先输出  i: 3
//Mon Jun 04 2018 16:20:25 GMT+0800 (中国标准时间) 3
//Mon Jun 04 2018 16:20:26 GMT+0800 (中国标准时间) 3
//Mon Jun 04 2018 16:20:27 GMT+0800 (中国标准时间) 3

//思考：为什么先输出i：3，再输出循环中的内容？

//通过IIFE解决变量共享问题
for (var i = 0; i < 3; i++) {
    (function(j) {  // j = i
        setTimeout(function() {
            console.log(new Date, j);
        }, 1000*i);
    })(i);
}
console.log("i:",i);
//首先输出   i: 3
//Mon Jun 04 2018 17:30:20 GMT+0800 (中国标准时间) 0
//Mon Jun 04 2018 17:30:21 GMT+0800 (中国标准时间) 1
//Mon Jun 04 2018 17:30:22 GMT+0800 (中国标准时间) 2



// Part2  ES6中的let与const
// 1.通过let声明变量
//ES6新增了let命令，用于声明变量，用法与var类似
