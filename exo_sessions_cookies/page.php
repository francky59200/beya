<?php
session_start();
	if(isset($_POST['login'])){
		$login=htmlspecialchars($_POST['login']);
		$mdps=htmlspecialchars($_POST['password']);
		if($login=='titi'&& $mdps=='grosminet'){
			$_SESSION['login']='titi';
		}
		else{
			session_destroy();
		}
	}






include "page.phtml";




