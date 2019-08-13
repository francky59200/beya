<?php

require "../../database.php";

$id=$_POST['id'];

// *** Suppression de l'article en base de donnée ***
$query=$bdd->prepare(
  "DELETE FROM articles
  WHERE id=?");
$query->execute(array($id));

echo json_encode($id);
