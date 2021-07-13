var xiala1 = document.getElementById('xiala1');
var xialaliebiao1 = document.getElementById('xialaliebiao1');
var xialacaidan1 = document.getElementById('xialacaidan1')
// .onmouseover检测鼠标移入，.onmouseout检测鼠标移出
xialacaidan1.onmouseover = function(){
    xialaliebiao1.style.display='block'
}
xialacaidan1.onmouseout =function(){
    xialaliebiao1.style.display='none'
}
// var onoff = true;
// .onclick检测点击事件
// xiala1.onclick = function(){
//     if(onoff){
//         xialaliebiao1.style.display='block'
//     }else{
//         xialaliebiao1.style.display='none'
//     }
//     onoff = !onoff
// }
