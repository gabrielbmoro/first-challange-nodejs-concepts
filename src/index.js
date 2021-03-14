const express = require("express");
const cors = require("cors");

const { v4: uuidv4 } = require("uuid");

const app = express();

app.use(cors());
app.use(express.json());

const users = [];

function getUserFromHeader(request) {
  const userName = request.header("username");
  return users.filter((user) => {
    return user.userName == userName;
  })[0];
}

function checksExistsUserAccount(request, response, next) {
  const user = getUserFromHeader(request);
  if (!user) {
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
  const user = getUserFromHeader(request);
  response.json(user.todos);
});

app.post("/todos", checksExistsUserAccount, (request, response) => {
  const { title, deadline } = request.body;
  const user = getUserFromHeader(request);

  const newTodo = {
    id: uuidv4(),
    title: title,
    deadline: deadline,
    done: false,
    created_at: Date.now(),
  };
  user.todos.push(newTodo);

  response.json(newTodo);
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
