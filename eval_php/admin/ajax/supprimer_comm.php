<?php

require "../../database.php";

$id=$_POST['id'];

$query=$bdd->prepare(
  "DELETE FROM commentaires
  WHERE id=?");
$query->execute(array($id));

$query=$bdd->prepare(
	"UPDATE comm_supprime
	SET compteur= compteur + 1");
	$query->execute();

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

  //affichage de nombres de commentaires supprimés

  $query = $bdd -> prepare(
    "SELECT compteur
    FROM comm_supprime");
  $query -> execute();
  $comm_suppr = $query -> fetch();

  echo json_encode([$id, $nb_commentaires, $publ_non_commentaires, $comm_suppr]);
