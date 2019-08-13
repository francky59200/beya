<?php
if(isset($_POST['prenom'])):// ici on affiche le prenom
	echo $_POST['prenom'];
?>
<p><?=$_POST['message'] ?></p>
<p>votre pays<?=$_POST['pays']?></p>
<?php if(isset($_POST['news'])):?>
	<p>vous souhaiter etre abonné</p>
<?php endif;?>
<?php if($_POST['frites']=='oui'):?>
<p>vous aimez les frites</p>
<?php else: ?>
	<p>vous aimez les frites</p>
	<?php endif;?>
<?php endif;

include "index.phtml";