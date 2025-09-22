function getNextTaskID(){
    return 1;
}

class TaskException{
    constructor(errorMessage){
        this.errorMessage = errorMessage;
    }
}

function isDateValid(dateStr) {
    return !isNaN(new Date(dateStr));
}

class Task{
    #taskID;
    #title;
    #description;
    #dueDate;
    #owner
    #status;
    #tags

    constructor(title, description, dueDate, owner, status, tags){
        if(!title || title.trim() === ""){
            throw new TaskException("Se requiere un título");
        }
        if(!isDateValid(dueDate)){
            throw new TaskException("Se requiere una fecha valida");
        }
        if(!User.#usedEmail.has(owner)){
            throw new TaskException("El usuario no está registrado");
        }
        if(status !== "A" || status !== "F" || status !== "C"){
            throw new TaskException("No se reconoce este estatus");
        }
        if(Object.is(tags, Array)){
            throw new TaskException("Tags debe ser un array");
        }

        this.#taskID = getNextTaskID();
        this.#title = title;
        this.#description = description;
        this.#dueDate = dueDate;
        this.#owner = owner;
        this.#status = status;
        this.#tags = tags;
    }


}