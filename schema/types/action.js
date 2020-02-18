const { GraphQLObjectType, GraphQLID, GraphQLInt, GraphQLString } = require('graphql');

//const pgdb = require('../../database/pgdb');

module.exports = new GraphQLObjectType({
    name: 'ActionType',
    fields: {
        id: { type: GraphQLID },
        actionname: { type: GraphQLString },
        description: { type: GraphQLString },
        apikey: { type: GraphQLString },
        createdAt: { type: GraphQLString },
    },
});
