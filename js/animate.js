/**
 * Author: 十月梦想
 * Email:  24920@163.com
 * Github: https://github.com/shiyuemengxiang
 * Blog   https://cncat.cn
 * Project " ";
 * Date: 2019/12/12 23:25
 *
 */
// js动画控制
$(()=>{
    $('#header ul>.alone').hover(function () {
        $(this).css({'border-bottom':'5px solid red','padding':'5px 12px','color':'red'})
        // $(this).find('ul').fadeIn()
    },function(){
        $(this).css({'border-bottom':'none','color':'#444'})
    })
    $('#header ul>li').hover(function () {
        $(this).find('ul').fadeIn(500)
    },function(){
        $(this).find('ul').fadeOut(500)
    })
    $(window).scroll(function(){
        var LXH_TOP=$(window).scrollTop()
        if(LXH_TOP>200){
            $("#header").css({"position":"fixed","top":"0px",})
        }else{
            $("#header").css({"position":"static"})
        }
        console.log(LXH_TOP)
            if(LXH_TOP<300){
            $('#sideBar').fadeOut()
            }else{
                $('#sideBar').fadeIn()
            }
            if(LXH_TOP>=580&&LXH_TOP<2260){
                    $('#sideBar ul li').eq(0).css('background-color','deeppink').siblings('li').css('background-color','RGBA(98, 98, 98,0.7)')
            }else if(LXH_TOP>=2260&&LXH_TOP<3860){
                $('#sideBar ul li').eq(1).css('background-color','rgb(102, 217, 239)').siblings('li').css('background-color','RGBA(98, 98, 98,0.7)')

            }else if(LXH_TOP>=3860){
                $('#sideBar ul li').eq(2).css('background-color','rgb(133, 191, 130)').siblings('li').css('background-color','RGBA(98, 98, 98,0.7)')
            }
    //    热卖580px-2259px
        //女装2260px-3859px
        //3860px+卫衣
    })
    $(function(){
        $(".content ul li").mouseover(function () {
            $(this).css({"border":"1px solid rgb(246, 45, 72)"})
            $(this).find("img").css("width","400px")
        })
        $(".content ul li").mouseout(function () {
            $(this).css({"border":"none"})
            $(this).find("img").css("width","350")
        })

    })
})
