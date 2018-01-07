// check todo by clicking
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});
// delete clicked todo
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(1000,function(){
		$(this).remove();
	});
	event.stopPropagation();

});
// add a todo
$("input[type='text']").keypress(function(event){
	if (event.which === 13){
		// grabing the text from input
		var text = $(this).val();
		// clearing the input
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-eraser' aria-hidden='true'></i></span> "+text+"</li>");

	}
});

$(".fa-pencil").click(function(){
	$("input[type='text']").fadeToggle();
});