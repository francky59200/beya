
<?php
require "database.php";

$publie=1;
$query=$bdd->prepare("SELECT cate.id AS id_categories, cate.nom AS nom_categories FROM categories AS cate WHERE publie=?");
$query->execute(array($publie));
$table_1=$query->fetchAll();



?>






<!DOCTYPE html>
<html lang="fr">

<head>
	<meta charset="utf-8">
	<script src="http://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=" crossorigin="anonymous"></script>
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,700,700i" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Bree+Serif" rel="stylesheet">
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
	<link rel="icon" href="img/favicon.png">
	<title>Massage bien-être: Acceuil - Institut massage - Soins</title>
</head>

<body>
	<header>
		<div class="logo">
			<a href="index.php"><img src="img/logo.jpg" alt="logo"></a>
		</div>
		<nav class="menuburgeur">
			<button class="hamburgeurCross"><i class="fas fa-bars"></i></button>
			<div class="menu">
				<ul>
					<li><a class="active" href="index.php"><i class="fas fa-house-damage"></i></a></li>
					<li class="menulivreDor"><a href="soins.php">Soins<i class="fas fa-angle-down"></i></a>
						 <ul>
							  	<?php foreach ($table_1 as $ta_1): ?>
							  		<li><?=$ta_1['nom_categories']?></li>
							  	<?php endforeach;?>
							  </ul>
					</li>
					<li class="menuTarif"><a href="#">Tarifs<i class="fas fa-angle-down"></i></a>
						<ul>
							<li><a href="#">Soins<i class="fas fa-angle-down"></i></a></li>
							<li><a href="boutique.php">Chéques cadeaux</a></li>
						</ul>
					</li>
					<li class="menulivreDor"><a href="#">Livre d'or<i class="fas fa-angle-down"></i></a>
						<ul>
							<li><a href="avis-clients.php">Consulter les avis</a></li>
							<li><a href="ecrire-avis.php">Nous laisser un avis</a></li>
						</ul>
					</li>
					<li><a href="contact.php">Me Contacter</a></li>
					<li><a href="connexion.php">Se connecter</a></li>
					<li><a href="panier.php">Panier</a></li>
				</ul>
			</div>
		</nav>
	</header>
