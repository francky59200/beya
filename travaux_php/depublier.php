<?php
require "database.php";
$id=$_GET['id'];

$query=$bdd->prepare("UPDATE categories SET publie=1 WHERE id=?");
$query->execute(array($id));

//Requete udate pour mettre pubielie à 1


header("location:livredor.php");