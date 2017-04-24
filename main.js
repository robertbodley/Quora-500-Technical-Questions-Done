$(document).ready(function() {
	var question = 1;
	$(".qlink_container").each(function( index ) {
		var localStorageCurrently = localStorage.getItem("questionComplete");
		if(localStorageCurrently.indexOf(question + ",") !== -1) {
			var html = "<input type='checkbox' checked name='questionNumber' value='" + question + "'> " + $(this).html();
		} else {
			var html = "<input type='checkbox' name='questionNumber' value='" + question + "'> " + $(this).html();
		}
		$(this).html(html);
		question++;
	});


	//handles storage in localStorage to remeber what has been completed
	$('input[type="checkbox"][name="questionNumber"]').change(function() {
		if(this.checked) {
			var localStorageCurrently = localStorage.getItem("questionComplete");
			var questionNumber = $(this).val();

			var questionComplete = localStorageCurrently + questionNumber + ",";

			localStorage.setItem("questionComplete", questionComplete);
		} else {
			var localStorageCurrently = localStorage.getItem("questionComplete");
			var questionNumber = $(this).val();

			var questionComplete = localStorageCurrently.replace(questionNumber+",", "");
			localStorage.setItem("questionComplete", questionComplete);
		}
		console.log(localStorage.getItem("questionComplete"));
	});
});