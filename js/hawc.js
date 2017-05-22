$(document).ready(function() {
	// sets focus to Full Name text field
    $( "#usr" ).focus(); 
});
    
$('.checkbox').change(function(){
	// once checkbox has been checked, the button appears
    $('#register').removeClass('hidden');
    // shows label
    $('#regLabel').removeClass('hidden');
    // once button is clicked, the button will change to "loading..."
    $("#register").click(function(){
        $(this).button('loading');
    });
});