/**
 * Author: 十月梦想
 * Email:  24920@163.com
 * Github: https://github.com/shiyuemengxiang
 * Blog   https://cncat.cn
 * Project " ";
 * Date: 2019/12/21 23:43
 *
 */
$(function(){
    //tab选项卡加载不同内容
    $('.title ul li').click(function () {
        var  LXH_i=$(this).index()
        $(this).css('background','#fff').find('a').css('color','#333')
        $(this).siblings('li').css('background','none').find('a').css('color','#fff')

        $('.con>div').eq(LXH_i).css('display','block').siblings('div').css('display','none')
    })
})