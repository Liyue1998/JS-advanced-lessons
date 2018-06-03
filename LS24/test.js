window.onload=function(){   //窗体加载事件
    console.log("window.onload");
    var div1=document.getElementById("div1");
    div1.onclick=function(){   //点击事件
        console.log("div1 onclick");
    }
};
/*
div1.ondrag=function(){
    console.log("div1 ondrag");
}  //拖动事件  实现时注释掉点击事件
*/

/*
这样写不可以 
window.onload=function(){   //窗体加载事件
    console.log("window.onload");
}
var div1=document.getElementById("div1");
div1.onclick=function(){   //点击事件
    console.log("div1 onclick");
}
*/

//1111111111111111111111111111111
window.onload=function (e){   
    console.log(e.target);
    console.log(this);
    var div1=document.getElementById("div1");
    div1.onclick=function(e){   
        console.log(e.clientX,e.clientY,e.ctrlKey);
        //console.log(e);
        //console.log(e.type);
        //console.log(e.target);
        //console.log(e.target,this);//this指的是事件的监听者
        
        console.log(e.hasOwnProperty("target"));  //false
        console.log(e.__proto__.__proto__.__proto__.hasOwnProperty("target"));  //true
        //console.log(e);
        //console.log(e.__proto__);
        //console.log(e.__proto__.__proto__);
        //console.log(e.__proto__.__proto__.__proto__);
    }
};


//22222222222222222222222222222222
window.onload=function (e){   
    console.log(e.target);
    console.log(this);
    var div1=document.getElementById("div1");
    div1.onclick=function(e){   
        console.log(e.clientX,e.clientY,e.ctrlKey);
    }
};

//e.clientX,e.clientY这些属性定义到MouseEvent上


//  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ DOM2级
window.onload=function(e){  
    console.log("window.onload");
    var div1=document.getElementById("div1");
    function clickHandler(e){
        console.log(e.target);
    }
    div1.addEventListener("click",clickHandler);  //绑定事件
    div1.removeEventListener("click",clickHandler); //取消该事件
};