$(document).ready(function() {
        // makes the button hidden until checkbox is checked, occurs on document load
    $('#register').addClass('hidden') 
});
        // once checkbox has been checked, the button appears
$('.checkbox').change(function(){
    $('#register').removeClass('hidden');
    $("#register").click(function(){
        $(this).button('loading');
    });
});
       