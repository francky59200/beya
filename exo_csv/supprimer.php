<?php
$i=0;
$liste=null;
$liste1=$_POST['suppr'];
$agarder=[];

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

/*------------comparer les 2 tableaux----*/
foreach ($liste as $key => $value) {
	//si la clé n'existe pas dans les valeurs du tab liste1
	if(!in_array($key,$liste1)){//on verifie si la clé existe est differente de la clé liste1 et on met la valeur dans la liste $agarder
		$agarder[]=$value;//et on ajoute la valeur dans la liste $agarder cette liste servira a supprimer
 }
}

var_dump($agarder);

/*-----liste a supprimer-----------*/
	$file1 =fopen('adresse.csv', 'w');

	foreach ($agarder as $key => $sous_table) {

     fputcsv($file1,$sous_table);

}
	fclose($file1);






header('location: index.php');
