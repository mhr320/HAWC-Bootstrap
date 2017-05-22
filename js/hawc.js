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
	// sets scroll point to top of page
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera 
    document.documentElement.scrollTop = 0; // For IE and Firefox
}
	// listener for button click and fires the topFunction
$('#backToTop').click(function() {
	topFunction();
	$( "#usr" ).focus(); //sets focus back on Full Name field
})