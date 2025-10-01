import express from "express";
import chalk from "chalk";
import fs from "fs";
import cors from "cors";
import ascii_cats from "ascii_cats"

const app = express();
const port = 3000;

app.use(cors({
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
}));

app.get("/users", (req, res) => {
    let auth = req.get("x-auth");
    if(auth){
        fs.readFile("users.json", "utf8", function(err, data) {
            if(error){
                console.log(err);
            }
            console.log(chalk.blue("Mostrando usuarios"));
            console.table(JSON.parse(data));
            res.send(data);
        });
    } else{
        console.log(chalk.red("No tienes autorización"));
        res.sendStatus(401);
    }
});

app.get("/", (req, res) => {
    console.log(chalk.blue("Entró a la raíz"));
    res.send("Raíz del sitio");
});

app.get("/home", (req, res) => {
    console.log(chalk.green("Entró a home"));
    res.send("Este es mi home ¿¡Qué haces aquí!?");
});

app.listen(port, () => {
    console.log("Server running on port: " + port);
})

function print_cat(req, res, next) {
    console.log(ascii_cats());
    next();
}

app.use(print_cat);

function logs(req){
    let metodo = req.Method();
    console.log(chalk.purple("Método") + chalk.green(metodo));
}

app.get("/users", (req, res) => {

})