## 三斤耗儿鱼官网

整个网站主要以静态页面为主，只有新闻列表页是动态数据。另外，需求是想要兼IE8+，同时最好适配手机端。因此，这个项目中引入了兼容性比较好的插件，以及静态页面的模板。

## 静态页面模板　HTML5 ★ BOILERPLATE

随着页面越做越多，发现页面重复的部分还是挺多的，为了节省时间，有必要将重复的部分弄成模板，方便下次开发。幸运的是，已经有人做了这件事，而且还做的很好，
于是就直接拿来用了。[HTML5 ★ BOILERPLATE](http://www.bootcss.com/p/html5boilerplate/)最流行的web开发前端模版

## 全屏滚动　fullPage

是一个基于 jQuery 的插件，它能够很方便、很轻松的制作出全屏网站。

**使用方法：**

1.引入文件

```html
<link rel="stylesheet" href="css/jquery.fullPage.css">
<script src="js/jquery.min.js"></script>

<!-- jquery.easings.min.js 是必须的，用于 easing 参数，也可以使用完整的 jQuery UI 代替 -->
<script src="js/jquery.easings.min.js"></script>

<!-- 如果 scrollOverflow 设置为 true，则需要引入 jquery.slimscroll.min.js，一般情况下不需要 -->
<script src="js/jquery.slimscroll.min.js"></script>

<script src="js/jquery.fullPage.js"></script>

```


2.HTML

```html

<div id="fullpage">
    <div class="section">第一屏</div>
    <div class="section">第二屏</div>
    <div class="section">
        <div class="slide">第三屏的第一屏</div>
        <div class="slide">第三屏的第二屏</div>
        <div class="slide">第三屏的第三屏</div>
        <div class="slide">第三屏的第四屏</div>
    </div>
    <div class="section">第四屏</div>
</div>

```

3.JavaScript

```javascript

$(function(){
    $('#fullpage').fullpage();
});

```

## 轮播切换 bxSlider

**特点**

1. 充分响应各种设备，适应各种屏幕；
2. 支持多种滑动模式，水平、垂直以及淡入淡出效果；
3. 支持图片、视频以及任意html内容；
4. 支持触摸滑动；
5. 支持Firefox，Chrome，Safari，iOS，Android，IE7+

**使用方法**

1. 引入文件

```html

<link rel="stylesheet" type="text/css" href="jquery.bxslider.css"> 
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script> 
<script src="jquery.bxslider.min.js"></script> 

```

2. html

```html

<ul class="bxslider"> 
      <li><img src="images/s1.jpg" /></li> 
      <li><img src="images/s2.jpg" /></li> 
      <li><img src="images/s3.jpg" /></li> 
</ul> 

```

3. javascript

```javascript

$(function(){ 
    $('.bxslider').bxSlider(); 
}); 

```