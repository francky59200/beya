"use strict";
document.write("hello tout le monde");
alert("coucou");
// use scrit
/*ça veut dire que les navigateurs doivent tolérer moins d'erreurs*/

var firstName;
let age;
firstName ="Cécile";
age = 22;
document.write("<br>" + firstName);
const FRIRST_CONSTANTE = 20; /*on declare une constante cest une valeur fixe elle s'ecrit en
majuscule c'est une valeur qui ne bouge pas*/
let nb1 = 5;
let nb2 = 15;
let nb3 = 3.5;
console.log(nb1+nb2);
console.log(nb2-nb1);
console.log(nb3*nb1);
console.log(nb2%nb3);
nb1++; //nb1=nb1+1 c'est la concaténation
console.log(nb1);
nb1+=nb2;
console.log(nb1);
firstName =prompt("comment tu t'appeles?");
document.write("coucou" + firstName);