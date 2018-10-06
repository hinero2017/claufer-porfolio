//check off specific todos by clicking

//click() only adds listeners for existing elements
//on() will add listeners for all potential future elements

$('ul').on('click', 'li', function() {
	//**** THIS IS A SHORT WAY OF WRITING IT */
	$(this).toggleClass('completed');

	//**** THATS A LONG WAY HOW TO WRITING IT */
	// //if it is gray
	// if ($(this).css('color') === 'rgb(128, 128, 128)') {
	// 	//turn it black
	// 	$(this).css({
	// 		color: 'black',
	// 		textDecoration: 'none'
	// 	});
	// } else {
	// 	//turn it gray
	// 	$(this).css({
	// 		color: 'gray',
	// 		textDecoration: 'line-through'
	// 	});
	// }
});

//click on X to delete todo
//event.stopPropagation(); => make it to stop here and not go to "li" and "ul"
//parent() its remove the inclosing element as well
//if it will be only fadeOut() it will not remove it but store it inside, which can slow everything down
$('ul').on('click', 'span', function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
	if (event.which === 13) {
		//grabbing new todo from input
		var todoText = $(this).val();
		//to settle an input to be blank after each entry
		$(this).val('');
		//append() creat a new li and add to ul
		$('ul').append('<li><span><i class="far fa-trash-alt"></i></span> ' + todoText + '</li>');
	}
});

//this is the id of pencil note icon
$('#toggle-form').click(function() {
	$("input[type='text']").fadeToggle();
});
