let age;
let firstName;
age = 30;
firstName = prompt("quel est votre prénom");
if (age >= 18) {
	document.write("vous êtes majeur");
}
else {
	document.write("vous êtes mineur")
}
if (firstName == 'elsa') {
   document.write('bonjour elsa');
}
else if(firstName == 'charlotte') {
	document.write('bonjour charlotte');
}
else {
	document.write("bonjour");
}