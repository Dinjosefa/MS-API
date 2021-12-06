const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');

class LoansAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = serverConfig.loans_api_url;
    }
    async createLoan(loan) {
        loan = new Object(JSON.parse(JSON.stringify(loan)));
        return await this.post(`/loan/`, loan);
    }
    async getLoan(userId) {
        return await this.get(`/loans/${userId}`);
    }
    async getLoans() {
        return await this.get(`/loans`); 
    }
}
module.exports = LoansAPI;
  