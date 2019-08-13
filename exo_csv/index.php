<?php

$file=fopen('adresse.csv', 'a+');
$liste=[];
while (true) {
	$nom=fgetcsv($file);
	if ($nom==false) {
		break;
	}
	$liste[]=$nom;
}
fclose($file);




include"index.phtml";