class UserController {
    constructor(data) {
        this.data = data;
    }

    updateUserIDCounter() {
        if (this.data.users.length === 0) {
            this.counter = 1;
        } else {
            const maxId = Math.max.apply(null, this.data.users.map(function(user) {
                return user.userID;
            }));
            this.counter = maxId + 1;
        }
    }

    createUser(name, email, password) {
        const newUser = new User(name, email, password);
        this.data.users.push(newUser);
        this.updateUserIDCounter();
        console.log("Usuario creado:", newUser.userName);
    }

    getUserById(id) {
        const user = this.data.users.find(user => user.userID === id);
        if (!user) {
            return "404 - User not found";
        }
        return {
            "#id": user.userID,
            "#name": user.userName,
            "#email": user.email,
            "#password": user.password,
            "#joinedAt": user.joinedAt
        };
    }

    searchUsers(attribute, value) {
        const sampleUser = new User("usuario", "usuario@email.com", "Password123");

        if (!sampleUser.hasOwnProperty(attribute)) {
            throw new UserException("El atributo no existe");
        }

        if (!value || value.toString().trim() === "") {
            throw new UserException("Tienes que ingresar algún valor");
        }
        const searchValue = value.toString().toLowerCase().trim();

        const filteredUsers = this.data.users.filter(user => {
            const attributeValue = user[attribute];

            if (attributeValue == null) {
                return false;
            }
            if (attributeValue instanceof Date) {
                return attributeValue.toString().toLowerCase().includes(searchValue);
            } else if (typeof attributeValue === "string") {
                return attributeValue.toLowerCase().includes(searchValue);
            } else {
                return attributeValue.toString().toLowerCase().includes(searchValue);
            }
        });

        return filteredUsers.map(user => ({
            "#id": user.userID,
            "#name": user.userName,
            "#email": user.email,
            "#password": user.password,
            "#joinedAt": user.joinedAt
        }));
    }

    getAllUsers() {
        return this.data.users.map(user => ({
            "#id": user.userID,
            "#name": user.userName,
            "#email": user.email,
            "#password": user.password,
            "#joinedAt": user.joinedAt
        }));
    }

    updateUser(id, obj_new_info) {
        let userIndex = this.data.users.findIndex(user => user.userID === id);

        if (userIndex === -1) {
            throw new UserException("No existe este usuario");
        }

        const user = this.data.users[userIndex];
        const allowedKeys = ["userName", "email", "password"];
        const validKeys = Object.keys(obj_new_info).filter(key =>
            allowedKeys.includes(key) && obj_new_info[key] !== undefined && obj_new_info[key] !== null
        );

        if (validKeys.length === 0) {
            throw new UserException("No hay nada que actualizar");
        }

        validKeys.forEach(key => {
            if (key === "userName") user.userName = obj_new_info[key];
            if (key === "email") user.email = obj_new_info[key];
            if (key === "password") user.password = obj_new_info[key];
        });

        return true;
    }

    deleteUser(id) {
        const userIndex = this.data.users.findIndex(user => user.userID === id);

        if (userIndex === -1) {
            throw new UserException("El usuario no existe");
        }

        this.data.users = this.data.users.filter(user => user.userID !== id);
        return true;
    }

}