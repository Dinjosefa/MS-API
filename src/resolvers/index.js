const loansResolver = require('./loans_resolver');
const inventoryResolver = require('./inventory_resolver');
const authResolver = require('./auth_resolver');

const lodash = require('lodash');

const resolvers = lodash.merge(loansResolver, inventoryResolver, authResolver);

module.exports = resolvers;  
