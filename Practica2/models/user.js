function getNextUserID(){
    if (!getNextUserID.counter) {
        getNextUserID.counter = 1;
    }
    return getNextUserID.counter++;
}

class UserException{
    constructor(errorMessage){
        this.errorMessage = errorMessage;
    }
}

class User{
    static #usedEmail = new Set();

    #userID;
    #userName;
    #email;
    #password;
    #joinedAt;

    constructor(userName, email, password){
        if(!userName || name.trim() === ""){
            throw new UserException("El nombre es requerido");
        }
        if(!email || email.trim() === ""){
            throw new UserException("El correo es requerido");
        } else if(User.#usedEmail.has(email.toLowerCase())){
            throw new UserException("Ya existe una cuenta ligada a ese correo");
        }
        if (!password || password.length < 8) {
            throw new UserException("La contraseña debe tener al menos 8 caracteres");
        }

        this.#userID = getNextUserID();
        this.#userName = name
        this.#email = email.toLowerCase();
        this.#password = password;
        this.#joinedAt = new Date();

        User.#usedEmail.add(this.#email.toLowerCase());
    }

    get userID(){
        return this.#userID;
    }

    set userID(userID){
        throw new UserException("ID's are auto-generated.");
    }

    get userName(){
        return this.#userName;
    }

    set userName(userName){
        if(!userName || name.trim() === ""){
            throw new UserException("El nombre es requerido");
        } else{
            this.#userName = userName;
        }
    }

    get email(){
        return this.#email;
    }

    set email(email){
        if(!email || email.trim() === ""){
            throw new UserException("El correo es requerido");
        } else if(User.#usedEmail.has(email.toLowerCase())){
            throw new UserException("Ya existe una cuenta ligada a ese correo");
        } else{
            this.#email = email.toLowerCase();
            User.#usedEmail.add(this.#email.toLowerCase());
        }
    }

    get password(){
        return this.#password;
    }

    set password(password){
        if (!password || password.length < 8) {
            throw new UserException("La contraseña debe tener al menos 8 caracteres");
        } else{
            this.#password = password;
        }
    }

    get joinedAt(){
        return this.#joinedAt;
    }

    set joinedAt(userID){
        throw new UserException("Este atributo no se puede modificar");
    }
}