/**
 * Created by Liyue on 2018/6/24.
 */

////ES6对函数的扩展
///ES6新增的箭头函数
//ES6中提供了新的语法规则来描述函数(箭头函数=>)
//-箭头函数语法简单地描述为：参数=>函数体 或 (参数)=>{函数体}
//-优点：可减少冗余的代码(如function关键字等)节省空间，避免this指向错误
//-如果箭头函数没有参数或需要多个参数时，就使用一个圆括号代表参数部分

//ES5的写法
var max=function(a,b){
	return a>b?a:b;
};
max(2,3);  //3

//ES6的写法
var max=(a,b)=> a>b?a:b;
max(2,6);  //6

//复合语句的话，需要使用大括号和对应的return语句进行返回，
//单语句可以不用return关键字
//但，当使用return时，必须加大括号
var add=(c,d)=> {return c=c+d;}     //此处如果不加大括号会报错
add(1,6);  //7



//箭头函数需注意的几个点
//-函数内this是与函数定义时所在的对象绑定，而不是使用时所在的对象(避免this缺陷)
//-大括号被解释为代码块，所以如果箭头函数直接返回一个对象，需在对象外面加上括号

var point={
	x:0,
	y:0,
	moveTo:function(x,y){
		//内部嵌套函数
		var moveToX= ()=> this.x=x;  //this.x是与函数定义时所在的对象绑定，即point
		var moveToY= ()=> this.y=y;  //所以 this.x是x:0的x
		moveToX();
		moveToY();
	}
};
point.moveTo(2,2);
console.log(point);
//{x: 2, y: 2, moveTo: ƒ}

var point={
	x:0,
	y:0,
	moveTo:function(x,y){
		//内部嵌套函数
		var moveToX= ()=> this.x;  //this.x指的是对象point的x：0的x
		var moveToY= ()=> this.y;
		moveToX();
		moveToY();
	}
};
point.moveTo(2,2);
console.log(point);
//{x: 0, y: 0, moveTo: ƒ}



///ES6对函数参数默认值的扩展
//ES5函数参数默认值的实现方法
//-ES5中不能直接为函数的参数指定默认值，需通过||来实现

//ES6对函数参数默认值的扩展
//ES6允许为函数的参数设置默认值
//-直接写在参数定义的后面，比ES5更加直观
//-不会出现在ES5中实参转换为布尔类型的问题

var sum=function(a,b=4,c=5){
	return a+b+c;
}
console.log(sum(1));  //10  //只传了一个参数，所以默认4,5
console.log(sum(1,0,0));  //1



//ES6函数的参数默认值注意事项
//-带默认值的参数变量是默认声明的，所以函数体内不能再用let或const重复声明
//-参数一般有顺序，有默认值的参数应该是尾参数，这样可以使有默认值的用默认值
// 没有默认值的用传递的参数

function foo(x=5){
	let x=1;      //报错 因为参数x有默认值5，所以默认声明的参数，所以不能再用let或const重复声明
	const x=2;    //报错
}
foo();

function f(x=1,y){
	return [x,y];
}
f();  //[1, undefined]

function f(x=1,y){
	return [x,y];
}
f(2);  //[2, undefined]

function f(x=1,y){
	return [x,y];
}
f(,3);  //报错，无法使x用1, y用3



///ES6中的Rest与Spread操作符
// ...Rest(剩余操作符)
//-主要用在函数参数的声明中，可获得隐含的实参，取代ES5中函数隐藏变量arguments
//-arguments(获得所有实参)是个类数组对象，缺点是不能像操作数组那样直接操作
//- ...Rest比arguments更灵活， ...Rest操作符需放在函数形参的最后，示例如下

function f(x,...y){
	console.log(x,y);
}
f("a","b","c");  //"a",["b","c"]
f("a");  //"a",[]
f();  //undefined,[]



// ...Spread(扩展操作符)
//-主要用在函数的调用中 (虽然也是... ,但使用的场景不同)
//-Spread将一个数组转换为用逗号分隔的参数序列，是 ...Rest的逆过程
//-在call和apply的转换过程中十分有用

function f(x,...y){
	console.log(x,y);
}
f("a",...["b","c"]);
f("a");
f();
//a ["b", "c"]
//a []
//undefined []