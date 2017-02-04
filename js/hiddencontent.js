//HIDDEN CONTENT
$( function() {
	$('.contentFirst').hide();
	var dispKey = 0;

	$('#eventOneHeading').click(function() {
		if(dispKey === 1) {
			$('.contentFirst').hide();
			dispKey = 0;
		}
		else {
			
			$('.contentFirst').hide();
			$('#eventOneContent').show();
			dispKey = 1;
		}
	});
	$('#eventTwoHeading').click(function() {
		if(dispKey === 2) {
			$('.contentFirst').hide();
			dispKey = 0;
		}
		else {
			
			$('.contentFirst').hide();
			$('#eventTwoContent').show();
			dispKey = 2;
		}
	});
	$('#eventThreeHeading').click(function() {
		if(dispKey === 3) {
			$('.contentFirst').hide();
			dispKey = 0;
		}
		else {
			
			$('.contentFirst').hide();
			$('#eventThreeContent').show();
			dispKey = 3;
		}
	});
	
});
// END OF HIDDEN CONTENT