// graphql/schema.js
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
} = require("graphql");
const { users } = require("../data");

// User 类型
const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    id: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
  },
});

// Root 查询类型
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    users: {
      type: new GraphQLList(UserType),
      resolve() {
        return users;
      },
    },
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },
      resolve(_, args) {
        return users.find((u) => u.id === args.id);
      },
    },
  },
});

module.exports = new GraphQLSchema({ query: RootQuery });
