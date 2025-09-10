function de_chill_function(matriz, num){
    var generic;
    if(num > matriz.length || num < 0){
        generic = "NO existe ese elemento";
        return generic;
    }
    generic = matriz[num][0] + matriz[num][1];
    return generic;
}


let names = [
    ["January", 4],
    ["February", 3],
    ["March", 2],
    ["April", 5]
];

console.log(de_chill_function(names, 9));

class Alumno {
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}