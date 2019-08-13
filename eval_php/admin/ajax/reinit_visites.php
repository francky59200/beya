<?php
require "../../database.php";

$query=$bdd->prepare(
	"TRUNCATE TABLE nb_visiteurs");
		$query->execute();
