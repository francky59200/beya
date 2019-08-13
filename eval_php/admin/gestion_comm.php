<?php
session_start();
require "../database.php";

// *** Afficher tous les commentaires ***
$query=$bdd->prepare(
  "SELECT commentaires.id, pseudo, email, commentaire, id_article, date, commentaires.publie, titre
  FROM commentaires
  INNER JOIN articles
  ON commentaires.id_article=articles.id");
 $query->execute();
 $commentaires_origin = $query->fetchAll();
 $commentaires = array_reverse($commentaires_origin);

// *** Définition de l'affichage local pour la date ***
setlocale(LC_ALL, 'fr_FR.UTF8', 'fr_FR','fr','fr','fra','fr_FR@euro');

include "header.php";
include "phtml/gestion_comm.phtml";
