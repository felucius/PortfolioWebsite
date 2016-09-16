
$(document).ready(function(){
	$(".personalInformationMaxime").hide();
	$(".PopUp").click(function(){
		$(".PopUp").toggle("slow");
		$(".personalInformationMaxime").toggle("slow");
	})
});