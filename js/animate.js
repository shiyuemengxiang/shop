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
    $('#header ul li a').hover(function () {
        $(this).css({'border-bottom':'5px solid red','padding':'5px 12px','color':'red'})
    },function(){
        $(this).css({'border-bottom':'none','color':'#444'})
    })
    // $('#header ul li a').fadeIn(function(){
    //     $(this).animate({'border-bottom':'5px solid red','padding':'5px 0px;'},'slow')
    // })
    // $('#header ul li a').fadeOut(function(){
    //     $(this).animate({'border-bottom':'none','padding':'5px 0px;'},'slow')
    // })

})
