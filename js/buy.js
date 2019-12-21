/**
 * Author: 十月梦想
 * Email:  24920@163.com
 * Github: https://github.com/shiyuemengxiang
 * Blog   https://cncat.cn
 * Project " ";
 * Date: 2019/12/20 16:31
 *
 */
$(function(){
    var LXH_num
    $('#add').click(function(){
        LXH_num=$('#nums').val()
        if(LXH_num>=99){
            alert("不要再加了,钱包顶不住了")
            return false;
        }
        LXH_num++
        $('#nums').val(LXH_num)
    })
    $('#minus').click(function(){
        LXH_num=$('#nums').val()
        if(LXH_num<=1){
            alert("不要再减了,再减就没有了")
            return false;
        }
        LXH_num--
        $('#nums').val(LXH_num)
    })

})