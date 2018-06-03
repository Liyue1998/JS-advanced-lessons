/**
 * Created by Liyue on 2018/5/14.
 * JS标准内置对象ERROR及异常处理
 */

//catch或finally必须至少含有一个
//无论是否捕获到异常，finally都会执行 
try{
	var a=new Array(-5);
	console.log("xx");
} 
catch(e){
	console.log(e);
}
finally{
	console.log("finally");
}
//RangeError: Invalid array lengthat <anonymous>:2:8
//finally
//没有输出try中的xx，因为执行完第一句后，发现错误
//这时主动权已经不在try了，而是catch
//所以console.log("xx");没有执行


//也可以手动抛出异常 throw
try{
	throw "abc";
}
catch(e){
	console.log(e);
}
//abc


try{
	console.log("xx");
}
catch(e){
	console.log(e);
	console.log("yy");
}
//xx
//try中没有抛出错误，所以不执行catch 

//调试小工具
console.assert(3>2,"xx");
//3>2成立时，不输出任何东西
//当前边表达式为假时，输出后边的xx


//JS中异常处理嵌套的情况
try{
	try{
		throw "oops";
	}
	catch(ex){
		console.log("inner",ex);
	}
	finally{
		console.log("finally");
	}
}
catch(ex){
	console.log("outer",ex);
}
//
//inner oops
//finally


try{
	try{
		throw "oops";
	}
	catch(ex){
		console.log("inner",ex);
		throw ex;
	}
	finally{
		console.log("finally");
	}
}
catch(ex){
	console.log("outer",ex);
}
//inner oops
//finally
//outer oops

//常见错误类型有几种
//ReferenceError 引用错误、
//RangeError 范围错误、TypeError 类型错误

//自定义错误类
function UserError(message){
	this.message=message || '默认信息';
	this.name='UserError';
}
UserError.prototype.__proto__=Error.prototype;
//UserError相当于一个构造函数
//类比Person
//function Person(){}
//
//回顾以前

// UserError.prototype = new Error();
// UserError.prototype.constructor = UserError;


//课下XML  JSON