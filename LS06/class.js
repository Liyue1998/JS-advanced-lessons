//   LS07/demo01.js   函数定义方式
//Function相当于一个构造函数，用于实例化对象，只不过实例化出来的对象也是一个函数
//类似于Array
1.
var max = new Function("a","b","return a>b?a:b");
max(2,3);
3
var str="return a<b?a:b";
var min=new Function("a","b",str);
min(2,3);
2

2.
var add=function(a,b){
	return a+b;
}
add(1,9);  //10

var add1=new Function("a","b","return a+b");
add1(2,8);  //10

var str="return a+=1";
var add2=new Function("a",str);
add2(5);  //6


//   LS07/demo02.js
//   函数调用方法
1.
 var x=45;
 var test=function(){
     console.log("输出：",this.x);
 }
 var obj={
     x:23
 };
 obj.test=test;
 obj.test();  //23
 test();  //45

2.
var x=45;
var obj={
	x:23,
	test:function(){
		function foo(){
			console.log(this.x);
		}
		foo();
	}
};
obj.test();  //45

3.  //间接调用
var objA={
	name:"AA"
};
var objB={
	name:"BB"
};
objA.foo=function(){
	console.log(this.name);
};
objA.foo();
objA.foo.call(objB);
objA.foo.apply(objB);
//AA
//BB
//BB


//间接调用 实例二 移花接木 吸星大法
var fish = {
    name:"fish",
    swim:function (m,n) {
        console.log("i'm "+this.name+" i cam swim ___",m,n);
    }
};

var bird = {
    name:"polly",
    fly:function(m,n){
        console.log("i'm:"+this.name+" i can fly ___",m,n);
    }
};

var me = {
    name:"ABC"
};

bird.fly(5,6);
fish.swim.call(me,3,4);
bird.fly.call(me,7,8);
//swim(1,2);与swim.call(null,1,2);相同
bird.fly.apply(me,[7,8]);
bird.fly.apply(null,[7,8]);

