const UsersRepository = require("../repository/UsersRepository");

class UpdateTodoUC {
  async execute(request, response) {
    const username = request.header("username");
    const { title, deadline } = request.body;
    const todoId = request.params.id;

    const updatedTodo = UsersRepository.updateTodo(
      username,
      todoId,
      title,
      deadline
    );

    response.json(updatedTodo)
  }
}

module.exports = new UpdateTodoUC();
