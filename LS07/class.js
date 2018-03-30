console.log(typeof new Function());  //实例化出一个函数，也是个（函数）对象
console.log(typeof new Array());	 //数组对象
console.log(typeof new Date());
//function
//object
//object
console.log(new Function() instanceof Object);
//true
console.log(typeof new new Function());  //object
console.log(typeof new new new Function());  //报错

function foo(x,y,z){
	console.log(foo.length);
}
foo();
//得到形参个数 3
//用arguments.length得到实参个数

var arr=[];
arr.__proto__ ===Array.prototype;
true


var x=45;
var obj={
	x:23,
	test:function(){
		function foo(){
			console.log(this.x);
		}
		var fee=foo.bind(this);
		fee();
	}
};
obj.test();  //23

var x=45;
var obj={
	x:23,
	test:function(){
		function foo(){
			console.log(this.x);
		}
		var fee=foo.bind(this);
		fee();
		foo();
	}
};
obj.test();
//23
//45


//高阶函数
function add(x,y,f){
	return f(x)+f(y);
}
add(2,3,function(x){
	return x*x;
});
//13

