const UsersRepository = require("./../repository/UsersRepository");

class GetAllTodosUC {
  async execute(request, response) {
    const username = request.header("username");
    const todos = UsersRepository.getAllTodos(username);
    return response.json(todos);
  }
}


module.exports = new GetAllTodosUC();
