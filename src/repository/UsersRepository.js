class UsersRepository {
  _users = [];

  getTodo(username, todoId) {
    const user = this.getUser(username);
    return user.todos.filter((todo) => todo.id == todoId)[0];
  }

  getUser(username) {
    const user = this._users.find((user) => user.username === username);
    return user;
  }

  getAllTodos(username) {
    const user = this.getUser(username);
    return user.todos;
  }

  isUserAlreadyExists(username) {
    if (this.getUser(username)) {
      return true;
    } else {
      return false;
    }
  }

  add(user) {
    this._users.push(user);
  }

  markTodoAsDone(username, todoId) {
    const todo = this.getTodo(username, todoId);
    todo.done = true;
  }

  addNewTodo(username, newTodo) {
    const user = this.getUser(username);
    user.todos.push(newTodo);
  }

  updateTodo(username, todoId, title, deadline) {
    const todo = this.getTodo(username, todoId);

    todo.title = title;
    todo.deadline = deadline;
    return todo;
  }

  isTodoAlreadyExists(username, todoId) {
    const todo = this.getTodo(username, todoId);
    if (todo) {
      return true;
    } else {
      return false;
    }
  }

  delete(todoId, username) {
    const user = this.getUser(username);
    user.todos = user.todos.filter((todo) => todo.id != todoId);
  }
}

const usersRepository = new UsersRepository();

module.exports = usersRepository;
