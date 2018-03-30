/**
 * Created by Liyue on 2018/3/26.
 */
var x=12;
var obj = {
    x:34,
    fun2:function(){
        console.log(this.x,this);
    }
};
var fun1 = function () {
    return function fun2() {
        return this.x;//若改为 return this;
    }
};
obj.fun3 = fun1;
obj.fun4 = fun1();
console.log("输出：",obj.fun3());//输出什么
console.log("输出：",obj.fun3()());//输出什么
console.log("输出：",obj.fun4());//输出什么
//输出： ƒ fun2() {
//        return this.x;//若改为 return this;  //window
//    } 
//输出： 12  //obj
//输出： 34   //window