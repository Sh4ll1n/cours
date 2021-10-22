console.log(document.getElementById("container"));
console.log(document.getElementsByClassName("container"));
console.log(document.getElementsByTagName('p'));
//------------------------------------------------------------------
// querySelector Il prend le premier qui trouve
console.log(document.querySelector('.container'));
console.log(document.querySelector('#container'));
// queryselectorALL Il prend tout 
console.log(document.querySelectorAll('.container'));
// Le innerHTML permet de changer le contenu de mon html. 
document.querySelector('#container').innerHTML = "Hello";
//document.querySelector('#container').html("<h1>Hello</h1>");
// 
var mes_classes = document.getElementsByClassName('container');
console.log(mes_classes[0].style.color='blue')
console.log(mes_classes[1].style.color='white')
console.log(mes_classes[2].style.color='red')

// 
var paraph = document.getElementsByTagName('p');
for (var compteur = 0; compteur > paraph.length; compteur++) {
    console.log(paraph[compteur]);
    paraph[compteur].style.color='blue';
}