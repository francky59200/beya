<?php

require "database.php";

$promu=1;
$query=$bdd->prepare("SELECT so.id AS id_soins, so.nom AS nom_soins, so.description AS desc_soins, so.photo AS photo_soins FROM soins AS so WHERE promu=? LIMIT 3 ");
$query->execute(array($promu));
$table=$query->fetchAll();

include "index.phtml";
