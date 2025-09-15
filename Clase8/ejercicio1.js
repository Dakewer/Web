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

arreglo.unshift(libro = {
    id : 69,
    year :2005,
    autor : "Autor " + 2005,
    fecha : "2005-01-01T12:00:00.000Z"});
console.table(arreglo);


function reverseArray(arr){
    const reversedArray = [];
    for(let i = arr.length - 1; i >= 0; i--){
        reversedArray.push(arr[i]);
    }
    return reverseArray;
}


const myArreglazo = reverseArray(arreglo);
console.table(myArreglazo);