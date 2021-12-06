const loanResolver = {
    Query: {
        loansDetailById: (_, { userId }, { dataSources }) => {
            return dataSources.loansAPI.getLoan(userId)
        },
        loansDetail: (_,__, { dataSources }) =>
            dataSources.loansAPI.getLoans(),
    },
    Mutation: {
        newLoan: (_, { loanInput }, { dataSources, userIdToken }) => {
            const loanInput2 = {
                idUser: loanInput.idUser,
                idBook: loanInput.idBook,
                dateStart: loanInput.dateStart,
                dateFinish: loanInput.dateFinish,
            }
            return dataSources.loansAPI.createLoan(loanInput2);
        },

    }
};
module.exports = loanResolver;

