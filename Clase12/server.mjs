import express from "express";
import chalk from "chalk";
import fs from "fs";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    console.log(chalk.blue("Entró a la raíz"));
    res.send("Raíz del sitio");
});

app.get("/home", (req, res) => {
    console.log(chalk.green("Entró a home"));
    res.send("Este es mi home ¿¡Qué haces aquí!?");
});

app.get("/users", (req, res) => {
    console.log(chalk.yellow("Consultando usuarios"));
    fs.readFile('./users.json', 'utf8', (err, jsonString) => {
        if (err) {
            console.error("Error al leer users.json:", err);
            return;
        }
        try {
            const data = JSON.parse(jsonString);
            console.log(chalk.green("Usuarios encontrados:"));
            console.table(data);
        } catch (parseErr) {
            console.error("Error al parsear el archivo:", parseErr);
        }
    });
    res.send("Todo esta en consola");
});


app.listen(port, () => {
    console.log("Server running on port: " + port);
})