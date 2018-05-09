/**
 * Created by Liyue on 2018/5/3.
 */

var arr2=new Array(5);
console.log(arr2);
//(5) [empty × 5]
//思考：
var arr2=new Array("5");
console.log(arr2);
//["5"]


var arr22=[];
for(var i=0;i<5;i++)
{
	document.onclick=function(){
		arr22[i]=i;
	}
}
ƒ (){
		arr22[i]=i;
	}
arr22;
//(6) [empty × 5, 5]


var a1=[1,2,3];
var a2=a1;
a2.length=0;
console.log(a1,a2);
//[] []
//a1是对象，a1，a2指向的是同一块空间
//所以a1也变为空

var a3=[1,2,3];
var a4=a3;
a4=[];
console.log(a3,a4);
//(3) [1, 2, 3] []
//a4=[];表明a4重新开辟了一块内存


//数组元素的增删改查的基本操作
//删除时，delete方法删除不彻底，长度没有变
var arr=[1,2,3];
delete arr[2];
console.log(arr);
//(3) [1, 2, empty]
//pop()方法：  删除并返回数组的最后一个元素
var arr=[1,2,3];
var p=arr.pop();
console.log(p);
//3

var i=2,b=[];
b[i]=3;
b[i+1]="YY";
b[b[i]]=b[0];
console.log(b);
//(4) [empty × 2, 3, undefined]


var arr=[];
arr[-1.23]="xx";
arr[-1.23];
//"xx"
arr.hasOwnProperty("-1.23");
//true
console.log(arr);
//[-1.23: "xx"]     键值对的形式，也说明-1.23是属性
//-1.23是作为属性来看待，而不是数组的元素

//arr[-1.23]="xx";时
var arr=[];
arr[-1.23]="xx";
arr[5]="yy";
console.log(arr);
//(6) [empty × 5, "yy", -1.23: "xx"]
//arr[1.23]="xx";时
var arr=[];
arr[1.23]="xx";
arr[5]="yy";
console.log(arr);
//(6) [empty × 5, "yy", 1.23: "xx"]
//arr[1.00]="xx";时
var arr=[];
arr[1.00]="xx";
arr[5]="yy";
console.log(arr);
//(6) [empty, "xx", empty × 3, "yy"]


function f(){
	console.log(arguments);
}
f(1,2,3,"x");
//Arguments(4) [1, 2, 3, "x", callee: ƒ, Symbol(Symbol.iterator): ƒ]


//稀疏数组，长度问题；遍历不到的问题
var a2=new Array(3);
console.log(a2.length);
//3
var a3=[,,];
console.log(a3.length);
//2

var a1 = [,"abc"];
console.log(a1.length);
for(var i in a1){
    console.log(i,a1[i]);//输出几个元素
}
console.log(0 in a1,1 in a1);
//2
//1 abc
//false true


var table=new Array(5);
for(var i=0;i<table.length;i++){
	table[i]=new Array(5);
}
for(var row=0;row<table.length;row++){
	for(var col=0;col<table[row].length;col++){
		table[row][col]=row*col;
	}
}
var product=table[2][4];
console.log(table);
//(5) [Array(5), Array(5), Array(5), Array(5), Array(5)]
/*
0
:
(5) [0, 0, 0, 0, 0]
1
:
(5) [0, 1, 2, 3, 4]
2
:
(5) [0, 2, 4, 6, 8]
3
:
(5) [0, 3, 6, 9, 12]
4
:
(5) [0, 4, 8, 12, 16]
*/


//数组的方法和相关高阶函数

var arr3 = [-1,-20,7,50];
arr3.sort();
//(4) [-1, -20, 50, 7]  不准确

var arr3 = [-1,-20,7,50];
arr3.sort(function(a,b){return a>b});
console.log(arr3);
//(4) [-20, -1, 7, 50]  正确


var arr8 = [1,3,5,5,7,9,5];
console.log(arr8.indexOf(5));//输出几？
console.log(arr8.indexOf(5,3));//输出几？
console.log(arr8.indexOf(5,5));//输出几？
//2
//3
//6


