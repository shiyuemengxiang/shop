
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

console.log(1); //关闭

function gb() {
    window.close();
} //删除和移入收藏夹


function remove() {
    alert("移入收藏夹成功");
}

$(function () {
    var carListGoods = JSON.parse($.cookie('carListGoods'));
    carListGoods.forEach(function (item, i) {
        // console.log(item)
        ele = "\t\t\t\t<div class=\"item\">\n\t\t\t\t\t<div class=\"check\">\n\t\t\t\t\t\t<input   type=\"checkbox\"checked=\"checked\"  name=\"\" id=\"\" value=\"\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<img src=\"" + item.url + "\" alt=\"\" class=\"item_img\" />\n\t\t\t\t\t<div class=\"goods_title\">" + item.title + "</div>\n\t\t\t\t\t<div class=\"arg\">\n\t\t\t\t\t\t<div>\u9ED8\u8BA4\u5C3A\u5BF8</div>\n\t\t\t\t\t\t<!--<div>512G</div>-->\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"price\">\n\t\t\t\t\t\t&yen;<span>" + item.price + "</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"num\">\n\t\t\t\t\t\t<a href=\"javascript:void(0)\"  >&nbsp;- </a><input type=\"text\" disabled=\"\" min=\"1\" style=\"width:'80px'\" value=\"" + item.num + "\" />\n\t\t\t\t\t\t<a href=\"javascript:void(0)\"  >+</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"count\">\n\t\t\t\t\t\t&yen;<span>" + (item.num * item.price).toFixed(2) + "</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"op\">\n\t\t\t\t\t\t<a href=\"javascript:void(0)\" >\u5220\u9664</a>\n\t\t\t\t\t\t<a href=\"javascript:void(0)\" onclick=\"remove()\">\u79FB\u5165\u6536\u85CF\u5939</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>"; //页面加载完毕后自动计算当前购物车数量和价格

        $(window).load(function () {
            //页面加载先计算当前购物车内总价和数量
            $('#total_num').html(totalNum());
            $('#total_price').html(totalMonery());
            console.log("当前购物车item元素个数:" + $('.item').length);
        }); //购物车追加

        $('.shop_tag').eq(0).after(ele); //当前商品数量

        var LXH_num; //数量加

        $('.num a').eq(1).click(function () {
            LXH_num = $(this).prev().val();

            if (LXH_num >= 99) {
                alert("不要再加了,钱包顶不住了");
                return false;
            }

            LXH_num++;
            $(this).prev().val(LXH_num); //更新数量同时修改小计

            $(this).parents('.item').find('.count span').html(($(this).parents('.item').find('.price span').html() * $(this).prev().val()).toFixed(2)); // console.log(($(this).parents('.item').find('.price span').html()*$(this).prev().val()).toFixed(2))

            totalNum();
            $('#total_num').html(totalNum());
            $('#total_price').html(totalMonery());
        }); //数量减

        $('.num a').eq(0).click(function () {
            LXH_num = $(this).next().val();
            console.log(LXH_num);

            if (LXH_num <= 1) {
                alert("不要再减了,再减就没有了");
                return false;
            }

            LXH_num--;
            $(this).next().val(LXH_num); //更新数量和小计

            $(this).parents('.item').find('.count span').html(($(this).parents('.item').find('.price span').html() * $(this).next().val()).toFixed(2));
            $('#total_num').html(totalNum());
            $('#total_price').html(totalMonery());
            totalNum();
        });

        function check_goods() {
            console.log($(this).html());
        } //总数量


        function totalNum() {
            var total = 0;

            for (i = 0; i < $('.item').length; i++) {
                //没有勾选,不计算总数
                if ($('.item').eq(i).find('.check input').attr('checked')) {
                    total += parseInt($('.num input').eq(i).val());
                }
            }

            return total;
        }

        $('#check1').click(function () {
            check_all();
        });
        $('#check2').click(function () {
            check_jd();
        }); //自营勾选逻辑

        function check_jd() {
            if (!$('#check2').attr('checked')) {
                for (i = 0; i <= $('.item').length; i++) {
                    $('.item').eq(i).find('.check input').attr('checked', true);
                }

                $('#check1').attr('checked', false);
            } else {
                for (i = 0; i <= $('.item').length; i++) {
                    $('.item').eq(i).find('.check input').attr('checked', false);
                }

                $('#check1').attr('checked', true);
            }

            check_all();
        } //全选


        function check_all() {
            if (!$('#check1').attr('checked')) {
                for (i = 0; i <= $('.item').length; i++) {
                    $('.item').eq(i).find('.check input').attr('checked', true);
                }

                $('#check2').attr('checked', false);
            } else {
                for (i = 0; i <= $('.item').length; i++) {
                    $('.item').eq(i).find('.check input').attr('checked', false);
                }

                $('#check2').attr('checked', true);
            }

            for (i = 0; i <= $('.item').length; i++) {
                if ($('.item').eq(i).find('.check input').attr('checked')) {
                    // check_all()
                    // $('#check2').attr('checked',true)
                    // $('#check1').attr('checked',true)
                    $('.item').eq(i).find('.check input').attr('checked', false);
                } else {
                    // check_all()
                    // $('#check2').attr('checked',false)
                    // $('#check1').attr('checked',false)
                    $('.item').eq(i).find('.check input').attr('checked', true);
                }
            } //更新购物信息


            $('#total_num').html(totalNum());
            $('#total_price').html(totalMonery());
        } //判断是否全选


        $('.item .check input').click(function isCheckAll() {
            var it = $('.item').eq(0).find('.check input').prop('checked');

            for (i = 1; i < $('.item').length; i++) {
                it += '&&' + $('.item').eq(i).find('.check input').prop('checked');
            } //字符串转布尔


            function toBoolean(str) {
                if (str.indexOf('false') != -1) {
                    return true;
                } else {
                    return false;
                }
            }

            console.log(_typeof(toBoolean(it)));

            if (!toBoolean(it)) {
                $('#check2').prop('checked', true);
                $('#check1').prop('checked', true);
            } else {
                $('#check2').prop('checked', false);
                $('#check1').prop('checked', false);
            }

            console.log(it);
            $('#total_num').html(totalNum());
            $('#total_price').html(totalMonery());
        }); //总价统计

        function totalMonery() {
            var LXH_totalMonery = 0;

            for (i = 0; i < $('.item').length; i++) {
                //没有勾选,不计算总数
                if ($('.item').eq(i).find('.check input').attr('checked')) {
                    LXH_totalMonery += parseFloat($('.count span').eq(i).html());
                }
            }

            return LXH_totalMonery.toFixed(2);
        }

        $('.settlement button').click(function () {
            $('#total_price').html(totalMonery());
            $('.total').css('display', 'block');
            $('#total_num').html(totalNum());
            $('.goods_count').html(totalNum());
            $('.monery_count').html(totalMonery());
            $('.total .user').text($.cookie('user'));
        }); //删除

        $('.op').find('a').eq(0).click(function () {
            // console.log()
            var flat = confirm("确认删除商品");

            if (flat) {
                alert("删除成功");
                $(this).parents('.item').remove();
            } else {
                alert("取消删除");
            }

            $('#total_num').html(totalNum());
            $('#total_price').html(totalMonery()); // alert(111)
            // console.log($(this))
        });
    });
});