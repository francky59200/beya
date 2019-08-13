<?php
require "../../database.php";

$id = $_POST['id'];

// *** Modif valeur de publication dans la base de donnée ***
$query=$bdd->prepare(
	"UPDATE commentaires
	SET publie=?
	WHERE id=?");
$query->execute(array('0', $id));

// *** Decremente le commentaires dans la base de donnée ***
$query = $bdd -> prepare(
  "UPDATE articles
	INNER JOIN commentaires
	ON articles.id=commentaires.id_article
  SET nb_comm = nb_comm - 1
  WHERE commentaires.id = ?");
$query -> execute(array($id));

//affichage nombres de commentaires

$query = $bdd -> prepare(
  "SELECT COUNT(*) AS nb_comm
  FROM commentaires");
$query -> execute();
$nb_commentaires = $query -> fetch();

//affichage de nombres de commentaires en attente de validation

$query = $bdd -> prepare(
  "SELECT COUNT(*) AS nb_pucomm
  FROM commentaires
  WHERE publie=0");
$query -> execute();
$publ_non_commentaires = $query -> fetch();

echo json_encode([$id, $nb_commentaires, $publ_non_commentaires]);
