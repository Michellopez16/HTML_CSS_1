
var x=10;
alert("Mi mensaje de alerta!!! En un archivo externo");


document.write("hola"+x);

if (x < 12){
    alert("En estado de alerta por la var x");
    }
//var suma= undefined
var suma=0;
for (i=0;i<5;i++){
    suma +=i;
}

alert(suma);

var user = prompt("ingresa tu nombre");
alert(user);

var result = confirm("Realmente quieres salir de la pagina?");

if (result == true){
    alert("Bye");
}
else{
    alert("Gracias por quedarte");
}

function myAlert(){
    alert("¡hoolaa!");
}

setInterval(myAlert,3000);