const UsersRepository = require("../repository/UsersRepository");

class UpdateTodoUC {
  execute(request, response) {
    const username = request.header("username");
    const todoId = request.params.id;

    if (!UsersRepository.isTodoAlreadyExists(username, todoId)) {
      return response.status(404).json({ error: "Todo doesn't exist" });
    }

    const { title, deadline } = request.body;
    const updatedTodo = UsersRepository.updateTodo(
      username,
      todoId,
      title,
      deadline
    );

    response.json(updatedTodo);
  }
}

module.exports = new UpdateTodoUC();
