<?php

require "database.php";

$query=$bdd->prepare("SELECT so.id AS id_soins, so.nom AS nom_soins, so.description AS desc_soins, so.photo AS photo_soins, so.prix AS prix_soins FROM soins AS so");
$query->execute();
$article=$query->fetchAll();





include"gestionsoins.phtml";