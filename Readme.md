# USER GRAPHQL PROJECT

This project created to practice express & graphQL.  


GraphiQL is an in-browser tool for writing, validating, and
testing GraphQL queries.


1. Run in your terminal start express server
``` bash
npm run dev
```
2. Visit localhost:4000

3. Run in your terminal to start json server
``` bash
npm run json:server
```

4. query examples in GraphiQL

```
query {
  user(id: "23"){
    id,
    firstName,
    age
  }
}
```

```
query {
  user(id: "23"){
    id,
    firstName,
    age,
    company {
      name
    }
  }
}

```

Bidirectional relation
```
query {
  user(id: "23"){
    id,
    firstName,
    age,
    company {
      name
    }
  },
  company(id: "1"){
    name
    users {
      id
      firstName
    }
  }
}

```