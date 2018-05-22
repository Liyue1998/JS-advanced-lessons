/**
 * Created by Liyue on 2018/5/22.
 * ---JSON对象
 */

//重点掌握两个方法
1.
JSON.stringify  将js对象转换为json字符串的方法   
/*参数说明：value：js对象
        replacer：替换对象，可以是一个方法、对象或数组，将value按照替换规则展示。
        space：填充参数，可以是数字或字符串，将value按照参数进行格式化展示。
*/
2.
JSON.parse   
/*参数说明： text： 必需，一个有效的 JSON 字符串。
            reviver:可选。 一个转换结果的函数。 将为对象的每个成员调用此函数。 
                    如果成员包含嵌套对象，则先于父对象转换嵌套对象。 对于每个成员，会发生以下情况：

            如果 reviver 返回一个有效值，则成员值将替换为转换后的值。
            如果 reviver 返回它接收的相同值，则不修改成员值。
            如果 reviver 返回 null 或 undefined，则删除成员。
*/

//~~~~~~~~~~~~~~~~~~~Part1 JSON简介
var json1='"xxx"';
var json2='23';
var json3='false';
var json4='{"x":1,"y":2,"a":[1,3,5],"b":"xyz"}';
var json5='[123,345]';
var json6='[{"z":3},[1,2]]';
var json7='{"x":true}';




//练习：写几个json对象，数组，对象，数字，字符等等
var j1 = '[{"name":"jack","obj":{"x":1,"y":2},"arr":[1,2,"3"]},2]';
var j2 = '{"x":1,"y":"2"}';
//经JSON解析工具得 j1为:
[
    {
        "name":"jack",
        "obj":
        {
            "x":1,
            "y":2
        },
        "arr":[1,2,"3"]
    },
    2
]
//  j2为：
{
    "x":1,
    "y":"2"
}


//以上传递的都是属性，方法如何传递?
//回顾创建函数的三种方法
function max(){}
var f1=function(){}
var f2=new Function("a","b","return a>b?a:b;");


//var jf='["a","b","return a>b?a:b;"]';
var af=["a","b","return a>b?a:b;"];
var max=new Function(af[0],af[1],af[2]);
max(1,4);  //4


//~~~~~~~~~~~~~~~~~~~Part2 JSON对象方法
//111111111 JSON.stringify的用法       JSON.stringify(value[,replacer[,space]])
//JSON.stringify的用法  

//案例一 复合对象转换为字符串
var o1 = {
    a:[1,2],
    b:true,
    c:[3,4,"x",{y:34,z:56}],
    d:5,
    e:{name:"Jack"},
    f:function(){console.log(12);}, //注意函数序列化问题  
                                    //转化成字符串函数f消失
    h:0x12
};
var jsonStr1 = JSON.stringify(o1);
console.log(jsonStr1);
console.log(o1);
//{"a":[1,2],"b":true,"c":[3,4,"x",{"y":34,"z":56}],"d":5,"e":{"name":"Jack"},"h":18}
//{a: Array(2), b: true, c: Array(4), d: 5, e: {…}, …}

//案例二 复合数组转换为字符串
var a1=[1,"x",true,{y:2,z:3}];
var jsonStrArr1=JSON.stringify(a1);
console.log(jsonStrArr1); // '[1,"x",true,{"y":2,"z":3}]'
console.log(a1); // [1, "x", true, {…}]
//所以
// JSON.stringify(value)作用就是
//将参数value（即js对象）转化成json字符串


//2222222222 JSON.parse的用法         JSON.parse(text[,reviver])

//JSON.parse的用法 案例一
var jsonStr3 = '{"a":[1,2],"b":true,"c":[3,4,"x",{"y":34,"z":56}],"d":5,"e":{"name":"Jack"}}';
var jsonStr4 = '[1,"x",true,{"y":2,"z":3}]';
var o3 = JSON.parse(jsonStr3);
var o4 = JSON.parse(jsonStr4);
console.log(o3,o4);
//  {a: Array(2), b: true, c: Array(4), d: 5, e: {…}}
//  [1, "x", true, {…}]
//所以
//  JSON.parse(text)作用就是
//将参数text（即json字符串）转化成js对象





//3333333333333333333333333333 JSON.stringify与JSON.parse——进阶
//~~~~~~~~~~~~~~~~~~~JSON.stringify之replacer参数
1.
function replacer(key,value){
	if(typeof value==="string"){
        return undefined;       //将value中值类型为string的值设置为undefined
                                //设置成undefined时，js对象中的部分属性会消失
                                //而设置成null时，则不会消失
                                //详见2.
	}
	return value;
}
var foo={
	model:"box",
	week:45,
	transport:"car",
	month:7
};
var jsonString1=JSON.stringify(foo,replacer);
console.log(jsonString1);
//{"week":45,"month":7}

2.
function replacer(key,value){
	if(typeof value==="string"){
		return null;              //与1.中undefined区别
	}
	return value;
}
var foo={
	model:"box",
	week:45,
	transport:"car",
	month:7
};
var jsonString1=JSON.stringify(foo,replacer);
console.log(jsonString1);
//{"model":null,"week":45,"transport":null,"month":7}


//~~~~~~~~~~~~~~~~~~~JSON.parse之reviver参数
1.
var o7=JSON.parse(
	'{"p":5,"x":1}',function(k,v){
		if(k==='p') return 2*v;
		if(k==='x') return 3*v;
		if(k==='') return v;
	}
);
console.log(o7);
//{p: 10, x: 3}
2.
var o8=JSON.parse(
	'{"1":1,"2":2,"3":{"4":4,"5":{"6":6}}}',
	function(k,v){
        console.log(k);  //输出当前属性名，从而得知遍历顺序是由内向外的
                         //最后一个属性名会是一个空字符串
		return v;  //返回原始属性值，相当于没有传reviver参数
	}
);
console.log(o8);
//1
//2
//4
//6
//5
//3



//~~~~~~~~~~~~~~~~~~~Part3 JSON案例

//其他案例
JSON.stringify({});                        // '{}'
JSON.stringify(true);                      // 'true'
JSON.stringify("foo");                     // '"foo"'
JSON.stringify([1, "false", false]);       // '[1,"false",false]'
JSON.stringify({ x: 5 });                  // '{"x":5}'

JSON.stringify({x: 5, y: 6});              
// "{"x":5,"y":6}"

JSON.stringify([new Number(1), new String("false"), new Boolean(false)]); 
// '[1,"false",false]'

/*  ???????????????
JSON.stringify({x: undefined, y: Object, z: Symbol("")}); 
// '{}'
JSON.stringify([undefined, Object, Symbol("")]);          
// '[null,null,null]' 
*/

JSON.parse('{}');              // {}
JSON.parse('true');            // true
JSON.parse('"foo"');           // "foo"
JSON.parse('[1, 5, "false"]'); // [1,5,"false"]
JSON.parse('null');            // null
JSON.parse('1');               // 1