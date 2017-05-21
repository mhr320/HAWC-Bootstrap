$(document).ready(function() {
	$('form > input').keyup(function() {
		var empty = false;
			$('form > input').each(function() {
            	if ($(this).val() == '') {
                	empty = true;
            	}
        });


/*
$(document).ready((function() {$('form > input').keyup(

	function() {var empty = false;

        $('form > input').each(function() {
            if ($(this).val() == '') {
                empty = true;
            }
        });

        if (empty) {
            $('#register').addClass('hidden'); // updated according to http://stackoverflow.com/questions/7637790/how-to-remove-disabled-attribute-with-jquery-ie
        } else {
            $('#register').removeClass('hidden'); // updated according to http://stackoverflow.com/questions/7637790/how-to-remove-disabled-attribute-with-jquery-ie
        }
    });
}) () );
$(document).ready(function(){
    $(".btn").click(function(){
        $(this).button('loading');
    });   
});*/
