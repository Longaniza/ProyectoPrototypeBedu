const { obtainOrderByStatement } = require('./helpers');
//Funcion que retorna una promesa. Esta sirve para hacer un select en base a campos seleccionados
function queryBySelectedFields(tableName, selectionFields = [], orderProp, cards = 12) {
    return new Promise(function (resolve, reject) {
        db.query(`SELECT ${obtainFieldsForSelect(selectionFields)} 
        FROM ${tableName} WHERE totalCards=${cards} ${obtainOrderByStatement(orderProp)} LIMIT 50;`, function (error, results, fields) {
            if (error) {
                reject(error);
            }
            else {
                resolve(results);
            }
        });
    });
}
//Funcion para obtener los campos para el select con ayuda de un arreglo. En caso de que se mande un arreglo
// vacio se seleccionan todos los campos de la entidad.
function obtainFieldsForSelect(fieldsObject) {
    const fields = Object.entries(fieldsObject).reduce((resultObject, [keys]) => {
        resultObject.push(keys);
        return resultObject;
    }, []);
    return fields.length ? fields.toString() : '*';
}

module.exports = {
    queryBySelectedFields
};