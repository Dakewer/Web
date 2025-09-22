function getNextTagID(){
    if (!getNextTagID.counter) {
        getNextTagID.counter = 1;
    }
    return getNextTagID.counter++;
}

class TagException{
    constructor(errorMessage){
        this.errorMessage = errorMessage;
    }
}

class Tag{
    #id;
    #name;
    #color;

    constructor(name, color){
        // Línea 19 sacada de GeeksForGeeks:
        // https://www.geeksforgeeks.org/javascript/javascript-check-if-a-string-is-a-valid-hex-color-representation/
        const Reg_Exp = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i;

        if(!name || name.trim() === ""){
            throw new TagException("Se requiere un nombre");
        }
        if(!Reg_Exp.test(color)){
            throw new TagException("Ingrese un color válido");
        }

        this.#id = getNextTagID();
        this.#name = name;
        this.#color = color;

    }

    get id(){
        return this.#id;
    }

    set id(value){
        throw new TagException("ID's are auto-generated.");
    }

    get name(){
        return this.#name;
    }
    set name(name){
        if(!name || name.trim() === ""){
            throw new TagException("Se requiere un nombre");
        }
        this.#name = name;
    }
    get color(){
        return this.#color;
    }
    set color(color){
        if(!Reg_Exp.test(color)){
            throw new TagException("Ingrese un color válido");
        }
        this.#color = color;
    }
}