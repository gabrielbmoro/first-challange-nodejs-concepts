const UsersRepository = require("./../repository/UsersRepository");

class GetAllTodosUC {
  execute(request, response) {
    const { username } = request.headers;
    const todos = UsersRepository.getAllTodos(username);
    return response.json(todos);
  }
}

module.exports = new GetAllTodosUC();
