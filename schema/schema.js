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


const CompanyType = new GraphQLObjectType({
    name: "Company",
    fields: {
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
    }
});

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: { // what properties of this User object has ?
        id: { type: GraphQLString }, // provide type
        firstName: { type: GraphQLString },
        age: { type: GraphQLInt },
        company: { // user doesn't have company, it has companyId, we will populate company. Resolve is required
            type: CompanyType, // use CompanyType above
            resolve(parentValue, args) {
                // console.log(parentValue, args)
                // parentValue is the user that we fetched
                return axios.get(`http://localhost:3000/companies/${parentValue.companyId}`)
                    .then(res => res.data)
            }
        }
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
                return axios.get(`http://localhost:3000/users/${args.id}`)
                    .then(res => res.data)
                    .then(data => data)
            }
        },
        company: {
            type: CompanyType,
            args: { id: { type: GraphQLString } },
            resolve(parentValue, args) {
                return axios.get(`http://localhost:3000/companies/${args.id}`)
                    .then(res => res.data)
                    .then(data => data)
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
})
