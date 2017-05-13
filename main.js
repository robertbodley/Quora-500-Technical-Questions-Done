$(document).ready(function() {
	console.log("running");
	var question = 1;
	var count = 0;
	$(".qlink_container").each(function( index ) {
		var localStorageCurrently = localStorage.getItem("questionComplete");
		if(localStorageCurrently!=null && localStorageCurrently.indexOf("," + question + ",") !== -1) {
			var html = "<input type='checkbox' checked name='questionNumber' value='" + question + "'> " + $(this).html();
			count++;
		} else {
			var html = "<input type='checkbox' name='questionNumber' value='" + question + "'> " + $(this).html();
		}

			
		$(this).html(html);
		question++;
	});

	$('.board_item_title p.qtext_para').text("500 Data Structures and Algorithms practice problems and their solutions (" + count + "/500)");


	//handles storage in localStorage to remeber what has been completed
	$('input[type="checkbox"][name="questionNumber"]').change(function() {
		if(this.checked) {
			count++;
			var localStorageCurrently = localStorage.getItem("questionComplete");
			var questionNumber = $(this).val();

			var questionComplete = localStorageCurrently + "," + questionNumber + ",";

			localStorage.setItem("questionComplete", questionComplete);
		} else {
			count--;

			var localStorageCurrently = localStorage.getItem("questionComplete");
			var questionNumber = $(this).val();

			var questionComplete = localStorageCurrently.replace("," + questionNumber + ",", "");
			localStorage.setItem("questionComplete", questionComplete);


		}
		
		$('.board_item_title p.qtext_para').text("500 Data Structures and Algorithms practice problems and their solutions (" + count + "/500)");

		console.log(localStorage.getItem("questionComplete"));
	});
});