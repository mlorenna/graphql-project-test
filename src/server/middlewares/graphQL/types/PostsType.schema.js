const graphql = require("graphql");
const { GraphQLObjectType, GraphQLList, GraphQLInt } = graphql;

const resolvers = require("../../../middlewares/graphQL/resolvers");
const postType = resolvers.postType;
const insertionsType = resolvers.insertionsType;
const pendingsType = resolvers.pendingDownloadType;

const posts = require("../../../../constants/posts");
const insertions = require("../../../../constants/inserções");
const pendings = require("../../../../constants/pendingDownloads");

const queryType = new GraphQLObjectType({
  name: "Query",
  fields: {
    pendings: {
      type: new GraphQLList(pendingsType),
      resolve: () => {
        return pendings;
      }
    },
    insertions: {
      type: new GraphQLList(insertionsType),
      resolve: () => {
        return insertions;
      }
    },
    post: {
      type: postType,
      args: {
        id: { type: GraphQLInt }
      },
      resolve: (source, { id }) => {
        return posts[id];
      }
    },
    posts: {
      type: new GraphQLList(postType),
      resolve: () => {
        return posts;
      }
    }
  }
});

module.exports = queryType;
