define([],function(){
    return{
        init:function(){
            $li = $("#changeP ul li");
            $.ajax({
                url:"http://localhost/JS2007/projectname/php/render.php",
                dataType:"json"
        
            }).done(function(data){
                $.each(data,function(index,value){
                    $li.eq(index).find("img").attr("src",value.url);
                    $li.eq(index).find(".nameC a").html(value.title);
                    $li.eq(index).find(".priceC").html("￥" + value.price);
                })
            })
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