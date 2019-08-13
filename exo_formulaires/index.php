<?php
function password(){
    if(isset($_POST['password']) && $_POST['password']=="champion"):
   	return true;
   	 else:
   		 return false;
   	endif;
}
include"index.phtml";