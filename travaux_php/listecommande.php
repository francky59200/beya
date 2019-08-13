<?php

require "database.php";


$query=$bdd->prepare("SELECT co.id AS id_commande, co.date_comm AS date_commande, us.nom AS nom_client, co.prix_total AS total_commande FROM commandes AS co INNER JOIN user AS us ON co.id_client=us.id ");
$query->execute();
$article=$query->fetchAll();
var_dump($query->errorInfo());





include"listecommande.phtml";