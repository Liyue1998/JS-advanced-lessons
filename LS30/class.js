/**
 * Created by Liyue on 2018/6/14.
 */


// 上节课剩余内容 PPT29
//ES6对对象的扩展 ES6允许在对象之中只写属性名，不写属性值
//提供一种更为简洁的对象的写法：有name时可以省略属性值，只写' name, '
//                            写方法时不写function，直接写 方法名(){}
var name="Jack";
var person={
	name,
	showInfo(){
		console.log(this.name);
	}
}
person.showInfo();
//Jack

//Object新增的静态方法
//Object.setPrototypeOf()   （强制）为谁指定原型

var obj1={a:1,b:2};
var obj2={c:3,d:4};
Object.setPrototypeOf(obj2,obj1);
console.log(obj2.a,obj2.b,obj2.c,obj2.d);
//1 2 3 4
//obj2的原型是obj1
//obj2本身找不到c，d，到原型上找
//
//
var obj1={a:1,b:2};
var obj2=Object.create(obj1);
obj2.c=3;
obj2.d=4;
console.log(obj2.a,obj2.b,obj2.c,obj2.d);
//1 2 3 4
//
//
Object.keys(obj2);
//["c", "d"]  //只得到本身的属性名，而不得到原型上的属性名
//
"a" in obj2;
//true  //用in可以得到本身 以及 原型上的属性名


//回顾ES5中Object.keys静态方法
//values和entries方法
var obj={foo:'bar',baz:42};
Object.values(obj);
// ["bar",42]

var obj={foo:'bar',baz:42};
Object.entries(obj);
// [ ["foo","bar"],["baz",42] ]
for(var [k,v] of Object.entries(obj)){ //解构赋值
    console.log(k,v);
}





// 本节课内容 PPT30 ES6对函数的扩展

//ES6 新增的箭头函数
//ES6中提供了新的语法规则来描述函数( 箭头函数=> )
//ES5 的写法
var max=function(a,b){
    return a>b?a:b;
}
max(2,3);
//ES6 的写法
var max=(a,b)=> a>b?a:b;
max(2,3);
//3

var showName=(name)=>console.log(this.name);
showName("Jack");
//Jack
var showName=(name)=>console.log(this.name+"1");
showName("Jack");
//Jack1

var f=function(v){
	return v+1;
}
f(2);
//3
var f=v=>v+1;  单参数可以不用()
f(5);
//6
/*
var f=v=>return v+1;
f(5);  报错
       如果写return，就要写大括号。
       函数体是多行语句时，必须加{}
*/
//
var f=v=>{return v+1};
f(5);
//6

var getTempItem=itemId=>({id:itemId,name:"Jack"})
getTempItem(123);
//{id: 123, name: "Jack"}
/*
var getTempItem=itemId=>{id:itemId,name:"Jack"}  相比上边，不写小括号 
getTempItem(123);  报错
                   会把{}作为函数体外的{}
                   执行时，会把id:itemId,name:"Jack"作为语句块来处理
                   所以会出问题
    注意： 解决方法：想返回一个对象时，用()括起来
*/


//ES6 对函数参数默认值的扩展


















//ES6 中的Rest与Spread操作符
// ...Rest(剩余操作符)
//主要用于函数声明时
function f(x,...y){
	console.log(x,y);
}
f(1,2,3,4);
//1  [2, 3, 4]
//
//
function f(...y){
	console.log(y);
}
f(1,2,3,4);
//[1, 2, 3, 4]


function a(x,y){
	console.log(x,y);
}
a.call({},1,2);
//1 2
//
function a(x,y){
	console.log(x,y);
}
a.apply({},[1,2]);
//1 2


// ...Spread(扩展操作符)  ...Rest(剩余运算符)的逆过程
//主要用于函数调用时  
function a(x,y){
	console.log(x,y);
}
var arr=[1,2];
a.apply({},arr);
//1 2


function a(x,y){
	console.log(x,y);
}
var arr=[1,2];
a.call({},arr[0],arr[1]);  需要知道数组有多少个元素
//1 2
//
function a(x,y){
	console.log(x,y);
}
var arr=[1,2];
a.call({},...arr);   把数组变成散列形式，不需要知道数组有多少元素
//1 2

/*
...Rest     散列形式->数组   ...y  
...Spread   数组->散列形式   ...["a","b"]
*/


function test(){
	console.log(arguments);
}
test("a","b","c");
//结果是一个类数组对象，但不是数组
//
// 使变成数组：
function test(){
	console.log(Array.from(arguments));
}
test("a","b","c");
//["a", "b", "c"]
//
//
function test(){
	console.log(...arguments);
}
test("a","b","c");
//a b c