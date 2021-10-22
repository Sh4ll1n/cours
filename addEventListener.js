// Ce sont les écouteurs d'évenements.  
// On previent avant de soumettre le formulaire
// Pas de 'onclick' avec les addEventListener 
// Quand on utilise les écouteurs pas besoin des parenthese quand on appel une fonction
// function changeBG(){
//     console.log("Je suis la fonction cible");
// }
// document.querySelector('.cible').addEventListener("click", changeBG)
// Utiliser un isNaN pr le tel

var tel = document.querySelector('#tel');

tel.addEventListener("keyup", function() {
    console.log(tel.value);
    document.querySelector(".errorTel")
})