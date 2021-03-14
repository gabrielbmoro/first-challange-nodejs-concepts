const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// use cases
const createNewTodo = require("./usecases/CreateNewTodoUC").execute;
const checkExistsUserUC = require("./usecases/CheckExistsUserUC").execute;
const getAllTodos = require("./usecases/GetAllTodosUC").execute;
const createNewUser = require("./usecases/CreateNewUserUC").execute;
const updateTodo = require("./usecases/UpdateTodoUC").execute;
const markAsDone = require("./usecases/MarkAsDoneUC").execute;
const deleteTodo = require("./usecases/DeleteTodoUC").execute;

// routes
app.post("/users", createNewUser);

app.get("/todos", checkExistsUserUC, getAllTodos);

app.post("/todos", checkExistsUserUC, createNewTodo);

app.put("/todos/:id", checkExistsUserUC, updateTodo);

app.patch("/todos/:id/done", checkExistsUserUC, markAsDone);

app.delete("/todos/:id", checkExistsUserUC, deleteTodo);

module.exports = app;
