const express = require("express");
const routerMobil = express.Router()
const controllerMobil = require('../controllers/mobil')

routerMobil.route('/mobil')
    .get(controllerMobil.getMobil)
    .post(controllerMobil.insert)

routerMobil.route('/mobil/:id')
    .put(controllerMobil.update)
    .delete(controllerMobil.delete)
    .get(controllerMobil.getMobilById)
routerMobil.route('/mobil/spek_mobil/:id')
    .get(controllerMobil.getSpek_mobilById)
module.exports = routerMobil