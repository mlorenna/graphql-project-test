// import graphqlTools from 'graphql-tools'
// const { makeExecutableSchema } = graphqlTools
// import { types } from "./types/index.js";
// import { resolvers } from "./resolvers/index.js";
// import { Query } from "./queries/index.js";
// import { Mutation } from "./mutations/index.js";

// const SchemaDefinition = `
//     type Schema {
//         query: Query
//         mutation: Mutation
//     }
// `;

// export default makeExecutableSchema({
//   typeDefs: [SchemaDefinition, Query, Mutation, types],
//   resolvers
// });
const graphql = require("graphql");
const { GraphQLSchema } = graphql;

// const postType = require("../../middlewares/graphQL/resolvers");
// const posts = require("../../../constants/posts");

const postType = require("../../middlewares/graphQL/types/PostsType.schema");

// const queryType = new GraphQLObjectType({
//   name: "Query",
//   fields: {
//     post: {
//       type: postType,
//       args: {
//         id: { type: GraphQLInt }
//       },
//       resolve: (source, { id }) => {
//         return posts[id];
//       }
//     },
//     posts: {
//       type: new GraphQLList(postType),
//       resolve: () => {
//         return posts;
//       }
//     }
//   }
// });

const schema = new GraphQLSchema({
  query: postType
});

module.exports = schema;
