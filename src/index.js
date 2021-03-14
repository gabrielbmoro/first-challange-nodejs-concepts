const express = require("express");
const cors = require("cors");

const { v4: uuidv4 } = require("uuid");

const app = express();

app.use(cors());
app.use(express.json());

const users = [];

function checksExistsUserAccount(request, response, next) {
  const userName = request.header("username");
  const usersWithTheSameUserName = users.filter((user) => {
    return user.userName == userName;
  });

  const userNotExists = usersWithTheSameUserName.length == 0;

  if (userNotExists) {
    next(Error("User does not exist!"));
  }

  next();
}

app.post("/users", (request, response) => {
  const { name, username } = request.body;

  const newUser = {
    id: uuidv4(),
    name: name,
    userName: username,
    todos: [],
  };

  users.push(newUser);

  response.json(newUser);
});

app.get("/todos", checksExistsUserAccount, (request, response) => {
  const userName = request.header("username");

  const user = users.filter((user) => {
    return user.userName == userName;
  })[0];

  response.json(user.todos);
});

app.post("/todos", checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

app.put("/todos/:id", checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

app.patch("/todos/:id/done", checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

app.delete("/todos/:id", checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

module.exports = app;
