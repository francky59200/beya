<?php
global $traduit;
function translate($nom, $trad){
$tab=[
"chien"=>"dog",
"chat"=>"cat",
"lapin"=>"lou",
"oiseau"=>"sky",
"pigeon"=>"pigonou"];
	if($trad=="anglaisfrançais"){
		if(in_array($nom, $tab)){
     		return "votre traduction ".$nom." est ".array_search($nom, $tab);
     	}
      }
   else{
   if (array_key_exists($nom, $tab)){
     		return "votre traduction ".$nom." est ".$tab[$nom];
     	}
  }
}

if(strtolower(isset($_POST['nom'])) && isset($_POST['traduire'])){
	$traduit=translate($_POST['nom'], $_POST['traduire']);
}
else {
	echo "entrer un nom";
}

//tester si le form est soumis isset...

//si il est soumis, appeler la fonction translate et lui passer les infos en arg

include "index.phtml";