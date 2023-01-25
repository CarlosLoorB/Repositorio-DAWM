var express = require('express');
var router = express.Router();

const { Sequelize, Op } = require('sequelize');
const customers = require('../models').customers;

router.get('/findAll/json', function (req, res, next) {


    customers.findAll({
    })
        .then(customers => {
            res.json(customers);
        })
        .catch(error => res.status(400).send(error))

});

module.exports = router;