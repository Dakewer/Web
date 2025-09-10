class AlumnosTarea {
    constructor(nombre, carrera, calificaciones) {
        this.nombre = nombre;
        this.carrera = carrera;
        this.calificaciones = calificaciones;
    }

    static fnAprobados(alumnArray, materia) {
        let aprobados = [];
        let materiaExiste = false;

        for(let i = 0; i < alumnArray.length; i++) {
            const alumno = alumnArray[i];
            if(alumno.calificaciones && alumno.calificaciones[materia] !== undefined) {
                materiaExiste = true;
                if(alumno.calificaciones[materia] >= 6){
                    aprobados.push(alumno.nombre);
                }
            }
        }
        if (aprobados.length > 0){
            console.log("Los alumnos que aprobaron " + materia + ": " + aprobados.join(", "));
        } else if(materiaExiste){
            console.log("Nadie aprobó la materia " + materia);
        } else{
            console.log("La materia " + materia + " no existe");
        }
    }

    static fnPromedio(alumnArray, nombreAlumno) {
        const alumno = alumnArray.find(alumn => alumn.nombre === nombreAlumno);

        if(!alumno){
            console.log("No existe un tal " + nombreAlumno);
            return;
        }

        const notas = Object.values(alumno.calificaciones);
        if(notas.length === 0) {
            console.log(nombreAlumno + " no tiene calificaciones");
            return;
        }

        let count = 0;
        for(let i = 0; i < notas.length; i++){
            count += notas[i];
        }
        const promedio = count/notas.length;
        console.log("Promedio de " + nombreAlumno + " es de " + promedio);
    }
}

const alumnos = [
    new AlumnosTarea("Ana García", "Ingeniería", {
        "Matemáticas": 8,
        "Física": 7,
        "Programación": 9
    }),

    new AlumnosTarea("Luis Martínez", "Medicina", {
        "Anatomía": 6,
        "Biología": 5,
        "Química": 7
    }),

    new AlumnosTarea("María López", "Derecho", {
        "Derecho Civil": 8,
        "Derecho Penal": 9,
        "Ética": 10
    }),

    new AlumnosTarea("Carlos Rodríguez", "Ingeniería", {
        "Matemáticas": 5,
        "Física": 4,
        "Programación": 6
    }),

    new AlumnosTarea("Elena Torres", "Psicología", {
        "Psicología Clínica": 8,
        "Neurociencia": 7,
        "Estadística": 6
    }),

    new AlumnosTarea("Javier Sánchez", "Administración", {
        "Contabilidad": 9,
        "Economía": 8,
        "Marketing": 7
    })
];

AlumnosTarea.fnAprobados(alumnos, "Matemáticas");
AlumnosTarea.fnAprobados(alumnos, "Biología");
AlumnosTarea.fnAprobados(alumnos, "Historia");
AlumnosTarea.fnPromedio(alumnos, "Ana García");
AlumnosTarea.fnPromedio(alumnos, "Pedro Pérez");
AlumnosTarea.fnPromedio(alumnos, "Dorx");