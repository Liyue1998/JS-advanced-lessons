/**
 * Created by Liyue on 2018/5/27.
 * PPT25 事件及事件流
 */

// ~~~~~~~~~~~~Part1 JS事件及事件对象
//JS事件是浏览器或用户自身执行的某种操作，包括
//  (1)前端事件：主要包括BOM或DOM中发生的特定的交互
//  (2)常见事件：load、click、mouseover、keydown、keyup等
// ~~~~~~~~~~~~Part2 JS事件响应
// ~~~~~~~~~~~~Part3 JS事件流（冒泡、捕获）

function div1click(){
    alert("div1 click");
}

window.onload=function(){
    var div2=document.getElementById("div2");
    div2.onclick=function(){
        alert("div2 click");
    }
}