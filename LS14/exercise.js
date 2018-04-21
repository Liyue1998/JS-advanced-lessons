/**
 * Created by Liyue on 2018/4/21.
 */


//生成对象的3中方式
//字面量直接生成对象
var obj={
	num:10,
	str:"Hi",
	show:function(){
		console.log(this.str);
	}
};
//Object静态方法生成对象
var subObj=Object.create(obj);
subObj.age=23;
//构造函数生成对象
function Person(age,name){
	this.age=age;
	this.name=name;
}
Person.prototype.sayHi=function(){
	console.log("Hi,I'm "+this.name);
}
var p1=new Person(20,"Jame");
p1.sayHi();
//Hi,I'm Jame

var objProto={
	z:3
};
var obj=Object.create(objProto);
obj.x=1;
obj.y=2;
console.log(obj.x);  //1
console.log(obj.y);  //2
console.log(obj.z);  //3
console.log(obj.toString);  //ƒ toString() { [native code] }  //原型链上有toString属性
for(var k in obj)
{
	console.log(k,obj[k]);
}  //遍历不到toString属性
//x 1
//y 2
//z 3



//JS对象属性（数据属性）的特性
var obj={
	x:1,
	y:2
};
obj.z=3;
Object.defineProperty(obj,"w",{
	value:456,
	configurable:true
});
for(var k in obj){
	console.log(k,obj[k]);
}
//x 1
//y 2
//z 3



var obj={
	x:1,
	y:2
};
obj.z=3;
Object.defineProperty(obj,"w",{
	value:456,
	configurable:true,
	writable:true
});
for(var k in obj){
	console.log(k,obj[k]);
}
//x 1
//y 2
//z 3



var obj={
	x:1,
	y:2
};
obj.z=3;
Object.defineProperty(obj,"w",{
	value:456,
	configurable:true,
	writable:true,
	enumerable:true
});
for(var k in obj){
	console.log(k,obj[k]);
}
//x 1
//y 2
//z 3
//w 456



var obj={
	x:1,
	y:2
};
obj.z=3;
Object.defineProperty(obj,"w",{
	value:456,
	configurable:true,
	enumerable:true
});
for(var k in obj){
	console.log(k,obj[k]);
}
//x 1
//y 2
//z 3
//w 456


//JS 对象之扩展、密封及冻结（级别逐渐升高）
//一个对象默认是可扩展的,所以他也是非冻结的.
//一个不可扩展的空对象同时也是一个冻结对象.一个不可扩展的空对象也是密封对象
//对冻结对象的任何操作都会失败