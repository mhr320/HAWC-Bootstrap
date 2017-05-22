$(document).ready(function() {
        // makes the button hidden until checkbox is checked, occurs on document load
    $('.btn').addClass('hidden') 
});
        // once checkbox has been checked, the button appears
$('.checkbox').change(function(){
    $('.btn').removeClass('hidden');
    $(".btn").click(function(){
        $(this).button('loading');
    });
});
       