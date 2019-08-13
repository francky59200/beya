<?php

require "database.php";

function start($note){
	for($i=0; $i<$note; $i++){
        echo "<i class=\"fas fa-star\"></i>";
	}
}

$query=$bdd->prepare("SELECT li.id AS id_livre, li.titre AS titre_livre, li.nom AS nom_livre, li.date AS date_livre, li.commentaire AS commentaire_livre, li.note AS note_livre FROM livredor AS li");
$query->execute(array());
$table_4=$query->fetchAll();


include "avis-clients.phtml";