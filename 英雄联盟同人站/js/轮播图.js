var qianjin = document.getElementById('qianjin');
var houtui = document.getElementById('houtui');
// 通过这种方式简化获取事件语句
var img = document.querySelectorAll('.one_liebiao img')
// var i1 = document.getElementById('i1');
// var i2 = document.getElementById('i2');
// var i3 = document.getElementById('i3');
// var i4 = document.getElementById('i4');
// var i5 = document.getElementById('i5');
var a1 = document.getElementById('a1');
var a2 = document.getElementById('a2');
var a3 = document.getElementById('a3');
var a4 = document.getElementById('a4');
var a5 = document.getElementById('a5');
var tupian = ['images/婕拉.jpg','images/莫甘娜.jpg','images/阿狸.jpg','images/锐雯.jpg','images/女枪.jpg','images/青钢影.jpg','images/拉克丝.jpg'];
var lejie =['https://pic.netbian.com/tupian/25796.html','https://pic.netbian.com/tupian/25783.html','https://pic.netbian.com/tupian/26746.html','https://pic.netbian.com/tupian/25854.html','https://pic.netbian.com/tupian/26868.html','https://pic.netbian.com/tupian/27632.html','https://pic.netbian.com/tupian/25588.html'];
var mingzi = ['婕拉4K','莫甘娜4K','阿狸4K','锐雯4K','女枪4K','青钢影4K','拉克丝4K'];
    var num1 = 0;
    var num1_1 = 1;
    var num1_2 = 2;
    var num1_3 = 3;
    var num1_4 = 4;
qianjin.onclick = function(){
    img[0].src = tupian[num1]
    img[1].src = tupian[num1_1]
    img[2].src = tupian[num1_2]
    img[3].src = tupian[num1_3]
    img[4].src = tupian[num1_4]
    num1++
    num1_1++
    num1_2++
    num1_3++
    num1_4++
if(num1==tupian.length){
    num1 = 0;
}
if(num1_1==tupian.length){
    num1_1 = 0;
}
if(num1_2==tupian.length){
    num1_2 = 0;
}
if(num1_3==tupian.length){
    num1_3 = 0;
}
if(num1_4==tupian.length){
    num1_4 = 0;
}
}
var num2 = num1;
var num2_1 = num1_1;
var num2_2 = num1_2;
var num2_3 = num1_3;
var num2_4 = num1_4;
houtui.onclick = function(){
    img[0].src = tupian[num2]
    img[1].src = tupian[num2_1]
    img[2].src = tupian[num2_2]
    img[3].src = tupian[num2_3]
    img[4].src = tupian[num2_4]  
    num2--
    num2_1--
    num2_2--
    num2_3--
    num2_4--
if(num2==-1){
    num2 = tupian.length-1
}
if(num2_1==-1){
    num2_1 = tupian.length-1
}
if(num2_2==-1){
    num2_2 = tupian.length-1
}
if(num2_3==-1){
    num2_3 = tupian.length-1
}
if(num2_4==-1){
    num2_4 = tupian.length-1
}
}
