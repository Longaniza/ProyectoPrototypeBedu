const geoip = require('geoip-country');
const create = require('../helpers/create');
const { queryBySelectedFields } = require('../helpers/query');
//Controlador para crear puntaje. Resuelve una promesa y regresa una respuesta json con un status 
function createScore(req, res) {
    const { ipaddress } = req.headers;
    let countryCode;
    if (ipaddress === 'N/A' || !ipaddress) {
        countryCode = 'N/A';
    }
    else {
        const geo = geoip.lookup(ipaddress)?.country;
        countryCode = geo || 'N/A';
    }
    create(req.body, 'score', countryCode).then(results => {
        return res.status(201).json(results);
    }).catch(err => {
        res.status(400).json({
            Error: err.sqlMessage
        })
    });
}
//Controlador para obtener puntajes en base, se le puede pasar a traves de los parametros orden(segundos o cartas 
//volteadas) y que modo de juego es (12,24,48 cartas). Recibe una promesa y regresa una respuesta json con un status
function getScore(req, res) {
    const { order, cards } = req.query;
    queryBySelectedFields('score', [], order, cards)
        .then(results => {
            return res.status(200).json(results);
        }).catch(err => {
            res.status(400).json({
                Error: err.sqlMessage
            })
        });
}

module.exports = {
    createScore,
    getScore
}