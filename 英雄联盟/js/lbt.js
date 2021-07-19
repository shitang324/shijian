var img1 = document.getElementById("lbt");
// 用对象无法调用出值，待商榷
// var tupian = {img1:"images/婕拉.jpg", 
//               img2:"images/阿狸.jpg", 
//               img3:"images/锤石.jpg",
//               img4:"images/拉克丝.jpg",
//               img5:"images/青钢影.jpg",
//               img6:"images/锐雯.jpg"};
// 暂时改用数组，通过下标取值
/*var tupian = ["images/婕拉.jpg",
            "images/阿狸.jpg",
            "images/锤石.jpg",
            "images/拉克丝.jpg",
            "images/青钢影.jpg",
            "images/锐雯.jpg"]*/
// setInterval(jishu, 1000);
// 这个闭包不起作用，暂时搁置，尝试用闭包单做一个计数器，待日后更正错误 报错：Uncaught TypeError:
// add is not a function
var jishu = (function chufa() {
    var i = 1;
    var tupian = ["images/婕拉.jpg",
            "images/阿狸.jpg",
            "images/锤石.jpg",
            "images/拉克丝.jpg",
            "images/青钢影.jpg",
            "images/锐雯.jpg"]
    return function(){
        if(i==6){
            i = 0;
            return i;
        }else{
            img1.src = tupian[i]
            i += 1;
            return i;
        }
    }
})();
setInterval(jishu, 1000);
// 单使用闭包做一个计数器
/*var jishu = (function () {
    var i = 1;
    return function () {
        if(i < 5){
            i += 1;
            return i;
        }else{
            i = 0;
            return i;
        }
    }
})();
var a = jishu();
img1.src = tupian[a];*/
/*var tupian = {img1:"images/婕拉.jpg", 
            img2:"images/阿狸.jpg", 
            img3:"images/锤石.jpg",
            img4:"images/拉克丝.jpg",
            img5:"images/青钢影.jpg",
            img6:"images/锐雯.jpg",
            jishu:function(){
                var i = 2;

            }}; 
setInterval(jishu , 1000);*/  
