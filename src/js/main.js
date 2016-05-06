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


    //导航栏滑动一定距离添加底色
    var scrollFunc = function (e) {
        e = e || window.event;
        if($(window).scrollTop()>250) {
            $(".nav").addClass('nav-change-color');
        }else {
            $(".nav").removeClass('nav-change-color');
        }
    };

    //首页背景图渐渐变大
    $(".full-screen-bg").css({
        "transform": "scale(1.1)"
    });
});
