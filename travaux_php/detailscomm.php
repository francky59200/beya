<?php

require "database.php";
$id=$_GET['id'];
$somme=0;

$query=$bdd->prepare("SELECT us.nom AS nom_user, us.adresse AS adresse_user, us.cp AS cp_user, us.ville AS ville_user, co.id AS id_commande FROM user AS us INNER JOIN commandes AS co ON co.id_client=us.id WHERE co.id=?");
$query->execute(array($id));
$art1=$query->fetch();

$query=$bdd->prepare("SELECT li.qte AS qte_livre, li.pu AS pu_livre, so.nom AS nom_soins FROM ligne_commande AS li INNER JOIN soins AS so ON so.id=li.id_soins  WHERE li.id_comm=?" );
$query->execute(array($id));
$article2=$query->fetchAll();
var_dump($article2);

function total($n,$q){// fonction pour afficher les totaux..
	return $n*$q;

}

include"detailscomm.phtml";