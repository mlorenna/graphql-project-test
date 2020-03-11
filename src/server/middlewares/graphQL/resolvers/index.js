// const providers = {
//     users: []
//   };
//   let id = 0;
// export const resolvers = {
//     user({ id }) {
//       return providers.users.find(item => item.id === Number(id));
//     },
//     users() {
//       return providers.users;
//     },
//     createUser({ name, repo, age }) {
//       const user = {
//         id: id++,
//         name,
//         repo,
//         age
//       };

//       providers.users.push(user);

//       return user;
//     }
//   };

const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList } = graphql;

const authors = require("../../../../constants/authors");

const pendingsType = new GraphQLObjectType({
  name: "Pendings",
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString }
  }
});

const pendingDownloadType = new GraphQLObjectType({
  name: "PendingDownload",
  fields: {
    client: {
      type: GraphQLString
    },
    clientId: {
      type: GraphQLInt
    },
    pendings: {
      type: new GraphQLList(pendingsType)
    }
  }
});

const insertionType = new GraphQLObjectType({
  name: "Insertion",
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    hired: { type: GraphQLInt },
    identify: { type: GraphQLInt },
    excess: { type: GraphQLInt },
    notIdentify: { type: GraphQLInt },
    waiting: { type: GraphQLInt }
  }
});

const insertionsType = new GraphQLObjectType({
  name: "Insertions",
  fields: {
    client: {
      type: GraphQLString
    },
    clientId: {
      type: GraphQLInt
    },
    insertions: {
      type: new GraphQLList(insertionType)
    }
  }
});

const authorType = new GraphQLObjectType({
  name: "Author",
  fields: {
    name: {
      type: GraphQLString
    },
    age: {
      type: GraphQLInt
    }
  }
});

const postType = new GraphQLObjectType({
  name: "Post",
  fields: {
    title: {
      type: GraphQLString
    },
    description: {
      type: GraphQLString
    },
    author: {
      type: authorType,
      resolve: (source, params) => {
        return authors[source.author];
      }
    }
  }
});

module.exports.postType = postType;
module.exports.insertionsType = insertionsType;
module.exports.pendingDownloadType = pendingDownloadType;
