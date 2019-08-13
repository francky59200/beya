<?php
$tempo=array(23,25,31,30,18,17,19,20,26,28,26,27,21,22,22,28,27,21,17,18,18,17,19,20,22,26,29,28,22,24);
$tmax=max($tempo);
$tmin=min($tempo);
$moyenne=round(array_sum($tempo)/count($tempo), 2);
$jours=array_keys($tempo, 22);
$tem_du_jour=$tempo[9];
foreach ($jours as $key => $value) {
	$jours[$key]=$value+1;
}
$cpt=0;
foreach ($tempo as $jour) {
	if($jour<=20){
		$cpt++;
	}
}
$jour = array("Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"); 

$mois = array("","Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"); 

$datefr = $jour[date("w")]." ".date("d")." ".$mois[date("n")]." ".date("Y"); 
$heure=date("H:i:s");
$hour=date("H");
$ha;
$ra;
function colume($ha,$ra){
	return round((($ra)*($ra))*pi()*$ha*1/3, 2);
}

/* pour mettre un background css on cree une classe .nigth
<?php if($hour>=4 && $hour<16):?>
<body>
<?php else:?>
<body class="nigth">
<?php endif;?>*/

include"temp.phtml";

