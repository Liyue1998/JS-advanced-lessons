/**
 * Created by Liyue on 2018/4/25.
 */


//__proto__ 和 prototype的区别
////////////////////
function MyObj() { }
MyObj.prototype.z = 3;

var obj = new MyObj();
obj.x = 1;
obj.y = 2;

console.log(obj.x);//1
console.log(obj.y);//2
console.log(obj.z);//3

console.log("z" in obj);//true
console.log(obj.hasOwnProperty("z"));//false

//////////////////////
function MyObj() { }
MyObj.__proto__.z = 3;

var obj = new MyObj();
obj.x = 1;
obj.y = 2;

console.log(obj.x);//1
console.log(obj.y);//2
console.log(obj.z);//undefined

console.log("z" in obj);//false
console.log(obj.hasOwnProperty("z"));//false
