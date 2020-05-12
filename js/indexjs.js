$(function () {
    //显示隐藏电梯导航
    var flag = true;
    var toolTop = $(".recom_hd").offset().top;
    toggleTool();
    function toggleTool() {
        if ($(document).scrollTop() >= toolTop) {
            $(".fixedtool").fadeIn();
        } else {
            $(".fixedtool").fadeOut();
        };
    }
    $(window).scroll(function () {
        toggleTool();


        if (flag) {  //节流阀
            $(".floor .w").each(function (i, ele) {
                if ($(document).scrollTop() >= $(ele).offset().top) {
                    console.log(i);
                    $(".fixedtool li").eq(i).addClass("current").siblings().removeClass();
                }
            })
        }
    });

    //点击电梯导航页面可以滚动到相应内容区域
    $(".fixedtool li").click(function () {
        flag = false;
        console.log($(this).index());
        //  每次点击小li，就需要计算出页面要去往位置
        var current = $(".floor .w").eq($(this).index()).offset().top;
        $("body,html").stop().animate({
            scrollTop: current
        }, function () {
            flag = true;
        });
        //点击之后，让当前的小li 添加current类名,姐妹移除current类名
        $(this).addClass("current").siblings().removeClass();
    })
})
