import express from "express";
import chalk from "chalk";

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

    res.send("Todo esta en consola");
});

app.listen(port, () => {
    console.log("Server running on port: " + port);
})