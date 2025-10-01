function getNextTaskID(){
    if (!getNextTaskID.counter) {
        getNextTaskID.counter = 1;
    }
    return getNextTaskID.counter++;
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
    static validUsers = new Set();
    static validTasks = new Set();

    static setValidUsers(usersSet) {
        Task.validUsers = usersSet;
    }

    static setValidTags(tagsSet) {
        Task.validTags = tagsSet;
    }

    #taskID;
    #title;
    #description;
    #dueDate;
    #owner
    #status;
    #tags

    constructor(title, description, dueDate, owner, status, tags){
        if(!Task.validUsers || !Task.validUsers.has(owner)){
            throw new TaskException("El usuario no está registrado");
        }
        if(!title || title.trim() === ""){
            throw new TaskException("Se requiere un título");
        }
        if(!isDateValid(dueDate)){
            throw new TaskException("Se requiere una fecha valida");
        }
        if(status !== "A" && status !== "F" && status !== "C"){
            throw new TaskException("No se reconoce este estatus");
        }
        if(!Array.isArray(tags)){
            throw new TaskException("Tags debe ser un array");
        }
        if (Task.validTags && Task.validTags.size > 0) {
            const invalidTags = tags.filter(tagId => !Task.validTags.has(tagId));
            if (invalidTags.length > 0) {
                throw new TaskException(`Los siguientes tags no existen: ${invalidTags.join(', ')}`);
            }
        }

        this.#taskID = getNextTaskID();
        this.#title = title;
        this.#description = description;
        this.#dueDate = dueDate;
        this.#owner = owner;
        this.#status = status;
        this.#tags = tags;
    }

    get taskID(){
        return this.#taskID;
    }

    set taskID(taskID){
        throw new TaskException("ID's are auto-generated.");
    }
    get title(){
        return this.#title;
    }
    set title(title){
        if(!title || title.trim() === ""){
            throw new TaskException("Se requiere un título");
        } else{
            this.#title = title;
        }
    }
    get description(){
        return this.#description;
    }

    set description(description){
        this.#description = description;
    }
    get dueDate(){
        return this.#dueDate;
    }
    set dueDate(date){
        if(!isDateValid(date)){
            throw new TaskException("Se requiere una fecha valida");
        } else{
            this.#dueDate = date;
        }
    }
    get owner(){
        return this.#owner;
    }
    set owner(owner){
        this.#owner = owner;
    }
    get status(){
        return this.#status;
    }
    set status(status){
        if(status !== "A" && status !== "F" && status !== "C"){
            throw new TaskException("No se reconoce este estatus");
        } else{
            this.#status = status;
        }
    }
    get tags(){
        return this.#tags;
    }
    set tags(tags){
        if(!Array.isArray(tags)){
            throw new TaskException("Tags debe ser un array");
        }

        if (Task.validTags && Task.validTags.size > 0) {
            const invalidTags = tags.filter(tagId => !Task.validTags.has(tagId));
            if (invalidTags.length > 0) {
                throw new TaskException(`Los siguientes tags no existen: ${invalidTags.join(', ')}`);
            }
        }

        this.#tags = tags;
    }
}