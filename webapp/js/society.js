$(function(){
    $(".news-box").mouseenter(function(){
        $(this).css({
            "background-color":"#008fff",
            "color":"#FFF"
        });
    });
    $(".news-box").mouseleave(function(){
        $(this).css({
            "background-color":"transparent",
            "color":"#000"
        }
       );
    });
});