
$(function() {
	$('.nom').blur(function() {
		if ($(this).val().length < 3 || $(this).val().length > 50) {
			$('#validNom').text("Vous devez entrer un nom valide");
			$('#validNom').css("color", "red");
		}
		else {
			$('#validNom').text("");
			$('#validNom').css("color", "");
		}
	});
	$('.email').blur(function() {
		let regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
		let em=$(this).val();
		if(!regex.test(em)){
		$('#validEmail').text("L'email est incorrect");
		$('#validEmail').css("color", "red");
	}
	else {
		$('#validEmail').text("");
		$('#validEmail').css("color", "");
	}
});
	$('.message').blur(function() {
		if ($(this).val().length < 10 || $(this).val().length > 50) {
			$('#validMess').text("Le message doit comporter entre 10 et 50 caractères");
			$('#validMess').css("color", "red");
		}
		else {
			$('#validMess').text("");
			$('#validMess').css("color", "");
		}
	});
	$('.tel').blur(function() {
		let tele=$(this).val();
		 if(tele.length < 1 && tele.length >= 10) {
			$('#validTel').text("votre numero doit comporter 8 chiffres");
			$('#validTel').css("color", "red");
		}
		else {
			$('#validTel').text("");
			$('#validTel').css("color", "");
		}
	});
});

	