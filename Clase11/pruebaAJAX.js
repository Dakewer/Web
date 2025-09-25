let url = "https://api.npoint.io/3fa52a2750f35a901cae";
let datos = {var1: "Hola", var2: "Mundo"};
let userJson = "https://jsonplaceholder.typicode.com/users/";

function guardarEnJSON(datos, urlJSON){
    let xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.send([JSON.stringify(datos)]);
    xhr.onload = function () {
        if(xhr.status != 200){
            alert(xhr.status + ": " + xhr.statusText);
        } else {
            console.log("Guardado " + xhr.responseText);
        }
    }
}

function ejercicio1(){
    let llamada = new XMLHttpRequest();
    llamada.open("GET", "https://jsonplaceholder.typicode.com/users/");
    llamada.send();
    llamada.onload = function () {
        if(llamada.status != 200){
            alert(llamada.status + ": " + llamada.statusText);
        } else{
          console.log("Usuarios: ");
          console.table(JSON.parse(llamada.responseText));
        }
    }
}

function ejercicio2(id){
    let llamada = new XMLHttpRequest();
    llamada.open("GET", "https://jsonplaceholder.typicode.com/users/");
    llamada.send();
    llamada.onload = function (){
        if(llamada.status == 404){
            alert("Usuarios no encontrado")
        } else if(llamada.status != 200){
            alert(llamada.status + ": " + llamada.statusText);
        }
        else{
            console.log("Usuarios encontrados ");
            let usuario = JSON.parse(llamada.responseText);
            let toPrint = "<b>Usuarios: </b>" + usuario.name; +
                                    "<br> <b>Correo: </b>" + usuario.email;
            document.getElementById("prueba").innerHTML = toPrint;
        }
    }
}
