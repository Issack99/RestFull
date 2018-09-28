var express = require('express');
var router = express.Router();
const resultsController = require('../controllers/resultsControllers');

router.get('/:n1/:n2', resultsController.plus);

router.post('/', resultsController.multiply);

router.put('/', resultsController.divide);

router.delete('/:n1/:n2', resultsController.minus);

module.exports = router;
