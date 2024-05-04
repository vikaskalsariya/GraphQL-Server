<h1>GraphQL CRUD Project</h1>

<p>This project is aimed at demonstrating basic CRUD operations using GraphQL. It consists of two main folders: client and server.</p>

<h2>Getting Started</h2>

<h4>1. Clone the Project<h4>
First, clone this repository to your local machine:

```sh
git clone https://github.com/vikaskalsariya/GraphQL-Server.git
```

<h4>2. Server Setup<h4>
Navigate to the server directory:

```sh
cd server
```

<h4>3. Install Dependencies<h4>
Install the necessary dependencies for the server:

```sh
npm install
```


<h4>4. Configuration</h4>
Make sure to set up the following environment variables:

- <b>DATABASE_URL</b>: URL for your database connection.
- <b>SECRET</b>: Secret key for JWT token generation.

<h4>5. Prisma Command</h4>
To update your database schema with Prisma, run the following command:

```sh 
npx prisma db push
```

<h4>6. Start the Server<h4>
Navigate to the server directory:

```sh
Start the server:
```


<b>If you want to access the GraphQL playground hosted at localhost:4000/graphql, you can do so through a web browser. Here's how:</b>

1. Open your preferred web browser.
2. In the address bar, type http://localhost:4000/graphql and press Enter.
3. The GraphQL playground interface should now be accessible in your browser, allowing you to interact with the GraphQL API provided by your server.

Once you're in the playground, you can input queries, mutations, and subscriptions to interact with your GraphQL server.