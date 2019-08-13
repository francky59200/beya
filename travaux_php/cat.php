<?php

require "database.php";


$id=$_GET['id'];

$query=$bdd->prepare("SELECT so.id AS id_soins, so.nom AS nom_soins, so.description AS desc_soins, so.photo AS photo_soins FROM soins AS so WHERE id_cat=?");
$query->execute(array($id));
$article=$query->fetchAll();







include "soins.phtml";