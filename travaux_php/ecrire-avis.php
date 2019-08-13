<?php
require "database.php";

$date=date("Y-m-d");

if(isset($_POST['name'])){
	$titre=$_POST['name'];
	$email=$_POST['email'];
	$tele=$_POST['telephone'];
	$note=$_POST['note'];
	$message=$_POST['message'];
	if(isset($_POST['radio'])){
		$query=$bdd->prepare("INSERT INTO livredor(titre, note, date_livre, commentaire, nom, email, publie) VALUES(?,?,?,?,?,?,?)");
       $query->execute(array($titre,$note,$date,$message,$titre,$email,0));
	$message="votre message a bien été envoyé";
	}
	else{
		
		$message="veuillez remplir completement le formulaire";
	}
	
}


include"ecrire-avis.phtml";