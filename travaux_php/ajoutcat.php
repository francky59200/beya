<?php
require "database.php";

if(isset($_POST['name'])){
	$nom=$_POST['name'];
	$publie=$_POST['choice'];

$query=$bdd->prepare("INSERT INTO (nom_categories, publie_categories) VALUES(?,?)");
		$query->execute(array($nom,0));
		$article=$query->fetch();
}




include"ajoutcat.phtml";