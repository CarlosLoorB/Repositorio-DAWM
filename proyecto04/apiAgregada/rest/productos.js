var express = require('express');
var router = express.Router();

const { Sequelize, Op } = require('sequelize');
const Customers = require('../models').customers;
const Employees = require('../models').employees;
const Offices = require('../models').offices;

router.post('/calcularPrecio/json', function (req, res, next) {

    let infoArreglo = req.body;
    let total = 0;

    infoArreglo.forEach(elems => {
        let price = elems[0]
        let qty = elems[1]
        let suma = price * qty
        total += suma;
    })

    res.json(total);
});

module.exports = router;