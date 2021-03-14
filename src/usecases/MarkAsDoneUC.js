const UsersRepository = require("../repository/UsersRepository");

class MarkAsDoneUC {
  execute(request, response) {
    const todoId = request.params.id;

    const username = request.header("username");
    
    if (!UsersRepository.isTodoAlreadyExists(username, todoId)) {
      return response.status(404).json({ error: "Todo doesn't exist" });
    }

    UsersRepository.markTodoAsDone(username, todoId);

    const todo = UsersRepository.getTodo(username, todoId);

    return response.json(todo);
  }
}

module.exports = new MarkAsDoneUC();
