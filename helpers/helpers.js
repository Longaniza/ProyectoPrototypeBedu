//Funcion para obtener campos y valores para un query cualquiera
function obtainFieldsAndValues(body) {
    const fieldsAndValues = Object.entries(body).reduce((resultObject, valuePair) => {
        resultObject['fields'].push(valuePair[0]);
        (typeof valuePair[1] === 'number') ? resultObject['values'].push(valuePair[1]) : resultObject['values'].push(`'${valuePair[1]}'`);
        return resultObject;
    }, {
        fields: [],
        values: []
    });
    return {
        fields: fieldsAndValues.fields.toString(),
        values: fieldsAndValues.values.toString()
    }
}
//Funcion que regresa la parte del order by a un query en base a una propiedad de orden
//en caso de no mandar una propiedad, simplemente este segmento no es agrega al query
const obtainOrderByStatement = orderProp => orderProp ? `ORDER BY ${orderProp}` : '';

module.exports = {
    obtainFieldsAndValues,
    obtainOrderByStatement
};