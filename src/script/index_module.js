define([], function () {
    return {
        init: function () {
            $li = $("#changeP ul li");
            $.ajax({
                url: "http://localhost/JS2007/projectname/php/render.php",
                dataType: "json"

            }).done(function (data) {
                $.each(data, function (index, value) {
                    $li.eq(index).find("img").attr("src", value.url);
                    $li.eq(index).find(".nameC a").html(value.title);
                    $li.eq(index).find(".priceC").html("￥" + value.price);
                })
            })
            //顶部悬浮
            const $nav = $('#fixed_searchBox');
            const $form = $('#searchForm');
            //触发滚轮事件
            $(window).on('scroll', function () {
                let $top = $(window).scrollTop(); //获取滚动条的top值。
                if ($top >= 400) {
                    $form.css({
                        "position": "fixed",
                        "top": 5,
                        "index": 6
                    })
                    // $nav.attr("display",block)
                    // $nav.stop(true).animate({
                    //     top: 0
                    // });
                    $nav.css("top", 0)
                } else {
                    $form.css({
                        "position": "static",
                    })
                    // $nav.stop(true).animate({
                    //     top: -70
                    // });
                    $nav.css("top", -70)
                }
            });
            //轮播效果

            const $banner = $('.itmes_wrap');
            const $picli = $('.middleSide ul li');
            const $btnli = $('#scroll_num span');
            const $left = $('.prevBtn');
            const $right = $('.nextBtn');

            // 显示箭头
            $banner.on('mouseover', function () {
                $left.css("display", "block")
                $right.css("display", "block")
                clearInterval(timer);
            })
            $banner.on('mouseout', function () {
                $left.css("display", "none")
                $right.css("display", "none")
                timer = setInterval(function () {
                    $right.click()
                }, 1000)
            })


            //
            let $num = 0; //图片索引标记
            let timer = null;
            for (let i = 0; i < $picli.length; i++) {
                num = i;
                $picli[i].index = num;
                console.log(num)
            }
            //小圆圈事件
            $btnli.on('mouseover', function () {
                $num = $(this).index();
                console.log($num);
                $(this).addClass('active').siblings().removeClass('active');
                // $picli.eq($(this).index()).css({"display":"block",}).siblings().css({"display":"none",});
                $picli.eq($(this).index()).stop(true).animate({ opacity: 1, }).siblings().stop(true).animate({ opacity: 0, });
            })

            //点击箭头
            // $left.on('click',function(){
            //     $num--;
            //     if($num < 0){
            //         $num = $btnli.size() -1;
            //     }
            //     // $btnli.index()=$num;
            //     $btnli.eq($num).addClass('active').siblings().removeClass('active');
            //     console.log($num);
            // })

            $left.on('click', function () {
                $num--;
                tabswitch();
                // $btnli.index()=$num;
            })
            $right.on("click", function () {
                $num++;
                tabswitch();
            });

            timer = setInterval(function () {
                $right.click()
            }, 1000);
            //封装轮播函数
            function tabswitch() {
                if ($num > $btnli.size() - 1) {
                    $num = 0;
                };
                if ($num < 0) {
                    $num = $btnli.size() - 1;
                }
                $picli.stop().animate({
                    "opacity": 0
                })
                $picli.eq($num).stop().animate({
                    "opacity": 1
                })
                $btnli.eq($num).addClass('active').siblings().removeClass('active');
            }
              //懒加载
                $(window).on('scroll', function() {
            let $imgtop = $('img').offset().top; //图片top值
            let $scrolltop = $(window).scrollTop(); //滚动条的top值
            console.log($scrolltop);
            let $clientheight = $(window).height(); //可视区的高度
            if ($imgtop < $scrolltop + $clientheight) {
                //图片的top值<可视化高度+滚动条的top值
                //满足条件，进入可视区，图片加载路径
                $('img').attr('src', $('img').attr('_src'));
            }
        });
            //切换
            const $leftarrow = $('.direction .l img');
            const $rightarrow = $('.direction .r img');
            const $ulleft = $('#hotProC ul');
            $leftarrow.on('click',function(){
                // if($ulleft.left = 0){
                    console.log(1);
                    $ulleft.css("left", -1198);
                // }
            });
            const $menuli = $('list_t'); //18个li
            const $item = $('.lNav_pop'); //18块内容
            // const $cartlist = $('.cartlist'); //右边的内容框
            //鼠标移入，添加类名，显示右边的内容框
            $menuli.on('mouseover', function() {
                $(this).css("display", "block").siblings().css("display", "none")
                $item.eq($(this).index()).show().siblings('.item').hide(); //当前和li匹配的item显示，其他的隐藏
                // $cartlist.show();
            });
            $menuli.on('mouseout', function() {
                $cartlist.hide();
    });
        }
    }
})


// !function($){
//     $li = $("#changeP ul li");
//     $.ajax({
//         url:"http://localhost/JS2007/projectname/php/render.php",
//         dataType:"json"

//     }).done(function(data){
//         $.each(data,function(index,value){
//             $li.eq(index).find("img").attr("src",value.url);
//             $li.eq(index).find(".nameC a").html(value.title);
//             $li.eq(index).find(".priceC").html("￥" + value.price);
//         })
//     })
// }(jQuery)