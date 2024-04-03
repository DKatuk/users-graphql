# USER GRAPHQL PROJECT

This project created to practice express & graphQL.

GraphiQL is an in-browser tool for writing, validating, and
testing GraphQL queries.

1. Run in your terminal start express server

```bash
npm run dev
```

2. Visit localhost:4000

3. Run in your terminal to start json server

```bash
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

```
query {
  apple: company(id: "1"){
    name
    users {
      id
      firstName
    }
  }
  google: company(id: "2"){
    name
    users {
      id
      firstName
    }
  }
}
```

```
query {
  apple: company(id: "1"){
   ...companyDetails
    users {
      id
      firstName
    }
  }
  google: company(id: "2"){
    ...companyDetails
    users {
      id
      firstName
    }
  }
}

fragment companyDetails on Company {
  id
  name
  description
}
```
## MUTATIONS
```
mutation {
  addUser(firstName: "Dilara", age: 27, companyId: "2"){
    id
    firstName
    age
  }
}
```
```
mutation {
  deleteUser(id: "uJCx2CR"){
    id
  }
}

```

```
mutation {
  editUser(id: "41", firstName: "Sarah"){
    id
    firstName
    age
    company {
      id
    }
  }
}
```
