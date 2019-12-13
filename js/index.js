/**
 * Author: 十月梦想
 * Email:  24920@163.com
 * Github: https://github.com/shiyuemengxiang
 * Blog   https://cncat.cn
 * Project " ";
 * Date: 2019/12/12 22:49
 *
 */
    //抓取元素
    $(()=>{
        //轮播图
        var LXH_banner=()=> {
            var LXH_img = $('#img1');
//	var banner=document.getElementsByClassName('banner');
            var LXH_prev = $('#l');
            var LXH_next = $('#r');
//var lis=document.getElementsByTagName('li');
//存入图片数组
            var n = 1;
            var timer;//定义一个定时器开关
            function run() {
                n++;
                if (n > 5) {
                    n = 1;
                }
                //LXHimg.setAttribute('src','images/0'+n+'.jpg');
               // console.log(n)
                LXH_img.attr('src', 'img/images/0' + n + '.jpg');
            }

            timer = setInterval(run, 2000);
            LXH_next.click(() => {

                clearInterval(timer);//清空定时器
                n++;
                if (n > 5) {
                    n = 1;//转回第一张序号
                }
                LXH_img.attr('src', 'img/images/0' + n + '.jpg');
                // LXH_img.src='img/images/0'+n+'.jpg';
                timer = setInterval(run, 2000);//恢复定时器
            })
            LXH_prev.click(() => {

                clearInterval(timer);
                n--;
                if (n < 1) {
                    n = 5;//5是图片的最后一张是序号
                }
                LXH_img.attr('src', 'img/images/0' + n + '.jpg');
                // LXH_img.src='img/images/0'+n+'.jpg';
                timer = setInterval(run, 2000);//恢复定时器
            })
        }
        LXH_banner()
    //    返回top
        $('#top').click(()=>{
            // alert(1)
            $('body,html').animate({scrollTop:0},800)

        })
        //倒计时
        var LXH_djs=()=>{
            var LXH_Old_Time=new Date("2019-12-12 22:11:32")
            var LXH_Old_year=LXH_Old_Time.getFullYear()
            var LXH_Old_month=LXH_Old_Time.getMonth()+1
            var LXH_Old_day=LXH_Old_Time.getDate()
            var LXH_Old_hourse=LXH_Old_Time.getHours()
            var LXH_Old_min=LXH_Old_Time.getMinutes()
            var LXH_Old_sec=LXH_Old_Time.getSeconds()
            var LXH_Now_Time=new Date()
            var time=(LXH_Now_Time-LXH_Old_Time)
            var day=Math.floor(time/(3600*24*1000)) //向下取整天数
                time=time%(3600*24*1000)
            var hours=Math.floor(time/(3600*1000));
                time=time%(3600*1000)
            var min=Math.floor(time/60/1000)
                time=time%(60*1000)
            var s=Math.floor(time/1000)
            $('#day').text(day)
            $('#hours').text(hours)
            $('#min').text(min)
            $('#sec').text(s)
        }
        setInterval(()=>{
            LXH_djs()
        },1000)
    })
