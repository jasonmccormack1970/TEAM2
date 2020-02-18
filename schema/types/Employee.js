const { GraphQLObjectType, GraphQLInt, GraphQLString } = require('graphql');

module.exports = new GraphQLObjectType({
    name: 'EmployeeType',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        role: { type: GraphQLString }, 
        status: { type: GraphQLInt },              
    }),
});
 