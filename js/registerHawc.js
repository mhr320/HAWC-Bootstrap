$(document).ready(function() {
	// sets focus to Full Name text field
    $( "#usr" ).focus(); 
});
 // Checks if Full Name field is filled out
$('#usr').focusout('input', function() {
    var input=$(this);
    var is_name=input.val();
    if(is_name){input.removeClass("invalid").addClass("valid");}
    else{input.removeClass("valid").addClass("invalid");}
});

// TODO: Check if Area field is complete - https://stackoverflow.com/questions/12467682/jquery-validate-dropdown-list
// TODO: Make sure passwords match and fields are complete
// TODO: Locker Selection field validation

// Checks if email field is a valid email
// from - https://formden.com/blog/validate-contact-form-jquery
$('#email').focusout('input', function() {
    var input=$(this);
    var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var is_email=re.test(input.val());
    if(is_email){input.removeClass("invalid").addClass("valid");}
    else{input.removeClass("valid").addClass("invalid");}
});
// Need to be able to .addClass() when checkbox unchecked
$('.checkbox').change(function() {
	// once checkbox has been checked, the button appears
    $('#register').removeClass('hidden');
    $('#chbx').addClass('hidden');
    $('#signed').removeClass('hidden');
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
});

