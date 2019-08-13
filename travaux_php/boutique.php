<?php
session_start();// toujours ouvrir une session pour un panier
require "database.php";

$query=$bdd->prepare("SELECT so.id AS id_soins, so.nom AS nom_soins, so.description AS desc_soins, so.photo AS photo_soins, so.prix AS prix_soins FROM soins AS so");
$query->execute();
$article=$query->fetchAll();

// CREATION D'UN PANIER...

if(isset($_GET['id'])){// on verifie le formulaire avec l'id qui est dans le form ACTION avec un GET
	$id=$_GET['id'];// on donne des valeurs a la variable $id... $_GET['id']
	$qte=$_POST['qte'];// on donne des valeurs a la variable $qte...$_POST['qte'] car il est dans le "name"
	$prix=$_GET['prix'];
$_SESSION['panier'][]=[$qte,$id,$prix]; // ensuite on ajoute dans notre table session une table avec les valeurs du $_GET et du $_POST qui sont $id et $qte qu'on recuperera avec leur id 0 et 1;

}

include"boutique.phtml";