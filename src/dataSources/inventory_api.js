const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');

class InventoryAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = serverConfig.inventory_api_url;
    }
    async createInventory(inventory) {
        inventory = new Object(JSON.parse(JSON.stringify(inventory)));
        return await this.post(`/book/`, inventory);
    }
    async getInventory(inventoryId) {
        return await this.get(`/book/${inventoryId}`);
    }
    async getInventories() {
        return await this.get(`/books/`);
    }
    async updateInventory(inventoryId,inventory ) {
        // inventory = new Object(JSON.parse(JSON.stringify(inventory)));
        return await this.put(`/book/update/${inventoryId}`,inventory);
    }
    async delInventory(inventoryId) {
        return await this.delete(`/book/delete/${inventoryId}`);
    }
}
module.exports = InventoryAPI;
  
