/*

// Prueba 1
console.log("uno");
setTimeout(function timeout() {
    console.log("A");
}, 7000);
setTimeout(function timeout() {
    console.log("B");
}, 0);
setTimeout(function timeout() {
    console.log("C");
}, 2000);
setTimeout(function timeout() {
    console.log("D");
}, 1000);
console.log("end");

// Ejercicio 1
for(let i= 0; i < 5; i++){
    setTimeout(function(){
        console.log("Hola");
    }, i * 1000);
}
for(let i= 0; i < 4; i++){
    setTimeout(function(){
        console.log("Mundo");
    },  i * 1000);
}

// Entendiendo las promesas Promise en JS
let promesa1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        if(Math.random() < 0.5) {
            console.log("Procesando la promesa");
            resolve("¡Correcto!");
        } else{
            reject(new Error("Algo falló"));
        }
    }, 1000)
})

promesa1.then(function exito(result){
    console.log(result);
}, function rechazo(error){
    console.log(error);
});


 */

function loadScripts(src) {
    return new Promise(function(resolve, reject){
        let script = document.createElement('script');
        script.src = src;
        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error("Script load error: " + src));
        document.head.append(script);
    })
}
