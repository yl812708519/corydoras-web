/**
 * Created by zhangjinpei on 16-1-19.
 */

$('document').ready(function () {
    //点击动态链接，弹出动态详情，点击关闭，收起弹窗;
    $('.dynamic-list .dynamic-link').on('click',function () {
        $('.dynamic-model').css({top: '0'});
        $('.dynamic-wrap').css({overflow: 'initial'});
        $('.footer').hide();

        //ajax请求数据
        var linkId = $(this).attr('data-id');
        console.log(linkId);
        $.ajax({
            url: "index.php?m=content&c=index&a=show&catid=8&id="+linkId,    //请求的url地址
            dataType: "html",   //返回格式为json
            async: true, //请求是否异步，默认为异步，这也是ajax重要特性
            //data: { "id": linkId },    //参数值
            type: "GET",   //请求方式
            beforeSend: function() {
                console.log('请求之前执行的事件');
            },
            success: function(data) {
                console.log('请求成功之后执行的事件');
                //var receveData = JSON.stringify(data);
                //console.log(receveData);
                $(".dynamic-content-title").remove()
                $(".dynamic-content").remove()
                $('.model-content .container').append(data);
               
            },
            error: function(data) {
                console.log('请求出错执行的事件');
            },
            complete: function() {
                console.log('请求完成，表示一次请求的完成，不管是否请求成功');
            }
        });

    });
    $('.dynamic-model .model-close,.dynamic-model .model-mask').on('click',function () {
        $('.dynamic-model').css({top: '100%'});
         $('.dynamic-wrap').css({overflow: 'hidden'});
        $('.footer').show();
    })
});
