class TaskController {
    constructor(data) {
        this.data = data;
    }

    updateTaskIDCounter() {
        if (this.data.tasks.length === 0) {
            getNextTaskID.counter = 1;
        } else {
            const maxId = Math.max.apply(null, this.data.tasks.map(function(task) {
                return task.taskID;
            }));
            getNextTaskID.counter = maxId + 1;
        }
    }

    createTask(title, description, dueDate, owner, status, tags) {
        const newTask = new Task(title, description, dueDate, owner, status, tags);
        this.data.tasks.push(newTask);
        this.updateTaskIDCounter();
        console.log("Tarea creada: ", newTask.title);
    }

    getTaskById(id) {
        const task = this.data.tasks.find(task => task.taskID === id);
        if (!task) {
            return "404 - Task not found";
        }
        return {
            "#id": task.taskID,
            "#title": task.title,
            "#description": task.description,
            "#due_date": task.dueDate,
            "#owner": task.owner,
            "#status": task.status,
            "#tags": task.tags.join(", ")
        };
    }

    searchTasks(attribute, value) {
        const sampleTask = new Task("sample", "sample", "2025-02-11", "owner", "A", []);

        if(!sampleTask.hasOwnProperty(attribute)) {
            throw new TaskException("El atributo no existe");
        }

        if(!value || value.toString().trim() === "") {
            throw new TaskException("Tienes que ingresar algún valor");
        }

        const searchValue = value.toString().toLowerCase().trim();

        const filteredTasks = this.data.tasks.filter(task => {
            const attributeValue = task[attribute];

            if(attributeValue == null) {
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

        return filteredTasks.map(task => ({
            "#id": task.taskID,
            "#title": task.title,
            "#description": task.description,
            "#due_date": task.dueDate,
            "#owner": task.owner,
            "#status": task.status,
            "#tags": task.tags.join(", ")
        }));
    }

    getAllTasks() {
        return this.data.tasks.map(task => ({
            "#id": task.taskID,
            "#title": task.title,
            "#description": task.description,
            "#due_date": task.dueDate,
            "#owner": task.owner,
            "#status": task.status,
            "#tags": task.tags.join(", ")
        }));
    }

    updateTask(id, obj_new_info) {
        let taskIndex = this.data.tasks.findIndex(task => task.taskID === id);

        if (taskIndex === -1) {
            throw new TaskException("No existe esta tarea");
        }
        const task = this.data.tasks[taskIndex];

        const allowedKeys = ["title", "description", "dueDate", "owner", "status", "tags"];
        const validKeys = Object.keys(obj_new_info).filter(key =>
            allowedKeys.includes(key) && obj_new_info[key] !== undefined
        );

        if (validKeys.length === 0) {
            throw new TaskException("No hay nada que actualizar");
        }

        validKeys.forEach(key => {
            if (key === "title") task.title = obj_new_info[key];
            if (key === "description") task.description = obj_new_info[key];
            if (key === "dueDate") task.dueDate = obj_new_info[key];
            if (key === "owner") task.owner = obj_new_info[key];
            if (key === "status") task.status = obj_new_info[key];
            if (key === "tags") task.tags = obj_new_info[key];
        });

        return true;
    }

    deleteTask(id) {
        const taskIndex = this.data.tasks.findIndex(task => task.taskID === id);

        if (taskIndex === -1) {
            throw new TaskException("La tarea no existe");
        }

        this.data.tasks = this.data.tasks.filter(task => task.taskID !== id);
        return true;
    }

    findTasksByTag(tagIds) {
        if (!Array.isArray(tagIds)) {
            throw new TaskException("Se debe proporcionar un array de IDs de tags");
        }
        if (tagIds.length === 0) {
            return [];
        }

        const existingTagIds = this.data.tags.map(tag => tag.id);
        const invalidTags = tagIds.filter(tagId => !existingTagIds.includes(tagId));

        if (invalidTags.length > 0) {
            throw new TaskException(`Los siguientes tags no existen: ${invalidTags.join(', ')}`);
        }

        const filteredTasks = this.data.tasks.filter(task => {
            return tagIds.every(tagId => task.tags.includes(tagId));
        });
        return filteredTasks.map(task => ({
            "#id": task.taskID,
            "#title": task.title,
            "#description": task.description,
            "#due_date": task.dueDate,
            "#owner": task.owner,
            "#status": task.status,
            "#tags": task.tags.join(", ")
        }));
    }
}