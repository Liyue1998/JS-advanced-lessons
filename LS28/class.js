/**
 * Created by Liyue on 2018/6/7.
 */


//let与const的重要特性 PPT27
var temp = new Date();
function f() {
    console.log(temp);
    if(false){
        var temp = "Hi!";
    }
}
f();
//undefined
//等价于：
var temp = new Date();
function f() {
	var temp;
    console.log(temp);
    if(false){
        temp = "Hi!";
    }
}
f();
//undefined
// var换成let：
var temp = new Date();
function f() {
    console.log(temp);
    if(false){
        let temp = "Hi!";
    }
}
f();
//Thu Jun 07 2018 08:09:24 GMT+0800 (中国标准时间)

var temp = new Date();
function f() {
    console.log(temp);
    if(false){
        let temp = "Hi!";
    }
}
f();

//暂存区锁死特性:   (暂时性死区特征)
var temp = new Date();
function f() {
    console.log(temp);
    let temp = "Hi!";
}
f();  //会报错 "temp is not defined"
//用let定义变量时，let所在的块会发生锁死，即变量的声明出现在使用之前，否则会报错。
//发生锁死：使用变量时，系统会在锁死的块内寻找变量，而不会去外层寻找。
//所以   let 先声明，后使用！


//let不能重复定义变量
let a=1;
let a=2; //报错 'a has already declared'


//ES6中变量的解构赋值 PPT28
//不用解构赋值方式定义变量
var a = 1;var b = 2;var c = 3;
console.log(a,b,c);  //1,2,3

//用解构赋值方式定义变量
//Part 1111111111111111 数组的解构赋值
var [a, b, c] = [1, 2, 3];
console.log(a,b,c);  //1,2,3


//let 也支持解构赋值
let [a,b,[c],d]=[2,3,[true],"ab"];
console.log(a,b,[c],d);
//2 3 [true] "ab"

var [foo2]=[];
var [bar2,fee2]=[1];
console.log(foo2,fee2,bar2);
//undefined undefined 1


let [head, ...tail] = [1, 2, 3, 4];
console.log(head,tail);
//1  [2, 3, 4]
//
let [head, tail] = [1, 2, 3, 4];
console.log(head,tail);
//1  2

let [d, e, ...f] = ['a'];
console.log(d,e,f);
//"a" undefined []

/*
var a; //变量声明
var b=1; //变量声明加定义  （完整的变量定义）
*/

//让a和b互换值  利用解构赋值
var a=[1],b=["2"];
console.log(a,b);  //[1] ["2"]
[a,b]=[b,a];
console.log(a,b);  //["2"] [1]


//解构赋值中的默认值
//判断默认值时，采用严格等(===)
//如果
var [foo3 = true] = [];//foo3 为 true  //相当于var [foo3 = true] = [undefined];
[x3, y3 = 'b'] = ['a']; // x3='a', y3='b'
[x4, y4 = 'b'] = ['a',undefined]; // x4='a'y4='b'
   [x4, y4 = 'b'] = ['a',null]; // x4='a'y4=null

//
function f2() {
    return 2;
}
let [x7 = f2()] = [1];
console.log(x7);        //1

function f2() {
    return 2;
}
let [x7 = f2()] = [];
console.log(x7);       //2  

let [m1 = 1, n1 = m1] = [];
let [m2 = 1, n2 = m2] = [2]; 
let [m3 = 1, n3 = m3] = [1, 2]; 
//let [m4 = n4, n4 = 1] = []; //会报错 "n4 is not defined" 因为n4在定义之前就使用了
console.log(m1,n1,m2,n2,m3,n3);
//1 1 2 2 1 2

var [m4=n4,n4=1]=[];
console.log(m4,n4);
//undefined 1

let [m4=n4,n4=1]=[];
console.log(m4,n4); 
//会报错 "n4 is not defined"
//
let [m4=n4,n4=1]=[5];
console.log(m4,n4);
//5 1

