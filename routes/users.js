var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController');
/* GET users listing. */

router.post('/', usersController.create);

router.get('/:name?', usersController.list );

router.get('/:id', usersController.index);

router.put('/:id', usersController.update);

router.delete('/:id', usersController.destroy);

module.exports = router;
