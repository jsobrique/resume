$(document).ready(function(){

	$(".contact-button").click(function(event){
		var password = prompt("Enter password: ");
		//Will need to change/secure this in the future
		if(password!="Lara") {
			alert("Incorrect password");
			event.preventDefault();
			return false;
		}
	});

    $(window).scroll( function(){
        $('.animate').each( function(i){
            var top_of_object = $(this).offset().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > top_of_object ){
                $(this).addClass("fade-in");
            }
        }); 
    });

	$('[data-toggle="tooltip"]').tooltip();

});