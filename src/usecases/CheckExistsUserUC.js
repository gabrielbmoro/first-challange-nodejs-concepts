const UsersRepository = require("../repository/UsersRepository");

class CheckExistsUserUC {
  execute(request, response, next) {
    const { username } = request.headers;
    const isUserAlreadyExists = UsersRepository.isUserAlreadyExists(username);
    if (!isUserAlreadyExists) {
      return response.status(404).json({ error: "The user doesn't exist" });
    }
    return next();
  }
}

module.exports = new CheckExistsUserUC();
