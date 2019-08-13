<?php

require "database.php";
function start($note){
	for($i=0; $i<$note; $i++){
        echo "<i class=\"fas fa-star\"></i>";
	}
}
function action($publie,$id){
	if($publie==1){
		echo "<a href='valider.php?id=$id'>valider</a>";
	}
	else{
		echo "<a href='dépublier.php?id=$id'>dépublier</a>";
	}

	echo " <a href='supprimer.php?id=$id'>supprimer</a>";
}


$query=$bdd->prepare("SELECT li.id AS id_livre, li.titre AS titre_livre, li.nom AS nom_livre, li.date_livre AS date_livre, li.commentaire AS commentaire_livre, li.note AS note_livre, li.publie AS publie_livre FROM livredor AS li");
$query->execute(array());
$article=$query->fetchAll();






include"livredor.phtml";