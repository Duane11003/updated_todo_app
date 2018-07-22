// check off specific todo by clicking

$('ul').on("click", "li", function(){
   $(this).toggleClass("completed");
});

// listen for click on any 'x'

$('ul').on("click", "span", function(event){
    event.stopPropagation();
    $(this).parent().fadeOut(300, function(){
        $(this).remove();
    });
    
})

$("input[type='text'").keypress(function(e){
    if(e.which === 13){
        // grabbing new todo text
        var todoText = $(this).val();
        $(this).val("");
        // appending to li
        $("ul").append("<li><span>x</span> " + todoText + "</li>");
    }
})