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
    var userCheck=/^[a-zA-Z_]+\w{3,16}$/g
    var pwdCheck=/^[a-zA-Z0-9_.@*/]{6,16}$/g
$('.reg').click(function(){

    var LXH_user=$('#user').val()
    var LXH_pwd=$('#pwd').val()
    var LXH_rePwd=$('#repwd').val()

    ///非chrome下才有cookie,chrome采用localstorage
    if(window.navigator.userAgent.indexOf("Chrome")!=-1){
        if(userCheck.test(LXH_user) && pwdCheck.test(LXH_pwd) &&LXH_pwd==LXH_rePwd ){
            alert('注册成功,3s跳转到登录')
            localStorage.setItem('user',LXH_user)
            localStorage.setItem('pwd',LXH_pwd)
            setTimeout(function(){
                window.location="login.html"
            },3000)

        }else{
            console.log(userCheck.test(LXH_user),pwdCheck.test(LXH_pwd),LXH_pwd==LXH_rePwd)
            console.log(LXH_user,LXH_pwd,LXH_rePwd)
            alert("用户信息输入有误注册失败")
        }
    }else{
        if(userCheck.test(LXH_user) && pwdCheck.test(LXH_pwd) &&LXH_pwd==LXH_rePwd ){
            alert('注册成功,3s跳转到登录')
            $.cookie('user',LXH_user)
            $.cookie('pwd',LXH_pwd)
            setTimeout(function(){
                window.location="login.html"
            },3000)

        }else{
            console.log(userCheck.test(LXH_user),pwdCheck.test(LXH_pwd),LXH_pwd==LXH_rePwd)
            console.log(LXH_user,LXH_pwd,LXH_rePwd)
            alert("用户信息输入有误注册失败")
        }
    }

})
})