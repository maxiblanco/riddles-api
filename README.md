# riddles-api

A REST api that returns riddles along with their answers.

## How to use the api

### Get all riddles

> GET http://localhost:3000/riddles

### Get a single riddle

> GET http://localhost:3000/riddles/:id

### Post a single riddle

> POST http://localhost:3000/riddles

Example of how to post a riddle.

```json
{
  "name": "The Riddle of the Sphinx",
  "riddle": "What goes on four feet in the morning, two feet at noon, and three feet in the evening?",
  "answer": "Man"
}
```

### Delete a single riddle

> DELETE http://localhost:3000/riddles/:id

### Update a single riddle

PATCH http://localhost:3000/riddles/:id

```
{
  "answer": "Human"
}
```

# TODO

- [x] Working riddle-api
- [x] Create github repository and README.me.
- [x] Define json data structure.

> {
> \_id: string,
> name: string,
> riddle: string,
> answer: string
> }

- [x] Define libraries and install dependencies.
- [ ] Gather a minimun of 10 riddles to return.
- [x] Build basic CRUD functionality.
- [ ] Define further steps for Express.
- [ ] Secure the api
- [ ] Build tests
