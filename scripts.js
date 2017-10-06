$(document).ready(function() {

function createGrid(x) {
$('.container').append("<table class='table'></table>");
for (let i = 0; i < x; i++) {
$('.table').append("<tr></tr>");
}
	for (let j = 0; j < x; j++) {
		$('tr').append("<td></td>");
	}
}

createGrid(16);

function hover(){
$('td').on('mouseenter', function() {
  $(this).css({'background-color': 'black'});
});
}

hover();

$('button').on('click', function() {
	let popUp = prompt('How many squares?');
	
	if (popUp != null) {
		$('.table').remove();
		createGrid(popUp);
		hover();
	} else {
		alert('Invalid Amount!');
	}
});
});
