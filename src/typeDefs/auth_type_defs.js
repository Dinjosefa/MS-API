const { gql } = require('apollo-server');
const authTypeDefs = gql`
    type Tokens {
        refresh: String!
        access: String!
    }
    type Access {
        access: String!
    }
    input CredentialsInput {
        username: String!
        password: String!
    }
    input SignUpInput {
        username: String!
        password: String!
        firstname: String!
        lastname: String!
        address: String!
        phone: String! 
        email: String!
        cantlib: Int!
    }
    input UpdateInput {
        firstname: String!
        lastname: String!
        address: String!
        phone: String! 
        email: String!
        cantlib: Int!
    }
    
    type UserDetail {
        id: Int!
        username: String!
        firstname: String!
        lastname: String!
        address: String!
        phone: String! 
        email: String!
        cantlib: Int!
    }
    type Message {
        message: String!
    }
    type Mutation {
        signUpUser(userInput: SignUpInput): Tokens!
        updateUser(userId: Int!, userInput: UpdateInput): UserDetail!
        deleteUser(userId: Int!): Message!
        logIn(credentials: CredentialsInput!): Tokens!
        refreshToken(refresh: String!): Access!
    }
    type Query {
        userDetailById(userId: Int!): UserDetail!
    }
    `;
    module.exports = authTypeDefs;
