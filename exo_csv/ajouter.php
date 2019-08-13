<?php
if(isset($_POST['nom'])){
	$file=fopen('adresse.csv', 'a');
	fputcsv($file, array($_POST['nom'], $_POST['prenom'], $_POST['tel'], $_POST['adresse'], $_POST['ville'], $_POST['anniversaire']));
	fclose($file);
}






header('location: index.php');
