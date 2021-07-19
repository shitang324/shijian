/*var xiala = document.querySelector('.xiala')
var xiangqing = document.querySelector('.xiangqing')
xiala.onmouseover = function (){
    xiangqing.style.display = 'block'
}
xiala.onmouseout = function(){
    xiangqing.style.display = 'none'
}
xiangqing.onmouseover = function(){
    xiangqing.style.display = 'block'
}
xiangqing.onmouseout = function(){
    xiangqing.style.display = 'none'
}*/
// 用jquery库实现下拉菜单
// 有问题，会闪烁，待解决
/*$(document).ready(function(){
$(".xiala").mouseover(function(){
    $(".xiangqing").show(100);
})
$(".xiala").mouseout(function(){
    $(".xiangqing").hide(100);
})
$(".xiangqing").mouseover(function(){
    $(".xiangqing").show(100);
})
$(".xiangqing").mouseout(function(){
    $(".xiangqing").hide(100);
})
})*/
// 用jquery库实现滑动动画效果,稳定，不再闪烁，退出事件用总div，同时使用mouseenter事件绑定
$(document).ready(function(){
    $(".xiala").mouseenter(function(){
        $(".xiangqing").slideDown("slow");
    })
    $(".beijin").mouseleave(function(){
        $(".xiangqing").slideUp("slow");
    })
})