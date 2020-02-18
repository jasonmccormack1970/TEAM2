const { GraphQLObjectType, GraphQLInt, GraphQLString } = require('graphql');

module.exports = new GraphQLObjectType({
    name: 'ActionType',
    fields: () => ({
        id: { type: GraphQLString },
        action: { type: GraphQLString },
        description: { type: GraphQLString },
    }),
});
