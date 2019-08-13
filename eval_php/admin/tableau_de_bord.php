<?php
session_start();
require "../database.php";

$query = $bdd -> prepare(
  "SELECT COUNT(id) AS nb_visiteurs
  FROM nb_visiteurs");
$query -> execute();
$visites = $query -> fetch();

// Affichage des commentaires à modérer
$query=$bdd->prepare(
  "SELECT commentaires.id, pseudo, email, commentaire, id_article, date, commentaires.publie, titre
  FROM commentaires
  INNER JOIN articles
  ON commentaires.id_article=articles.id
  WHERE commentaires.publie = 0
  ORDER BY id DESC");
 $query->execute();
 $commentaires=$query->fetchAll();

setlocale(LC_ALL, 'fr_FR.UTF8', 'fr_FR','fr','fr','fra','fr_FR@euro');

// Affichage des 5 articles les plus vus

$query=$bdd->prepare(
	"SELECT titre, nb_visites
	FROM articles
  ORDER BY nb_visites DESC
  LIMIT 5");
 $query->execute();
 $articles=$query->fetchAll();

//affichage nombres d'articles publies

$query = $bdd -> prepare(
  "SELECT COUNT(*) AS nb_publie
  FROM articles
  WHERE publie=1");
$query -> execute();
$publArticles = $query -> fetch();

//affichage nombres d'articles non-publies

$query = $bdd -> prepare(
  "SELECT COUNT(*) AS nb_non_publie
  FROM articles
  WHERE publie=0");
$query -> execute();
$non_publArticles = $query -> fetch();

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

include "header.php";
include "phtml/tableau_de_bord.phtml";
