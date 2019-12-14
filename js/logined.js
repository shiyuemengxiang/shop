/**
 * Author: 十月梦想
 * Email:  24920@163.com
 * Github: https://github.com/shiyuemengxiang
 * Blog   https://cncat.cn
 * Project " ";
 * Date: 2019/12/14 16:50
 *
 */
$(()=>{
    $(window).load(()=>{
        $(()=>{
            if(localStorage.user){
                $('#header ul li').eq(4).html("欢迎:"+localStorage.user)
                $('#header ul li').eq(5).html('')
            }else{
                $('#header ul li').eq(4).html('<a href="login.html">登录 </a>')
                $('#header ul li').eq(5).html('<a href="register.html">注册 </a>')

            }
        })
    })
})