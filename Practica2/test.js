let data = {
    "users": [],
    "tasks": [],
    "tags": []
}

const userController = new UserController(data);
const taskController = new TaskController(data);
const tagController = new TagController(data);

function initializeValidSets() {
    const tagIds = data.tags.map(tag => tag.id);
    const userIds = data.users.map(user => user.userID);

    if (typeof Task !== 'undefined') {
        Task.setValidTags(new Set(tagIds));
        Task.setValidUsers(new Set(userIds));
    }
}

// PUNTO 1
console.log("   PUNTO 1   ");
console.log("Users: ");
console.table(userController.getAllUsers());
console.log("Tasks: ");
console.table(taskController.getAllTasks());
console.log("Tags: ");
console.table(tagController.getAllTags());

// PUNTO 2
console.log("   PUNTO 2   ");
try {
    console.log("Creating User 1: ");
    userController.createUser("Dorx No. 1", "dorx1@correo.com", "Pass12345");
    console.log("User 1 Created!");

    console.log("Creating User 2: ");
    userController.createUser("Dorx No. 2", "dorx2@correo.com", "Pass12345");
    console.log("User 2 Created!");

    console.log("Creating User 3: ");
    userController.createUser("Dorx No. 3", "dorx3@correo.com", "Pass12345");
    console.log("User 3 Created!");

    console.log("All Users Created:");
    console.table(userController.getAllUsers());
} catch (error) {
    console.error("Error creating users:", error.errorMessage);
}

// PUNTO 3
console.log("   PUNTO 3   ");
console.log("User with ID 2:");
const user2 = userController.getUserById(2);
console.table([user2]);

// PUNTO 4
console.log("   PUNTO 4   ");
console.log("Filtro por nombre 'Dorx':");
try {
    const filteredUsers = userController.searchUsers("userName", "Dorx");
    console.table(filteredUsers);
} catch (error) {
    console.error("Error filtering users:", error.errorMessage);
}

// PUNTO 5
console.log("   PUNTO 5   ");
try {
    console.log("Updating User ID 3:");
    userController.updateUser(3, {"userName": "ACTUALIZADORX"});
    console.table(userController.getAllUsers());
} catch (error) {
    console.error("Error actualizando", error.errorMessage);
}

// PUNTO 6
console.log("   PUNTO 6   ");
try {
    console.log("Deleting User ID 1:");
    userController.deleteUser(1);
    console.table(userController.getAllUsers());
} catch (error) {
    console.error("Error borrando usuario:", error.errorMessage);
}

initializeValidSets();

// PUNTO 7
console.log("   PUNTO 7   ");
try {
    console.log("Creando 5 etiquetas");
    tagController.createTag("Trabajo", "#FF0000");
    tagController.createTag("Personal", "#00FF00");
    tagController.createTag("Urgente", "#0000FF");
    tagController.createTag("Importante", "#FFFF00");
    tagController.createTag("Proyecto", "#FF00FF");
    console.log("Se crearon todas");
    console.table(tagController.getAllTags());
} catch (error) {
    console.error("Error creando tags", error.errorMessage);
}

// PUNTO 8
console.log("   PUNTO 8   ");
try {
    console.log("Updating Tag ID 4:");
    tagController.updateTag(4, {"name": "ETIQUETADORX", "color": "#fcba03"});
    console.log("Tag actualizado");
    console.table(tagController.getAllTags());
} catch (error) {
    console.error("Error actualizando las tags", error.errorMessage);
}

// PUNTO 9
console.log("   PUNTO 9   ");
try {
    console.log("Deleting Tag ID 2:");
    tagController.deleteTag(2);
    console.log("Tag borrada");
    console.table(tagController.getAllTags());
} catch (error) {
    console.error("Error borrando tag", error.errorMessage);
}

// PUNTO 10
console.log("   PUNTO 10   ");
try {
    console.log("7 Treas");

    // Tarea 1
    taskController.createTask(
        "Reunión de equipo",
        "Reunión semanal del equipo de desarrollo",
        "2025-02-11",
        2,
        "A",
        [1, 3]
    );

    // Tarea 2
    taskController.createTask(
        "Entregar reporte",
        "Reporte",
        "2077-11-02",
        2,
        "A",
        [1, 4]
    );

    // Tarea 3
    taskController.createTask(
        "Salvar las torres gemelas",
        "Fue un trabajo interno XD",
        "2001-09-11",
        3,
        "A",
        [3, 5]
    );

    // Tarea 4
    taskController.createTask(
        "Practica 2",
        "Tarea importante para Dorx",
        "2025-09-24",
        3,
        "A",
        [4, 5]
    );

    // Tarea 5
    taskController.createTask(
        "Preparar presentación",
        "Preparar slides para la reunión",
        "2024-03-28",
        2,
        "A",
        [1, 3, 4]
    );

    // Tarea 6
    taskController.createTask(
        "Capacitación",
        "Capacitación del nuevo equipo",
        "2025-04-01",
        3,
        "A",
        [3, 5]
    );

    // Tarea 7
    taskController.createTask(
        "Ver Gundam",
        "Ya me hace falta un descanzo :( ",
        "2025-09-27",
        2,
        "A",
        [1, 4, 5]
    );

    console.log("Se logró");
    console.table(taskController.getAllTasks());
} catch (error) {
    console.error("Error creando las task", error.errorMessage);
}

// PUNTO 11
console.log("   PUNTO 11   ");
try {
    console.log("Updating task ID 5: Remove tags");
    taskController.updateTask(5, {"tags": []});
    console.log("Se actualizó la tarea");
    console.table([taskController.getTaskById(5)]);
} catch (error) {
    console.error("Error uactualizando tarea", error.errorMessage);
}

// PUNTO 12
console.log("   PUNTO 12   ");
try {
    console.log("Updating Tasks ID 1 & 4:");
    taskController.updateTask(1, {"description": "Dorx Task"});
    taskController.updateTask(4, {"description": "Dorx Task"});
    console.log("Se actulizaron las tareas");

    console.log("Task 1:");
    console.table([taskController.getTaskById(1)]);
    console.log("Task 4:");
    console.table([taskController.getTaskById(4)]);
} catch (error) {
    console.error("Error updating", error.errorMessage);
}

// PUNTO 13
console.log("   PUNTO 13   ");
try {
    console.log("Tasks filtradas 'Dorx':");
    const dorxTasks = taskController.searchTasks("description", "Dorx");
    console.table(dorxTasks);
} catch (error) {
    console.error("Error filtrando las task:", error.errorMessage);
}

// PUNTO 14
console.log("   PUNTO 14   ");
try {
    console.log("Tasks filtradas por tags [1, 3]:");
    const taggedTasks = taskController.findTasksByTag([1, 3]);
    console.table(taggedTasks);
} catch (error) {
    console.error("Error filtering por tags:", error.errorMessage);
}

// PUNTO 15
console.log("   PUNTO 15   ");
try {
    console.log("Deleting Task ID 3:");
    taskController.deleteTask(3);
    console.log("Se borró el task");
    console.table(taskController.getAllTasks());
} catch (error) {
    console.error("Error borrando task", error.errorMessage);
}

console.log("Ya es toda wei");