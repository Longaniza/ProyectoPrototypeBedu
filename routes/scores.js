const router = require('express').Router();
const {
    createScore,
    getScore
} = require('../controllers/scores')
//Peticion post que crea un puntaje
router.post('/', createScore);
//Peticion que regresa puntajes en base a ciertos filtros que se obtienen por medio de los controladores
router.get('/', getScore);

module.exports = router;