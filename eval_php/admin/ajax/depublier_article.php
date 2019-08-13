<?php
require "../../database.php";

$id=$_POST['id'];

// *** Modif valeur de publication dans la base de donnée ***
$query=$bdd->prepare(
	"UPDATE articles
	SET publie=?
	WHERE id=?");
$query->execute(array('0', $id));

echo json_encode($id);
