/**
 * Created by Liyue on 2018/4/19.
 */


//回顾 
var obj1={x:1};
var obj2=Object.create(obj1);  //通过静态方法实例化出对象 //obj1是obj2的原型
obj2.y=2;
var obj3=function(){this.z=3;};
var obj3=new obj3();


//JS对象属性特性及其设置
//defineProperty方法设置enumerable
var obj={
	x:1,
	y:2
};
for(var k in obj)
{
	console.log(k,obj[k]);
}
//x 1
//y 2
//上下对比~~~~~~~~~
var obj={
	x:1,
	y:2
};
Object.defineProperty(obj,"x",{enumerable:false});
//设置属性的特性（defineProperty方法设置enumerable）
for(var k in obj)
{
	console.log(k,obj[k]);
}
//y 2


//configurable可配置
//设置属性特性实例（writable与configurable）
var person={name:"Jack"};
Object.defineProperty(person,"name",{
	writable:false,
	configurable:false,
	enumerable:true,
	value:"Mike"
});
console.log(person.name);
person.name="Lucy";
console.log(person.name);
delete person.name;
console.log(person.name);
//Mike
//Mike
//Mike

//给对象添加属性
var obj={
	x:1,
	y:2
};
obj.z=3;  // 方式一：直接添加
Object.defineProperty(obj,"w",{  //方式二：通过Object.defineProperty添加
	value:456,
	configurable:true
});
for(var k in obj){
	console.log(k,obj[k]);
}
//x 1
//y 2
//z 3
//此时访问不到w
//因为通过Object.defineProperty添加时，属性特性默认为false，除非手动设置为true


//通过Object.defineProperty来添加和改变的get /set的属性特性
//添加访问器
var obj1={
	_name:"Lucy"
};
Object.defineProperty(obj1,"name",{
	get:function(){  //只定义了get 特性，因此只能读不能写
		return this._name;
	}
});
console.log(obj1.name);
obj1.name="Jack";  //只定义了getter访问器，因此写入失效
console.log(obj1.name);
//Lucy
//Lucy


//属性特性描述符
//及属性特性补充部分
//属性特性描述符是一个用来查看对象属性的特性的对象
//该对象包含4个属性，对应4个特性，通过getOwnPropertyDescriptor方法获得
//value,writable,configurable,enumerable


//给多个属性设置特性的方法（Object.defineProperties）








var obj2=Object.create({x:1});
obj2.y=2;
Object.defineProperty(obj2,"z",{value:3});
console.log(Object.keys(obj2));
console.log(Object.getOwnPropertyNames(obj2));
//["y"]
//["y", "z"]
