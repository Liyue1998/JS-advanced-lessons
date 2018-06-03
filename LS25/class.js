/**
 * Created by Liyue on 2018/5/28.
 * 事件流
 */
/*
DOM0级
onclick
给同一个节点加两个点击事件，后一个会覆盖掉第一个

DOM2级
click
给同一个节点加两个点击事件，都会执行，不会覆盖


事件响应的兼容性问题


事件流（冒泡、捕获）
*/

/*
window.onload = function (e) {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");

    div1.addEventListener("click",function (e) {
        console.log("div1 click");
    },false);//第3个参数可以不写，默认为false

    div2.addEventListener("click",function (e) {
        console.log("div2 click");
    },false);

    document.addEventListener("click",function (e) {
        console.log("document click");
    },false);

    document.body.addEventListener("click",function (e) {
        console.log("body click");
    },false);
}//2 1 b d
*/

//b 1 2 d
//d b 2 1
//b 2 1 d  false false false true


/*
//事件流~取消冒泡 stopPropagation
window.onload = function (e) {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");

    div1.addEventListener("click",function (e) {
        console.log("div1 click");
        e.stopPropagation();  //取消冒泡
    },false);//第3个参数可以不写，默认为false

    div2.addEventListener("click",function (e) {
        console.log("div2 click");
    },false);

    document.addEventListener("click",function (e) {
        console.log("document click");
    },false);

    document.body.addEventListener("click",function (e) {
        console.log("body click");
    },false);
}//2 1
*/

//输出b 2 1 
window.onload = function (e) {
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");

    div1.addEventListener("click",function (e) {
        console.log("div1 click");
        e.stopPropagation();    //取消冒泡
    },false);//第3个参数可以不写，默认为false

    div2.addEventListener("click",function (e) {
        console.log("div2 click");
    },false);

    document.addEventListener("click",function (e) {
        console.log("document click");
    },false);

    document.body.addEventListener("click",function (e) {
        console.log("body click");
    },true);
} //b 2 1


//事件流~取消默认事件 preventDefault