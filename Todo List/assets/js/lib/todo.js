$('ul').on('click','.lili',function(){
	   $(this).toggleClass("line1 textcolor");
	});
$('ul').on('click','.ic',function(){
    $(this).parent().slideUp(1000,function(){
    $(this).remove();});
    });

$('.fa-plus').click(function(){
$('input[type = "text"]').fadeToggle();
});
$('input[type = "text"]').keypress(function(event){
	if(event.which ===13){
		var todotext = $(this).val();
		$(this).val('');
		$('ul').append('<li><span class = "ic"><i class="fa fa-trash" aria-hidden="true"></i></span><span class = "lili">' +todotext +'</span></li>');
	}
})

