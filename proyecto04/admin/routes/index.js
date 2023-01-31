var express = require('express');
const axios = require('axios')
var router = express.Router();

const multer = require('multer')
const FormData = require('form-data');
const { Router } = require('express');
const upload = multer()


/* GET home page. */
router.get('/', async function (req, res, next) {

  const URL = 'http://localhost:4444/rest/productos/findAllCustomers/json'
  const config = {
    proxy: {
      host: 'localhost',
      port: 4444
    }
  }
  const response = await axios.get(URL, config)

  res.render('index', { title: 'Clientes', clientes: response.data });
});

/* Get de Ordenes*/
router.get('/ordenes/:id', async function (req, res, next) {

  let id = req.params.id

  const URL = 'https://nodb-proyecto-default-rtdb.firebaseio.com/ordenes.json?orderBy=%22customerNumber%22&equalTo=' + id

  const response = await axios.get(URL);

  let respuesta = Object.values(response.data);
  let shippedElem = [];
  let infoPrecios = [];
  respuesta.forEach(elems => {
    if (elems.status == "Shipped") {
      shippedElem.push(elems)
      let info = [];
      info.push(elems.priceEach);
      info.push(elems.quantityOrdered);
      infoPrecios.push(info);
    }
  });

  const URL2 = 'http://localhost:4445/rest/productos/calcularPrecio/json'

  const response2 = await axios.post(URL2, infoPrecios);

  res.render('order', { title: 'Ordenes', Ordenes: shippedElem , Precio: response2.data });
})

router.get('/productos/:id', async function (req, res, next) {

  let id = req.params.id

  const URL = 'https://nodb-proyecto-default-rtdb.firebaseio.com/ordenes.json?orderBy=%22customerNumber%22&equalTo=' + id

  const response = await axios.get(URL);
  let respuesta = Object.values(response.data);
  let productos = []
  respuesta.forEach(elems => {
    if (!productos.includes(elems.productName)) {
      productos.push(elems.productName);
    }
  });

  res.render('product', { title: 'Productos', Products: productos });
})

router.get('/regresar', async function (req, res, next) {
  res.redirect('/')
})

module.exports = router;
