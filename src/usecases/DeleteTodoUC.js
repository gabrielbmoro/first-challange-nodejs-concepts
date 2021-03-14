const UsersRepository = require("../repository/UsersRepository");

class DeleteTodoUC {
  async execute(request, response) {
    const todoId = request.params.id;
    const username = request.header("username");

    UsersRepository.delete(todoId, username);

    return response.json(UsersRepository.getAllTodos(username));
  }
}

module.exports = new DeleteTodoUC();
