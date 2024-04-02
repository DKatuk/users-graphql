const graphql = require('graphql');
const _ = require('lodash'); // for static list of users
const axios = require('axios');

const {
    GraphQLObjectType,
    //field types
    GraphQLString,
    GraphQLInt,
    //schema
    GraphQLSchema
} = graphql;

// const users = [
//     {id: '23', firstName: "Dilara", age: 27},
//     { id: '24', firstName: "John", age: 19 }
// ]

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: { // what properties of this User object has ?
        id: { type: GraphQLString }, // provide type
        firstName: { type: GraphQLString },
        age: { type: GraphQLInt }
    }
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: { // if querying user
            type: UserType, // direct to userType we created above (return userType)
            args: { id: { type: GraphQLString } }, // how to query
            resolve(parentValue, args) { // go into db, find actual data for given id (args)
                // resolving data
                // return _.find(users, {id: args.id}) //sync
                // return users in db.json file

                return axios.get(`http://localhost:3000/user/${args.id}`)
                .then(res => res.data)
                .then(data => data)
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
})