let a = [];
let b=[2,3,4];
[a[0],a[1],a[2]] = b;
console.log(a);
console.log(a == b);
//(3) [2, 3, 4]
//false

let a = [];
let b=[1,2,3,4,5];
[a[0],,a[1],,a[2]] = b;
console.log(a);
console.log(a == b);
//(3) [1, 3, 5]
//false


//对象的解构赋值
var { foo1, bar1 } = { foo1: "aaa", bar1: "bbb" };
console.log(foo1,bar1);
//aaa bbb
//等价于：
var { foo1:foo1, bar1:bar1 } = { foo1: "aaa", bar1: "bbb" };
console.log(foo1,bar1);


//左侧为键值对时,注意键值对赋值时的对应关系
var { foo4: baz4 } = { foo4: 'aaa', bar4: 'bbb' };
console.log(baz4);
//aaa

let obj1 = { first: 'hello', last: 'world' };
let { first: f, last: m } = obj1;
console.log(f,m);
//hello world

let obj1 = { first: 'hello', last: 'world' };

let { first: f, last: l } = obj1;
console.log(f,l);
//hello world


var obj2 = {
    p: [
        'Hello',
        { y: 'World' }
    ]
};
var { p: [x, { y }] } = obj2; //p只是用来匹配的：将['Hello',{ y: 'World' }]赋给[x, { y }]
console.log(x);  //'Hello'
console.log(y);  //'World'
//console.log(p);  //报错 "p is not defined"
//p只是用来匹配的，并不是一个变量，所以会报错
//
var obj2 = {
    p: [
        'Hello',
        { y: 'World' }
    ]
};
var {p} = obj2;  //var {p:p}=obj2;
console.log(p);
//(2) ["Hello", {…}]


//对象的解构也可以指定默认值。
var {x2 = 3} = {};
console.log(x2); // 3

var {x3, y3 = 5} = {x3: 1};
console.log(x3); // 1
console.log(y3); // 5

var {x4:y4 = 3} = {};
console.log(y4); // 3

var {x5:y5 = 3} = {x5: 5};
console.log(y5); // 5
var { message: msg = 'Something went wrong' } = {};
console.log(msg); // "Something went wrong"


//字符串的解构赋值


//参数的解构赋值
//案例一
function move1({x = 0, y = 0} = {}) {
    return [x, y];
}
console.log(move1({x: 3, y: 4})); // [3, 4]
console.log(move1({x: 3})); // [3, 0]
console.log(move1({})); // [0, 0]
console.log(move1()); // [0, 0]

//案例二
function move2({x, y} = { x: 0, y: 0 }) {
    return [x, y];
}
console.log(move2({x: 3, y: 8})); // [3, 8]
console.log(move2({x: 3})); // [3, undefined]
console.log(move2({})); // [undefined, undefined]
console.log(move2()); // [0, 0]


//解构赋值的常见应用及注意事项

//解构赋值的常见应用一
//1.交换变量
var [x,y]=["a","b"];
[x,y]=[y,x];
console.log(x,y);
//b a
//2.从函数中返回多个值
//函数只能返回一个值，如果要返回多个值，只能将它们放在数组或对象里返回
function example(){
    return [1,2,3];
}
var [a,b,c]=example();
console.log(a,b,c);
//1,2,3

//解构赋值的常见应用二
//1.提取JSON数据
var jsonData={id:42,status:"OK",data:[867,5309]};
let {id,status,data:number}=jsonData;
console.log(id,status,number);
// 42,"OK",[867,5309]

//2.给函数指定默认函数
jQuery.ajax=function(url,{
    async=true,
    beforeSend=function(){},
    cache=true,
}) {
    //...
}



//字符串也可以解构赋值
const [a, b, c, d, e] = 'hello';//相当于将'hello'转成了["h","e","l","l","o"]后解构
console.log(a); // "h"
console.log(b); // "e"
console.log(c); // "l"
console.log(d); // "l"
console.log(e); // "o"

//类似数组的对象都有一个length属性，因此还可以对这个属性解构赋值。
let {length : len} = 'hello';
console.log(len); // 5