const UserService = require('../../services/user')

const querys = {
    getUserToken: async (_, payload) => {
        const token = await UserService.getUserToken(
            {
                email: payload.email,
                password: payload.password
            }
        )
        return token
    },
    getCurrantLoggedInUser: async (_,parameters,context) => {
        if(context && context.user)
        {
            const id = context.user.id 
            const user = UserService.getUserById(id)
            return user
        }
        throw new Error("Token is Require")
    }
}

const mutations = {
    createUser: async (_, payload) => {
        const res = await UserService.createUser(payload)
        return res.id
    }
}

exports.resolvers = { querys, mutations }