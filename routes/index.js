const router = require('express').Router();
//Se reciben todas las rutas en una general
router.use('/scores', require('./scores'));

module.exports = router;