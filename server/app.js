const express = require('express');
require('dotenv').config();
const { expressMiddleware } = require('@apollo/server/express4');
const server = require('./graphql/index');
const client = require('./lib/db');
const UserService = require('./services/user');

const mainServer = async () => {
  const app = express();
  const PORT = process.env.PORT || 3000;
  app.use(express.json());


  const gqlServer = await server();
  app.use('/graphql', expressMiddleware(gqlServer, {
    context: async ({req}) => {
      const token = req.headers['token'];
      try{
        const user = await UserService.decodeToken(token)
        return {user}
      }catch(err)
      {
        return {}
      }
    }
  }));

  app.get('/', (req, res) => {
    res.send('Hello World');
  });

  app.listen(PORT, () => {
    console.log(`Example app listening on port http://localhost:${PORT}`);
  });
}

mainServer();