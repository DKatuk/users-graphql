# USER GRAPHQL PROJECT

This project created to practice express & graphQL.  


GraphiQL is an in-browser tool for writing, validating, and
testing GraphQL queries.


1. Run in your terminal
``` bash
node server.js
```
2. Visit localhost:4000
3. query in GraphiQL

```
query {
  user(id: "23"){
    id,
    firstName,
    age
  }
}
```