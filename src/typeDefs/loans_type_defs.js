const { gql } = require('apollo-server');
const loanTypeDefs = gql`
    
    input LoanInput {
        idUser: String!
        idBook: String!
        dateStart: String!
        dateFinish: String!
    }
    type LoanDetail {
        id: String!
        idUser: String!
        idBook: String!
        dateStart: String!
        dateFinish: String!
    }
    extend type Query {
        loansDetailById(userId: String!): [LoanDetail]!
        loansDetail:[LoanDetail]!
    }  
    extend type Mutation {
        newLoan(loanInput: LoanInput!): LoanDetail!
    }
    `;
    module.exports = loanTypeDefs;

