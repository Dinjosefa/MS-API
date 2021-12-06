 //Se llama al typedef (esquema) de cada submodulo
const loansTypeDefs = require('./loans_type_defs');
const inventoryTypeDefs = require('./inventory_type_defs');
const authTypeDefs = require('./auth_type_defs');

//Se unen
const schemasArrays = [authTypeDefs, loansTypeDefs, inventoryTypeDefs];

//Se exportan
module.exports = schemasArrays; 
