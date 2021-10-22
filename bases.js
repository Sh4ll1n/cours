// JS permet d'interagir avec le client et faiblement typé.
//Sur F12 inspecter l'element on se met sur la consoleLes boites de dialogues;  
var test = "Salut les gens";
alert(test);
// Cette fonction peut etre penible pour l'utilisateur car il doit obligatoirement cliquer sur ok; 
confirm("test test");
// utile pour appuyer un message avec Ok ou Annuler
confirm("Hello moto");
//Commentaire pour une seule ligne 
console.log(test);
// Permet de debugguer
/*
Commentaire pour plusieurs lignes
*/
// Parfois il faut créer son JS dans dans la page 
prompt("Comment ça va ?")
// Ne s'affiche pas sur la console
var age = prompt("Tu as quel âge ?");
console.log(age);
// Ici en créant une var elle apparaît dans la console
// On a vus les fonctions de dialogue car cela entre en contact directement avec l'utilisateur

/* Une variable on peut mettre ce qu'on veut dedans chaine de caract etc...
Alphanumeriques - STRING*/
var test = (" 158 48 69 Salut les gens");
// Les nombres
var nombres = 15245522544;
// Tableaux
var tab = [1.2, "25",5]; //var tab = array() autre façon de l'écrire
// Les objets
var ob ={
    nom:"Camara", // nom est une clé:valeur/Key:Value
    prenom:"Moussa"
};
//Tableaux d'objets
var tab_ob=[
    {
        nom:"Camara",
        prenom:"Moussa",
    },
    {
        nom:"Camara",
        prenom:"Moussa",
    }

];

// Les portées variables
// Variables locales elle existe seulement dans laquelle elle est déclarée
function afpa(){
    var nbre = 25;

    return nbre * 2;
};
console.log(nbre); //Ici elle ne reconnaitra pas la variable nbre car elle est locales et non globales
// Fonction globales

// Les constantes
const vie = 42;

/* Les opérateurs arithmétiques discord
+ addition
- soustraction 
* multiplication
/ division
% module retourne le reste de la division
= opérateur d'affectation affecte une valeur à une variable
*/
console.log(5+5);
console.log(10-5);
console.log(5*25);
console.log(25/5);
console.log(10%2);

/* Les opérateurs de comparaison discord
*/

console.log(10 == 10);
console.log(10 < 11);
console.log(11 > 10);
console.log(10 <= 10);
console.log(10 >= 10);
console.log(8 != 10);

/* Les opérateurs logiques discord
&& et (condition1) || ou (condition2)
*/ 

console.log(10 && 10);
console.log(10 || 10);

// La concaténation c'est pour mettre ensemble plusieurs variables

var bonjour1 = "Bonjour";
var bonjour2 = "Afpa";
var bonjour3 = "Julien";

var bjr= bonjour1+" "+bonjour2+" "+bonjour3;

console.log(bjr);

/* Les conditions 
if et else et else if 
Il ne faut pas avoir plus de 5 else if
*/
// var nombre
// if (nombre >= 18)
// {
//     console.log("Vous êtes majeur et vacciné !");
// }
// else 
// {
//     console.log("Ciao bon dimanche !");
// }

// if (premiere condition){
// }
// else if(seconde condition){
// }
// else if(troisième condition){
// }
// else(quatrième condition){
// };

// Switch case
var nbre = prompt("Saisir votre âge");
nbre = parseInt(nbre); // trasnforme une chaine de caract en nombres

switch (nbre){
    case 15:
     console.log("Vous etes mineur")
        break; 
    case 18:
    console.log("Vous etes majeur")
        break;
    default:
    console.log("Vous etes senior")
        break;    
};

// Les ternaires
// PROCESS = CONDITION ? 'Ok !' : 'FAILED !';
// nbre = (nbre < 18) ? "Mineur" : "Majeur";
var ter =(nbre < 18) ? "Mineur" : "Majeur";
console.log(ter);


// Les boucles outils très puissant bien penser a la creation de fin de boucle
// While(tant que) 

var index = 0 
 while(index < 5){
    alert("J'aime le javascript");
    //incrémentation
    index++; //index= index +1
    // décrémentation
    // index--;
}

// Les boucles FOR je peux tout mettre sur la meme ligne 
console.log("boucle for");
for(var index = 0; index < 5; index++){
    console.log("j'aime le javascript");
}

// Les boucles DO WHILE
// Elle s'affiche au moins une fois ici elle s'execute au moins une fois
// Utile lorsqu il y a une erreur de saisie

var index = 10;
do{
    console.log("Test")
    index++;
}
while(index<5)

