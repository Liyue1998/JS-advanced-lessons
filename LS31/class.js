/**
 * Created by Liyue on 2018/6/21.
 *  ES6新增数据类型和数据结构 PPT31
 */

//  Part1新增数据类型（Symbol）
let s=Symbol();
typeof s;
//"symbol"
var s1=Symbol('foo');
var s2=Symbol('bar');
console.log(s1);
console.log(s2);
//Symbol(foo)
//Symbol(bar)
s1 instanceof Object;
//false


//使用Symbol是用[]，而不是用点操作符
var mySymbol = Symbol();
// 第一种写法
var a = {};
a[mySymbol] = 'Hello!';//注意中括号内不要加引号，后面介绍加引号和不加引号的区别
// 第二种写法
var a = {
    [mySymbol]: 'Hello!'
};
// 第三种写法
var a = {};
Object.defineProperty(a, mySymbol, { value: 'Hello!' });
// 以上写法都得到同样结果
a[mySymbol] // "Hello!"


var obj={};
var s1=Symbol();
var s2=Symbol();
obj[s1]=123;
obj[s2]=345;
obj["s1"]=678;
obj.s2=910;
for(var k in obj){
	console.log(k,typeof k);
}
//s1 string
//s2 string


var obj={};
var s1=Symbol();
var s2=Symbol();
obj[s1]=123;
obj[s2]=345;
obj["s1"]=678;
obj.s2=910;
Object.getOwnPropertySymbols(obj).forEach(function(v){
	console.log(obj[v]);
});
//123
//345



//  Part2新增数据结构（Set）
let s1=new Set([1,2,3,4,5,5,6,2,2]);
console.log(s1);
//Set(6) {1, 2, 3, 4, 5, …}


var set=new Set();
var a={};
var b=a;
set.add(a);
console.log(set.size);
set.add(b);
console.log(set.size);
//1
//1






//  Part3新增数据结构（Map）