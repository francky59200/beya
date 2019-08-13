<?php

// connexion a ma base de données
session_start();
	if(isset($_POST['login'])){
		$login=htmlspecialchars($_POST['login']);
		$mdps=htmlspecialchars($_POST['password']);
		if($login=='tata'&& $mdps=='minet'){
			$_SESSION['login']='tata';
		}
		else{
			session_destroy();
		}
	}

include"admin.phtml";