<?php

require "database.php";

$query=$bdd->prepare("SELECT cat.id AS id_categories, cat.nom AS nom_categories, cat.publie AS publie_categories FROM categories AS cat");
$query->execute(array());
$article=$query->fetchAll();

include"categories.phtml";