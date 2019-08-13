<?php

/*-----------------------creation de fichier csv---------*/

/*--------------on verifie notre formulaire-------*/

if(isset($_POST['citation'])){// on verifie notre formulaire
	$file=fopen('citation.csv', 'a');// on ouvre un fichier avec fopen on ecrit avec a le fichier et on place l'entrée a la fin du fichier
	fputcsv($file, array($_POST['citation'], $_POST['cat']));// avec fputcsv on formate la ligne et on l'ajoute $file
	fclose($file);//on ferme la fonction fopen avec avec la variable $file
}

/*----------------Pour ajouter des donnes a notre fichier csv-----------*/

$file=fopen('citation.csv', 'a+');/// on ouvre le fichier fopen avec a+
$liste=[];//on creer une liste
while (true) {// on fait une boucle infinie avec en argumant true
	$citation=fgetcsv($file);// on cree une variable citation et on lui donne une ligne de notre fichier csv $file
	if ($citation==false) {//on fait une condition si il y'a pas d'entrée on arrete la boucle avec breack
		break;
	}
	$liste[]=$citation;// et on ajoute la nouvelle entrée a notre listecsv
}
fclose($file);//et on ferme notre balise fopen







include"index.phtml";