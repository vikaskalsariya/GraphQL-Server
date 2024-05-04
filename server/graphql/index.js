const {ApolloServer} = require('@apollo/server');
const {user} = require('./user')
async function createApolloGraphqlServer(){
    // cretae graphQL server 
    const gqlServer = new ApolloServer({
        typeDefs:`
            ${user.typedefs}
            type Query { 
                ${user.querys}
            }
            type Mutation {
                ${user.mutations}
            }
            `,
        resolvers: {
            Query: {
                ...user.resolvers.querys,
            },
            Mutation:{
                ...user.resolvers.mutations
            }
        },
    });

    // start graphQL server 
    await gqlServer.start();
    return gqlServer;
}

module.exports = createApolloGraphqlServer;