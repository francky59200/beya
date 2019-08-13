<?php
session_start();
require "../database.php";
$id= $_GET['id'];

// *** Requète pour préremplissage des champs du formulaire de modif ***
 $query=$bdd->prepare(
   "SELECT id, titre, description, image, publie
   FROM articles
   WHERE id=? ");
 $query->execute(array($id));
 $article=$query->fetch();

$titre=$article['titre'];
$desc=$article['description'];
$publie=$article['publie'];
$image=$article['image'];

// *** Mise à jour de l'article en base de donnée avec vérification préalable ***
 if(isset($_POST['titre'])){
	$titre=$_POST['titre'];
	$desc=$_POST['description'];
  if ($_FILES['image']['name'] == '') {
    $photo_chargee=$article['image'];
  }
  else {
    $photo_chargee = htmlspecialchars($_FILES['image']['name']);
  	$image = move_uploaded_file($_FILES['image']['tmp_name'], "../img/".basename($photo_chargee));
  }
	$publie=$_POST['publie'];
	$query=$bdd->prepare(
    "UPDATE articles
    SET titre=?, description=?, image=?, publie=?
		WHERE id=?");
		$query->execute(array($titre,$desc,$photo_chargee,$publie,$id));
    header("location:gestion_article.php");
	}

include "header.php";
include "phtml/modif_ajout.phtml";
