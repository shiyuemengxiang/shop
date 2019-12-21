/**
 * Author: 十月梦想
 * Email:  24920@163.com
 * Github: https://github.com/shiyuemengxiang
 * Blog   https://cncat.cn
 * Project " ";
 * Date: 2019/12/19 14:58
 *
 */
$(()=>{
    $(".male_contain .title div").click(function () {
        $(this).toggleClass('selected')
        $(this).siblings().removeClass('selected')
    })

})