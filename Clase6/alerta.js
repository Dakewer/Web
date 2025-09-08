alert("Soy una alerta");

function average(arreglo) {
    var temp = 0;
    for(let i = 0; i < arreglo.length; i++) temp = temp + arreglo[i];
    return temp/arreglo.length;
}

const intento =[2.4, 50, 21]
console.log("El promedio es: " + average(intento));