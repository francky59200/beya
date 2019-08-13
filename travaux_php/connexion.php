<?php

require "database.php";

if(isset($_POST['nom'])){
     $nom=$_POST['nom'];
     $prenom=$_POST['prenom'];
     $adresse=$_POST['adresse'];
     $cp=$_POST['code'];
     $ville=$_POST['ville'];
     $tel=$_POST['tel'];
     $mail=$_POST['email'];
     $password=password_hash($_POST['password'], PASSWORD_DEFAULT);

$query=$bdd->prepare("INSERT INTO user(nom, prenom, adresse, cp, ville, tel, mail, password) VALUES(?,?,?,?,?,?,?,?)");
$query->execute(array($nom, $prenom, $adresse, $cp, $ville, $tel, $mail, $password));
}
session_start();
	if(isset($_POST['login'])){
		$login=htmlspecialchars($_POST['login']);
		$mdps=htmlspecialchars($_POST['password']);
		$query=$bdd->prepare("SELECT * FROM user WHERE mail=?");
		$query->execute(array($login));
		$pass=$query->fetch();
		//selectionner le user 

		//comparer les mots de passe password_verify

		if(password_verify($mdps, $pass['password'])){
			$_SESSION['login']=$login;
			$_SESSION['id']=$pass['id'];
		}
		else{
			session_destroy();
		}
	}


include "connexion.phtml";