<?php
require "../database.php";

// *** Selection des 5 derniers commentaires dans l'encart ***
$query = $bdd -> prepare(
  "SELECT commentaire, date, id_article
  FROM commentaires
  WHERE publie = 1
  ORDER BY date DESC
  LIMIT 5");
$query -> execute();
$commentaires = $query -> fetchAll();

// *** Selection du nb de commentaire des 3 articules en page d'accueil ***
$query = $bdd -> prepare(
  "SELECT id, nb_comm
  FROM articles
  WHERE publie = 1
  ORDER BY date_creation DESC
  LIMIT 3");
$query -> execute();
$promus = $query -> fetchAll();

echo json_encode([$commentaires, $promus]);
 ?>
