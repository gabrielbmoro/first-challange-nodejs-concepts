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

  getTodo(username, todoId) {
    const user = this.getUser(username);
    return user.todos.filter((todo) => todo.id == todoId)[0];
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
    return this._getUserIndex(username) != -1;
  }

  add(user) {
    this._users.push(user);
  }

  markTodoAsDone(username, todoId) {
    const todo = this.getTodo(username, todoId);
    todo.done = true;
  }

  addNewTodo(username, newTodo) {
    const userIndex = this._getUserIndex(username);
    this._users[userIndex].todos.push(newTodo);
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
    const userIndex = this._getUserIndex(username);
    this._users[userIndex].todos = this._users[userIndex].todos.filter(
      (todo) => todo.id != todoId
    );
  }
}

const usersRepository = new UsersRepository();

module.exports = usersRepository;
