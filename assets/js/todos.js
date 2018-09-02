$("ul").on('click', 'li', function () {
    $(this).toggleClass("completed");
});

$("ul").on('click', 'span', function(event) {
    $(this).parent().fadeOut(1000, function() {
        $(this).remove();
    });
    event.stopPropagation();
})

$("input[type='text'").keypress(function(event) {
    var todoEntry;
    if(event.which === 13) {
        todoEntry = $(this).val();

        $(this).val("");
        $('ul').append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + todoEntry + "</li>");
    }

    
});

$(".fa-plus").on('click', function() {
    $("input[type='text'").fadeToggle();
})