<?php
session_start();
require "database.php";

// *** Selection de l'article demandé ***
$query = $bdd -> prepare(
  "SELECT id, titre, description, image, date_creation
  FROM articles
  WHERE id = ? && publie = 1");
$query -> execute(array($_GET['id']));
$article = $query -> fetch();

// *** Affichage des commentaires publié de l'article ***
$query = $bdd -> prepare(
  "SELECT pseudo, commentaire, id_article, date
  FROM commentaires
  WHERE id_article = ? && publie = 1");
$query -> execute(array($_GET['id']));
$commentaires = $query -> fetchAll();

// *** Incrémentation du nb de visites ***
$query=$bdd->prepare(
	"UPDATE articles
	SET nb_visites = nb_visites + 1
	WHERE id = ?");
$query->execute(array($_GET['id']));

include "header.php";
include "phtml/article.phtml";
include "footer.php";

 ?>
