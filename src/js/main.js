$(document).ready(function () {
    //导航条对应菜单高亮
    autoActive('whichPages', 'navbar');
    function autoActive(flagName, navbarId) {
        var pagesValueArray = creadNavArray(navbarId);
        autoAddClass(flagName, pagesValueArray);
    }

    //根据当前页面唯一值，判断是哪个页面，添加高亮样式
    function autoAddClass(flagName, pagesValueArray) {
        var pageValue = $('input[name=' + flagName + ']').val();
        for (var i = 0, j = pagesValueArray.length; i < j; i++) {
            if (pageValue == pagesValueArray[i]) {
                $('#' + pagesValueArray[i]).addClass('active');

            }
        }
    }

    //将导航栏的id存入到一个数组中
    function creadNavArray(navbarId) {
        var navArray = [];
        var navbar = $('#' + navbarId + ' li');
        for (var i = 0, j = navbar.length; i < j; i++) {
            var navbarChildrenId = navbar.eq(i).attr('id');
            navArray.push(navbarChildrenId);
        }
        return navArray;
    }

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


    //导航栏滑动一定距离添加白底
    var scrollFunc = function (e) {
        e = e || window.event;
        if($(window).scrollTop()>250) {
            $(".nav").addClass('nav-change-color');
        }else {
            $(".nav").removeClass('nav-change-color');
        }
    };
});
