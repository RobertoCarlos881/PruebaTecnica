const dotenv = require("dotenv");
const mysql = require('mysql2');

dotenv.config();
let connection;

try {
    connection = mysql.createConnection({
        host: "precios-1.c0f6dm2ucnlg.us-east-2.rds.amazonaws.com",
        user: "candidatoPrueba",
        password: "gaspre21.M",
        database: "prueba"
    });
} catch (error) {
    console.log("Error al conectar con la base de datos");
}

module.exports = {connection};