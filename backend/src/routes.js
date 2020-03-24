const express = require("express");
const routes = express.Router();

const ongs = require("./controllers/ongscontrollers")
const insidents = require("./controllers/InsidentsControllers")
const profile = require("./controllers/ProfileController")
const SesionController = require("./controllers/SessionController")


routes.post('/ongs' , ongs.create)
routes.get("/" , ongs.index)

routes.post("/incidents" , insidents.store);
routes.get("/incidents" , insidents.index)
routes.delete("/incidents/:id" , insidents.delete)

routes.get("/profile" , profile.index);

routes.post("/sessions",  SesionController.login)

module.exports = routes;