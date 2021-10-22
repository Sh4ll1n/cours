// function verif(event) {
//     event.preventDefault();
//     //console.log(document.querySelector('#nom').value);
//     var nom = document.document.querySelector('#nom').value;
//     var prenom = document.document.querySelector('#prenom').value;
//     var email = document.document.querySelector('#email').value;
    
//     if(nom.length){


//     }
// }

function verif(event) {
    event.preventDefault();

    var num1 = parseInt(document.querySelector('#num1').value);
    var op = (document.querySelector('#op').value);
    var num2 = parseInt(document.querySelector('#num2').value);

    var result = 0;
    if (num1 < 0 || num2 < 0) {
        document.querySelector("#error").innerHTML = " C PA BONO";
    }

    switch(op){
        case "+":
            result = num1+num2;
            break;
        case "-":
            result = num1-num2;
            break;
        case "*":
            result = num1*num2;
            break;
        case "/":
            result = num1/num2;
            break;
        case "%":
            result = num1%num2;
            break;

    }
        console.log(result);
        document.querySelector("#resultat").value = result;
        //console.log(typeof(num1)); 
        
        //     if (op == "+") {
            //         console.log((+num1)+(+num2)) //Les + pour forcer en Int. 
            //     }
            
        //     if (op == "-") {
            //         console.log(num1-num2)
            //     }
                
        //     if (op == "*") {
            //         console.log(num1*num2)
            //     }
                    
        //     if (op == "/") {
            //         console.log(num1/num2)
            //     }
}
                        
// ---------------------------------------------------------------

// Events. 
// Onclick
 
document.querySelector('#num1').onmouseover = function(){
document.querySelector('#num1').style.background='green';

}
document.querySelector('#num1').onmouseout = function(){
document.querySelector('#num1').style.background='black';

}

