<?php
require "database.php";

///////////////////////////////////
///////// Nb de visites //////////

// *** On compte le nb d'entrée qu'on a dans le tableau ***
$query = $bdd -> prepare(
  "SELECT COUNT(*) AS nb_visiteurs
  FROM nb_visiteurs");
$query -> execute();
$donnees = $query -> fetch();

// *** On recupere le "time" auquel se sont connectés les utilisateurs ***
$query = $bdd -> prepare(
  "SELECT time_connect
  FROM nb_visiteurs");
$query -> execute();
$times_connect = $query -> fetchAll();

// *** Si il n'y a rien dans la table on ajoute un entrée ***
if ($donnees['nb_visiteurs'] == 0 ) {
  $query = $bdd -> prepare(
    "INSERT INTO nb_visiteurs (ip, time_connect)
    VALUES(?,?)");
  $query -> execute(array($_SERVER["REMOTE_ADDR"],time()));
}

// *** Si l'IP existe déjà dans la table mais qu'il s'est connecté il y a plus de 24h, on ajoute un entrée ***
$delai = time() - (60 * 60 * 24);
foreach ($times_connect as $time_connect) {
  if ($delai > $time_connect['time_connect']) {
    $query = $bdd -> prepare(
      "INSERT INTO nb_visiteurs (ip, time_connect)
      VALUES(?,?)");
    $query -> execute(array($_SERVER["REMOTE_ADDR"],time()));
  }
}

////////////////////////////////////

// *** Selection des 3 derniers articles mis en évidence ***
$query = $bdd -> prepare(
  "SELECT id, titre, description, image, date_creation, nb_comm, nb_visites
  FROM articles
  WHERE publie = 1
  ORDER BY date_creation DESC
  LIMIT 3");
$query -> execute();
$promus = $query -> fetchAll();

// *** Selection des 20 derniers articles dans l'encart ***
$query = $bdd -> prepare(
  "SELECT id, titre, date_creation
  FROM articles
  WHERE publie = 1
  ORDER BY date_creation DESC
  LIMIT 20");
$query -> execute();
$articles = $query -> fetchAll();

// *** Selection des 5 derniers commentaires dans l'encart ***
$query = $bdd -> prepare(
  "SELECT commentaire, date
  FROM commentaires
  WHERE publie = 1
  ORDER BY date DESC
  LIMIT 5");
$query -> execute();
$commentaires = $query -> fetchAll();

include "header.php";
include "phtml/index.phtml";
include "footer.php";
