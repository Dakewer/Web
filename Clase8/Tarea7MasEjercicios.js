
/* Ejercicio 1 */
console.log("Inicio del ejercicio 1\n");
const arreglo = [];

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

for (let i = 0; i < 10; i++) {
    let libro = {
        id : i,
        year : getRndInteger(2000, 2020),
        autor : ("Autor " + getRndInteger(0, 100))
    }
    libro.fecha = new Date(libro.year + "-01-01T12:00:00.000Z");
    arreglo.push(libro);
}

console.table(arreglo);
console.log("Libros en JSON: ", JSON.stringify(arreglo));
console.log("Fin del ejercicio 1\n");


/* Ejercicio 2 */
console.log("Inicio del ejercicio 2\n");
const libro = {
    id: 69,
    year: 2005,
    autor: "Autor " + 2005,
    fecha: "2005-01-01T12:00:00.000Z"
};
arreglo.unshift(libro);
console.table(arreglo);

function reverseArray(arregloViejo, arregloNuevo){
    const longitud = arregloViejo.length;
    for(let i = 0; i < longitud; i++){
        arregloNuevo.push(arregloViejo.pop());
    }
    return arregloNuevo;
}

let nuevosLibros = [];
nuevosLibros = reverseArray(arreglo, nuevosLibros);
console.table(nuevosLibros);
console.log("Libros en arreglo original: ", arreglo); // Debe ser 0
console.log("Fin del ejercicio 2\n");

/* Ejercicio 3 */
console.log("Inicio del ejercicio 3\n");

let librosCopy = nuevosLibros;
function deleteBook(id, books){
    let index = books.findIndex(item => item.id <= id);
    if(index != -1){
        delete books[index];
        console.log("Se ha eliminado el libro ", id);
        return true;
    }
    else{
        console.log("No se encontró el libro ", id);
        return false;
    }
}
function filterYear(year, books){
    return books.filter(item => item.year <= year);
}
deleteBook(4, librosCopy);
console.table(librosCopy);
let librosFiltrados = filterYear(2012, librosCopy);
console.table(librosFiltrados);
console.log("Fin del ejercicio 3\n");

/* Tarea 7 */
console.log("Inicio de la tarea\n");

const arregloTarea = [];
for (let i = 0; i < 20; i++) {
    let libro = {
        id : i,
        year : getRndInteger(2000, 2020),
        autor : ("Autor " + getRndInteger(0, 100)),
        clave : getRndInteger(100, 999),
        numeroPalabras : getRndInteger(1000, 100000),
    }
    libro.fecha = new Date(libro.year + "-01-01T12:00:00.000Z");
    arregloTarea.push(libro);
}

const libroTarea = {
    id: 69,
    year: 2005,
    autor: "Autor " + 2005,
    fecha: "2005-01-01T12:00:00.000Z",
    clave: 420,
    numeroPalabras : 40000
};
console.log("añadiré mi libro\n");
arregloTarea.splice(7, 0, libroTarea);
console.table(arregloTarea);
console.log("Arreglo sorteado\n");
arregloTarea.sort(function (a, b) {return a.clave - b.clave; });
console.table(arregloTarea);

const opcion = prompt("Elige una opción\n"
+ "T - la suma total de palabras\n"
+ "P - ver el promedio de palabras\n"
+ "MX - el libro con más palabras y cuantas\n"
+ "MN - el libro con menos palabras y cuantas\n").toUpperCase()

switch (opcion) {
    case "T":
        let contador = 0;
        for(let i in arregloTarea){
            contador += arregloTarea[i].numeroPalabras;
        }
        console.log("Total de palabras: " + contador);
        break;

    case "P":
        let count = 0;
        for(let i in arregloTarea){
            count += arregloTarea[i].numeroPalabras;
        }
        console.log("El promedio de palabras: " + count/20);
        break;

    case "MX":
        let max = -1;
        let claveMax;
        for(let i in arregloTarea){
            if(arregloTarea[i].numeroPalabras > max){
                max = arregloTarea[i].numeroPalabras;
                claveMax = arregloTarea[i].clave;
            }
        }
        console.log("El libro con más palabras es " + claveMax + "con un total de " + max);
        break;

    case "MN":
        let min = 9999999999999999999999999999999;
        let claveMin;
        for(let i in arregloTarea){
            if(arregloTarea[i].numeroPalabras < min){
                min = arregloTarea[i].numeroPalabras;
                claveMin = arregloTarea[i].clave;
            }
        }
        console.log("El libro con menos palabras es " + claveMin + "con tan solo " + min);
        break;
}
console.log("Fin de la tarea 7\n");