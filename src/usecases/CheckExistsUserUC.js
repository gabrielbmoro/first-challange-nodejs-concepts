const UsersRepository = require("../repository/UsersRepository");

class CheckExistsUserUC {
  execute(request, response, next) {
    const username = request.header("username");
    const isUserAlreadyExists = UsersRepository.isUserAlreadyExists(username);
    if (!isUserAlreadyExists) {
      return response.status(404);
    }
    return next();
  }
}

module.exports = new CheckExistsUserUC();
