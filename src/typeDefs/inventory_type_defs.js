const { gql } = require('apollo-server');
const inventoryTypeDefs = gql`
    
    input InventoryInput {
        title: String!
        author: String!
        year: Int!
        category: String!
        editorial: String! 
        status: Int!
        isbn: String!
        poster: String!
        resume: String!
    }

    input InventoryUpdateInput {
        title: String
        author: String
        year: Int
        category: String
        editorial: String 
        status: Int
        isbn: String
        poster: String
        resume: String
    }
         
    type InventoryDetail {
        id: String!
        title: String!
        author: String!
        year: Int!
        category: String!
        editorial: String! 
        status: Int!
        isbn: String!
        poster: String!
        resume: String!
    }
    type Message {
        message: String!
    }
    extend type Mutation {
        newInventory(inventoryInput: InventoryInput!): InventoryDetail!
        updateInventory(inventoryId: String!, inventoryUpdateInput: InventoryUpdateInput): InventoryDetail!
        delInventory(inventoryId: String!): String!
    }
    type Query {
        inventoryDetailById(inventoryId: String!): InventoryDetail!
        inventoriesDetail: [InventoryDetail]!
    }
    `;
    module.exports = inventoryTypeDefs;
 
