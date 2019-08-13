<?php

require "../database.php";

// *** Récuperation des donnée du formulaire de commentaire ***
$nom = $_POST['nom'];
$email = $_POST['email'];
$comm = $_POST['comm'];
$id = $_POST['id'];

// ** Insertion du commentaire non validé en base de donnée ***
$query = $bdd -> prepare(
  'INSERT INTO commentaires (pseudo, email, commentaire, id_article, date)
  VALUES (?,?,?,?,NOW())');
$query -> execute(array($nom, $email, $comm, $id));

?>
