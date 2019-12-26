/**
 * Author: 十月梦想
 * Email:  24920@163.com
 * Github: https://github.com/shiyuemengxiang
 * Blog   https://cncat.cn
 * Project " ";
 * Date: 2019/12/14 16:50
 *
 */

$(function(){
    $(window).load(function(){
        $(function(){
            if($.cookie('user')){
                $('#login').html("欢迎:"+$.cookie('user'))
                $('#reg').html('')
            }else{
                $('#login').html('<a href="login.html">登录 </a>')
                $('#reg').html('<a href="register.html">注册 </a>')

            }
        })
    })
})