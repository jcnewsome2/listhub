$("#login").on("click", function(event){
	event.preventDefault();
	var userName = $("#uName").val().trim();
	
	var userPW = $("#uPassword").val().trim();
	console.log(userPW);
	console.log(userName);

	var data = {
		"name": userName,
		"password": userPW
	}

	$.ajax({

	}).then(function(data){

	});
})