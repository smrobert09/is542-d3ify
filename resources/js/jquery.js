$("#record").click(function(){
	var name = $("#vistorname").val();
	var today = new Date().toDateString();

	$("#logbook").append('<tr><td>' + name + '</td><td>' + today + '</td><td><button class="remove">Remove</button></td></tr>')
	$(".remove").click(function() {
		$(this).parentsUntil("tbody").remove();
	});
});

$(".remove").click(function() {
	$(this).parentsUntil("tbody").remove();
});

$("tr").hover(function () {
	$(this).addClass("highlighted");
},function () {
	$(this).removeClass("highlighted");
});