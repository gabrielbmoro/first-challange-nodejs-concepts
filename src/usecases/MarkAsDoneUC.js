const UsersRepository = require("../repository/UsersRepository");

class MarkAsDoneUC {
  async execute(request, response) {
    const todoId = request.params.id;

    const username = request.header("username");
    
    UsersRepository.markTodoAsDone(username, todoId);

    return response.json(UsersRepository.getAllTodos(username));
  }
}

module.exports = new MarkAsDoneUC();
