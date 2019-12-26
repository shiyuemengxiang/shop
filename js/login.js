/**
 * Author: 十月梦想
 * Email:  24920@163.com
 * Github: https://github.com/shiyuemengxiang
 * Blog   https://cncat.cn
 * Project " ";
 * Date: 2019/12/14 15:31
 *
 */
$(function(){
$('.reg').click(function(){
    var LXH_user=$('#user').val()
    var LXH_pwd=$('#pwd').val()
    if(LXH_user!=$.cookie('user')){
         //用户名不存在
        alert("用户名不存在,或者输入有误请检查")
        var flat=confirm("是否需要去注册页面注册一个新账号?")
        if(flat){
            alert('亲爱的游客你好,3s跳转到注册页面')
            window.location="register.html"
        }
    }else if(LXH_user==$.cookie('user')&&LXH_pwd!=$.cookie('pwd')){
        //密码错误
        alert("ERROR,密码有误!")
    }else if(LXH_user==$.cookie('user')&&LXH_pwd==$.cookie('pwd')){
        alert('亲爱的会员成功,3s跳转到首页')
        window.location="index.html"
    }

})
})