const express = require("express");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

//conexión con la base de datos
const {connection} = require("../database/config.db");

const getStations = (request, response) => {
    const id = request.params.name;
    connection.query(`SELECT s.name, sc.distance, p.product, p.value
                        FROM stations s
                        INNER JOIN stations_competitors sc on s.cre_id = sc.cre_id
                        INNER JOIN prices p on s.cre_id = p.cre_id
                        WHERE s.cre_id=${id}
                        GROUP BY s.name, sc.distance, p.product, p.value;`,
    (error, results) => {
        if(error)
            throw error;
        response.status(200).json(results);
    });
};

app.route("/stations/:id").get(getStations);

module.exports = app;