<?php
session_start();
require "database.php";

// *** Connexion au back-office ***
	if(isset($_POST['login'])){
		$login=htmlspecialchars($_POST['login']);
		$mdps=htmlspecialchars($_POST['password']);

		$query = $bdd -> prepare(
		  "SELECT login, password
		  FROM admin");
		$query -> execute();
		$admins = $query -> fetchAll();

		foreach ($admins as $admin) {
			if($login == $admin['login'] && password_verify($mdps, $admin['password']) ){
				$_SESSION['admin'] = 'FitDev';
			header('location:admin/tableau_de_bord.php');
			}
			else {
				session_destroy();
			}
		}
	}

include "header.php";
include "phtml/admin.phtml";
include "footer.php";
