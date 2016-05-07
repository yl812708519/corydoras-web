$(document).ready(function () {
    //小屏幕小展开收起菜单
    $(".show-menu-icon").on("click",function () {
        if ($(".nav-menu").hasClass("show-menu")) {
            $(".nav-menu").removeClass("show-menu");
        }else {
            $(".nav-menu").addClass("show-menu");
        }
    });
    $(".erweima").on("mouseenter",function () {
        $(".nav-menu").css({"overflow":"inherit"});
    });
    $(".erweima").on("mouseleave",function () {
        $(".nav-menu").css({"overflow":"hidden"});
    });


    //如果是首页就给body添加高度
    if ($("input[name='whichPages']").val() == 'indexPage') {
        $('html,body').css({height: '100%',width: '100%',overflow: 'hidden'})
    }

    window.onscroll = function(){
        var t = document.documentElement.scrollTop || document.body.scrollTop;
        var top_div = document.getElementById( "top_div" );
        if( t >= 250 ) {
            $(".nav").addClass('nav-change-color');
            $('.brand').css({padding: '10px 0'});
        } else {
            $(".nav").removeClass('nav-change-color');
            $('.brand').css({padding: '35px 0'});
        }
    }

    //首页背景图渐渐变大
    $(".full-screen-bg").css({
        "transform": "scale(1.1)"
    });
});
