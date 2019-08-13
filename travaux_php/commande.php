<?php session_start();

$panier=$_SESSION['panier'];
require "database.php";
 $date= date("Y-m-d");
$query=$bdd->prepare("INSERT INTO commandes(id_client, prix_total, date_comm) VALUES(?,?,?)");
$query->execute(array($_SESSION['id'],$_SESSION['somme'], $date));

var_dump($query->errorInfo());
$idcd=$bdd->lastInsertId();
//lastinserid
foreach ($panier as $pan) {

$query=$bdd->prepare("INSERT INTO ligne_commande(id_comm, id_soins, qte, Pu) VALUES (?,?,?,?)");
$query->execute(array($idcd,$pan[1],$pan[0],$pan[2]));
}
var_dump($query->errorInfo());

//supprime la session panier
unset($_SESSION['panier']);

//redirection
header('location: index.phtml');