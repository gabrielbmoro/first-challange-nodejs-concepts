class UsersRepository {
  _users = [];

  _getUserIndex(username) {
    const amountOfUsers = this._users.length;
    let i = 0;
    while (i < amountOfUsers) {
      if (this._users[i].username == username) {
        return i;
      }
      i++;
    }
    return -1;
  }

  _getTodoIndex(user, todoId) {
    const amountOfTodos = user.todos.length;
    let i = 0;
    while (i < amountOfTodos) {
      if (user.todos[i].id == todoId) {
        return i;
      }
      i++;
    }
    return -1;
  }

  getTodo(username, todoId) {
    const user = this.getUser(username);
    return user.todos.filter((todo) => todo.id == todoId)[0]
  }

  getUser(username) {
    const userIndex = this._getUserIndex(username);
    return this._users[userIndex];
  }

  getAllTodos(username) {
    const user = this.getUser(username);
    return user.todos;
  }

  isUserAlreadyExists(username) {
    return this._getUserIndex(username) != -1
  }

  add(user) {
    this._users.push(user);
  }

  markTodoAsDone(username, todoId) {
    const userIndex = this._getUserIndex(username);
    const user = this._users[userIndex];
    const todoIndex = this._getTodoIndex(user, todoId);
    this._users[userIndex].todos[todoIndex].done = true;
  }

  addNewTodo(username, newTodo) {
    const userIndex = this._getUserIndex(username);
    this._users[userIndex].todos.push(newTodo);
  }

  updateTodo(username, todoId, title, deadline) {
    const userIndex = this._getUserIndex(username);

    const user = this._users[userIndex];
    const todoIndex = this._getTodoIndex(user, todoId);

    this._users[userIndex].todos[todoIndex].title = title;
    this._users[userIndex].todos[todoIndex].deadline = deadline;
    return this._users[userIndex].todos[todoIndex];
  }

  isTodoAlreadyExists(username, todoId) {
    const userIndex = this._getUserIndex(username);
    const todoIndex = this._getTodoIndex(this._users[userIndex], todoId);
    return this._users[userIndex].todos[todoIndex];
  }

  delete(todoId, username) {
    const userIndex = this._getUserIndex(username);
    this._users[userIndex].todos = this._users[userIndex].todos.filter(
      (todo) => todo.id != todoId
    );
  }
}

const usersRepository = new UsersRepository();

module.exports = usersRepository;
