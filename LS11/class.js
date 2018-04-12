/**
 * Created by Liyue on 2018/4/9.
 */

 //立即执行表达式 与运算符结合的写法
0 && function(a,b){
	return a>b?a:b;
}(5,9);  //0

!function(x,y){
	return x==y?true:false;
}("5",5);  //false

!function(x,y){
	return x===y?true:false;
}("5",5);  //true

!function(x,y){
	return x===y?true:false;
}(new Object(),new Object());  //true

//立即执行表达式后要加；

