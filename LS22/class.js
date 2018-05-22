/**
 * Created by Liyue on 2018/5/17.
 * ---JSON对象
 */


//在json中，方法如何传递？回顾Function构造函数和创建函数的3种方式
var foo = new Function("x","y","return x>y?x:y;");
foo(2,3);


//var jf = '["x","y","return x<y?x:y;"]';
var af = ["x","y","return x<y?x:y;"];
var fee = new Function(af[0],af[1],af[2]);
fee(2,3);



//JSON对象方法（基本用法）
//JSON.stringify(value [,replacer [,space] ] )
//1
var obj1={
    a:[{x:1,y:[12,6,{t:true}]},"false"],b:34
};
var json1=JSON.stringify(obj1);
console.log(obj1);
console.log(json1);
//{a: Array(2), b: 34}
//{"a":[{"x":1,"y":[12,6,{"t":true}]},"false"],"b":34}var obj1={
//    a:[{x:1,y:[12,6,{t:true}]},"false"],b:34
//};
var json1=JSON.stringify(obj1);
console.log(obj1);
console.log(json1);
//{a: Array(2), b: 34}
//{"a":[{"x":1,"y":[12,6,{"t":true}]},"false"],"b":34}
//2
var a1=[1,"x",true,{y:2,z:3}];
var jsonStrArr1=JSON.stringify(a1);
console.log(jsonStrArr1);
console.log(a1);
//[1,"x",true,{"y":2,"z":3}]
//(4) [1, "x", true, {…}]


//JSON.parse(text [,reviver])
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~·~~~``编辑


//JSON对象方法（进阶）
//JSON.stringify(value [,replacer [,space] ] )
function replacer(key,value){
	if(typeof value==="string")
    {
		return undefined;
	}
	return value;
}
var foo={
	model:"box",
	week:45,
	transport:"car",
	month:7
};
var jsonString1=JSON.stringify(foo,replacer);
console.log(jsonString1);
//{"week":45,"month":7}
//2
function replacer(key,value){
	if(typeof value==="string")
    {
		return null;
	}
	return value;
}
var foo={
	model:"box",
	week:45,
	transport:"car",
	month:7
};
var jsonString1=JSON.stringify(foo,replacer);
console.log(jsonString1);
//{"model":null,"week":45,"transport":null,"month":7}


