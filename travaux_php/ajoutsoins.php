<?php

require "database.php";

if(isset($_POST['name'])){
	$titre=$_POST['name'];
	$desc=$_POST['message'];
	$dure=$_POST['time'];
	$prix=$_POST['price'];
	$catego=$_POST['categories'];
	$photo=$_POST['photo'];
	$publie=$_POST['choice'];

	$query=$bdd->prepare("INSERT INTO soins(nom, description, duree,prix,id_cat,photo,publie,nouveau,promu) VALUES(?,?,?,?,?,?,?,1,0)");
    $query->execute(array($titre,$desc,$dure,$prix,$catego,$photo,$publie));
    $article=$query->fetch();
    var_dump($query->errorInfo());
 }






include"ajoutsoins.phtml";