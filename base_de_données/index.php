<?php
//--------------- recuperation d'une base de données---------
try {
	$bdd=new PDO('mysql:host=localhost;dbname=formation_sql;charset=utf8','root');
	
} catch (Exception $e) {
	die("erreur".$e->getMessage());
	
}

$query=$bdd->prepare("SELECT* FROM animal_1");
$query->execute();
$animaux=$query->fetchAll(); // un tableau a plusieurs dimensions
//$animaux=$query->fetch();// un tableau a une dimension
$id=1;
$query=$bdd->prepare("SELECT* FROM animal_1 where id=?");
$query->execute(array($id));
$animal=$query->fetch();

?>

<!DOCTYPE html>
<html>
<head>
	<title>les animaux</title>
</head>
<body>
<h2>recuperation d'une base de données</h2>
<ul>
	<?php foreach ($animaux as $an):?>
		<table>
	   <td><?=$an['nom']?></td>
	</table>
	<?php endforeach;?>
	<p><?=$animal['nom']?>:
		<?=$animal['espece']?></p>
</body>
</html>