function getNextTagID(){
    return 1;
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
        this.id = getNextTagID();
        this.name = name;
        this.color = color;
    }

    get id(){
        return this.id;
    }

    set id(value){
        throw new TagException("ID's are auto-generated.");
    }
}