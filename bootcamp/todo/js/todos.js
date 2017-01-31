$(document).ready(function(){
    
    //Check off specific todos by clicking
    $("li").click(function(){
        $(this).toggleClass("completed");
    });
    
    //Click on X to delete todo
    $("span").click(function(event){
        event.stopPropagation();
        $(this).parent().fadeOut(500, function(){
            $(this).remove();
        })
    });
    
    $("input[type='text']").keypress(function(){
        console.log("key pressed");
    })
    
});