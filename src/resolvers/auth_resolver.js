const usersResolver = {
    Mutation: {
        signUpUser: async (_, { userInput }, { dataSources }) => {
            const authInput = {
                is_superuser: userInput.is_superuser || 0,
                username: userInput.username,
                password: userInput.password,
                firstname: userInput.firstname,
                lastname: userInput.lastname,
                address: userInput.address,
                phone: userInput.phone,
                email: userInput.email,
                cantlib: userInput.cantlib,
            }
            return await dataSources.authAPI.createUser(authInput);
        },
        updateUser: async (_, { userId, userInput }, { dataSources, userIdToken }) => {
            const modInput = {
                firstname: userInput.firstname,
                lastname: userInput.lastname,
                address: userInput.address,
                phone: userInput.phone,
                email: userInput.email,
                cantlib: userInput.cantlib,
            }
            if (userId == userIdToken)
                return await dataSources.authAPI.updateUser(userId, modInput);
            else
                return null
        },
        updateUserByAdmin: async (_, { userId, userInput }, { dataSources, userIdToken }) => {
            let Admin = await dataSources.authAPI.getUser(userIdToken)
            if (Admin.is_superuser == 1) {
                const modInput = {
                    firstname: userInput.firstname,
                    lastname: userInput.lastname,
                    address: userInput.address,
                    phone: userInput.phone,
                    email: userInput.email,
                    cantlib: userInput.cantlib,
                }
                return await dataSources.authAPI.updateUser(userId, modInput);
            }
            else
                return null
        },
        deleteUser: async (_, { userId }, { dataSources, userIdToken }) => {
            if (userId == userIdToken)
                return await dataSources.authAPI.deleteUser(userId);
            else
                return null
        },
        userDetailById: async (_, { userId }, { dataSources, userIdToken }) => {
            if (userId == userIdToken)
                return await dataSources.authAPI.getUser(userId)
            else
                return null
        },
        userDetailByIdAdmin: async (_, { userId }, { dataSources, userIdToken }) => {
            let Admin = await dataSources.authAPI.getUser(userIdToken)
            if (Admin.is_superuser == 1)
                return await dataSources.authAPI.getUser(userId)
            else
                return null
        },
        logIn: (_, { credentials }, { dataSources }) =>
            dataSources.authAPI.authRequest(credentials),
        refreshToken: (_, { refresh }, { dataSources }) =>
            dataSources.authAPI.refreshToken(refresh),
    }
};
module.exports = usersResolver;
