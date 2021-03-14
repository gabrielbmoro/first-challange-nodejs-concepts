const UsersRepository = require("../repository/UsersRepository");
const { v4: uuidv4 } = require("uuid");

class CreateNewUserUC {
  async execute(request, response) {
    const { name, username } = request.body;

    const newUser = {
      id: uuidv4(),
      name: name,
      username: username,
      todos: [],
    };

    if (UsersRepository.isUserAlreadyExists(username)) {
      return response.status(400);
    }

    UsersRepository.add(newUser);

    return response.json(newUser).status(201);
  }
}

module.exports = new CreateNewUserUC();