// Permet d'ecrire dans notre code. Une des trois technique pour le debug. 
document.write("Salut");
// Permet d'ecrire avec la balise. 
document.writeln("<h1>Pouet</>");


// Les tableaux 
var fruits = ["bananes", "pommes", "raisins", "fraises"];
console.log (fruits[0]);

console.log("DANS LA BOUCLE");
for(var index = 0; index < 4; index++){
    console.log(fruits[index]);
}

// console.log("DANS LA BOUCLE");
// for(var i = 0; i < 4; index++){
//     console.log(fruits[i]);
// }

// Pour faire tout un tableau + ne pas faire plus de 3 boucles dans des boucles
console.log("DANS LA BOUCLE");
for(var index = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// Les objets sont des types de variables dans lesquels on peut avoir des clés et des ojets
var personnes = {
    nom:"moussa",
    moyenne:15,
    email:"test@test",
}
// Alert est limité pour prendre toute la variable il vaut mieux faire une console log

// On peut faire un tableau d'objets

var personna = [
    {
        nom:"moussa",
        moyenne:15,
        email:"test@test",
    },
    {
        nom:"juju",
        moyenne:10,
        email:"juju@test",
    },
    {
        nom:"pwet",
        moyenne:20,
        email:"pwet@test",
    },
]
console.log(personna[0].nom+" "+"une moyenne de:"+" ".moyenne[0]);
console.log(personna[0].nom,"une moyenne de:",moyenne[0]);

// Si tu souhaites parcourir toute une categorie tu dois utiliser une boucle for

// Les fonctions ressemblent a une variable; sauf que dans ce cas c'est un bout de code, d'operations. 
// Il faut les appeler

// Les fonctions prédéfinies

var afpa = "Paris 75";
console.log(typeof(afpa));
// toutjavascript.com 

function afpa(){
    console.log("Je suis la fonction afpa");
    moussa();
}
function moussa(){
    console.log("Je suis la fonction moussa");
}
// Pour appeler nom de la fonction + (). On evite d'avoir un nom de var et function du meme nom. 
afpa();

/* Ici la var est une fonction, il faut toujours que l'appel soit fait apres la var. 
var moussa = function(){
    console.log("Je suis la fonction moussa")
}

console.log(moussa);

*/

function afpa(){
    console.log(5*2);
}

var test = prompt("un nombre");
// convertir en entier naturel
test = parseInt(test);
console.log(test);
// Convertir en nb decimaux
test = parseFloat(test);
console.log(test);

afpa_v2(25,100);

function afpa_v2(nbre1,nbre2,nbre3){
    // console.log(nbre1*nbre2);
    //var calcul = nbre1*nbre2;

    return nbre1*nbre2*nbre3;
}
// On met rarement un console.log dans une fonction. Car on veut juste le résultat.
//Une fonction a forcement un seul return a la fin. ## Il n'apparait pas obligatoirement. Neanmoins avec un parametre on essaye d'avoir un return.

function afpa_v2(...params){
    var resultat=0;
    params.forEach(param =>{
        console.log(param);
        resultat += param;

    });
    return resultat
}
afpa_v2(5,15,25);
afpa_v2(5,15);
afpa_v2(5);
// Quand dans une fonction on ne connait pas le nombres de param on fait ...paramS on essaye toujours de le mettre au pluriel puis dans le foreach au singulier
// Cela retourne les parametres dans un tableau.
// Pour automatiser un script on va donc chercher a (...) puis faire une boucle qui va parcourir mon tableau
// La boucle FOR EACH permet de parcourir les elements d'un tableau

// for(var index = 0; index < chiffres.length; index++){
//     console.log("BOUCLE FOR: "+chiffres[index]);
// } 
// LA MEME CHOSE QUE FOR EACH en boucle FOR
  




function afpa(params){
    console.log(params);
}
// Les fonctions anonymes 
// Ici la var prend le nom de la function
var moussa = function(params){
    console.log(params);
}
(function(params){
    console.log(params)
})(); //A la fin (); fait que la fonction s'appel toute seule. 
// elle bloque les autres fonctions. Quand on utilise une fct anonyme il faut bien mettre des ; avant sinon probleme

(function(params){
    console.log(params);
})

var afpa2 = "Paris"
var afpa2 = "75"
console.log(afpa2);
// AVEC LET
// let afpa1 = "Paris"
let afpa1 = "75"
console.log(afpa1);
// Let utilisé pour la sécurité, avec let on peut pas avoir  2 nom de var similaires. 

// Les objets prédéfnies 
// window
// document
// navigator
// Array
// Boolean
// Date
// Error
// function    
// image
// math
// Numberobject
// RegExp
// String

// Les maths .pi .sqrt .cos .round .random .max .pow