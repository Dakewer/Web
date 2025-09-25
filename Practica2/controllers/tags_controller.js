class TagController {
    constructor(data) {
        this.data = data;
    }

    updateTagIDCounter() {
        if (this.data.tags.length === 0) {
            getNextTagID.counter = 1;
        } else {
            const maxId = Math.max.apply(null, this.data.tags.map(function(tag) {
                return tag.id;
            }));
            getNextTagID.counter = maxId + 1;
        }
    }

    createTag(name, color) {
        const newTag = new Tag(name, color);
        this.data.tags.push(newTag);
        this.updateTagIDCounter();
        console.log("Tag creado: ", newTag.name);
    }

    getTagById(id) {
        const tag = this.data.tags.find(tag => tag.id === id);
        if (!tag) {
            return "404 - Tag not found";
        }
        return {
            "#id": tag.id,
            "#name": tag.name,
            "#color": tag.color
        };
    }

    searchTags(attribute, value) {
        const sampleTag = new Tag("sample", "#0000FF");

        if(!sampleTag.hasOwnProperty(attribute)) {
            throw new TagException("El tag no existe");
        }

        if (!value || value.toString().trim() === "") {
            throw new TagException("Tienes que ingresar algún valor");
        }

        const searchValue = value.toString().toLowerCase().trim();

        const filteredTags = this.data.tags.filter(tag => {
            const attributeValue = tag[attribute];

            if (attributeValue == null) {
                return false;
            }
            if (typeof attributeValue === "string") {
                return attributeValue.toLowerCase().includes(searchValue);
            } else {
                return attributeValue.toString().toLowerCase().includes(searchValue);
            }
        });

        return filteredTags.map(tag => ({
            "#id": tag.id,
            "#name": tag.name,
            "#color": tag.color
        }));
    }

    getAllTags() {
        return this.data.tags.map(tag => ({
            "#id": tag.id,
            "#name": tag.name,
            "#color": tag.color
        }));
    }

    updateTag(id, obj_new_info) {
        let tagIndex = this.data.tags.findIndex(tag => tag.id === id);

        if (tagIndex === -1) {
            throw new TagException("No existe esta etiqueta");
        }

        const tag = this.data.tags[tagIndex];
        const allowedKeys = Object.keys(tag).filter(key => key !== "id");
        const validKeys = Object.keys(obj_new_info).filter(key =>
            allowedKeys.includes(key) && obj_new_info[key] !== undefined
        );

        if (validKeys.length === 0) {
            throw new TagException("No hay nada que actualizar");
        }

        validKeys.forEach(key => {
            tag[key] = obj_new_info[key];
        });

        return true;
    }

    deleteTag(id) {
        const tagIndex = this.data.tags.findIndex(tag => tag.id === id);

        if (tagIndex === -1) {
            throw new TagException("El tag no existe");
        }

        const tasksUsingTag = [];
        if (this.data.tasks && this.data.tasks.length > 0) {
            this.data.tasks.forEach(task => {
                if (task.tags && task.tags.includes(id)) {
                    tasksUsingTag.push(`Tarea ID: ${task.taskID} - "${task.title}"`);
                }
            });
        }

        if (tasksUsingTag.length > 0) {
            throw new TagException(`No se puede eliminar el tag porque está asignado a las siguientes tareas:\n${tasksUsingTag.join('\n')}`);
        }

        this.data.tags = this.data.tags.filter(tag => tag.id !== id);
        return true;
    }
}