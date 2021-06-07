const { obtainFieldsAndValues } = require('./helpers');
//Funcion que retorna una promesa. Esta recibe un body y un nombre de tabla e intenta
//agreagr un registro a una tabla cualquiera
function create(body, tableName) {
    const { fields, values } = obtainFieldsAndValues(body);
    return new Promise(function (resolve, reject) {
        db.query(`INSERT INTO ${tableName} (${fields}) VALUES (${values});`, function (error, results) {
            // error will be an Error if one occurred during the query
            // results will contain the results of the query
            // fields will contain information about the returned results fields (if any)
            if (error) {
                reject(error);
            }
            else {
                resolve(results);
            }
        });
    })
}
module.exports = create;