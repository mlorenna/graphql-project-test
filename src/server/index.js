var express = require("express");
var expressJWT = require("express-jwt");
const bodyParser = require("body-parser");
var graphqlHTTP = require("express-graphql");
// var { buildSchema } = require("graphql");
const schema = require("./middlewares/graphQL/schema");

const dotenv = require("dotenv");
dotenv.config();

// // Construct a schema, using GraphQL schema language
// var schema = buildSchema(`
//   type User {
//     id: ID
//     name: String
//     repo: String
//     age: Int
//   }
//   type Query {
//     user(id: ID!): User
//     users: [User]
//     hello: String
//   }
//   type Mutation {
//     createUser(name: String!, repo: String!, age: Int!): User
//   }
// `);
// const providers = {
//   users: []
// };
// let id = 0;
// //The root provides a resolver function for each API endpoint
// var resolvers = {
//   hello: () => {
//     return 'Hello world!';
//   },
//   user({ id }) {
//     return providers.users.find(item => item.id === Number(id));
//   },
//   users() {
//     return providers.users;
//   },
//   createUser({ name, repo, age }) {
//     const user = {
//       id: id++,
//       name,
//       repo,
//       age
//     };

//     providers.users.push(user);

//     return user;
//   }
// };

var app = express();
// bodyparser
// app.use(bodyParser.json());

// authentication middleware
const authMiddleware = expressJWT({
  secret: "somesuperdupersecret"
});

// app.use(authMiddleware);

app.use(
  "/graphql",
  graphqlHTTP(req => ({
    schema,
    graphiql: process.env.NODE_ENV === "development"? true : false
    // context: {
    //   user: req.user,
    //   test: "Example Context value"
    // }
  }))
);
app.listen(process.env.PORT);
console.log(
  "-----------------------------------------------------------------"
);
console.log(
  "- Running a GraphQL API server at http://localhost:4000/graphql -"
);
console.log(
  "-----------------------------------------------------------------"
);
