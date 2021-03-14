const UsersRepository = require("../repository/UsersRepository");

class CheckExistsUserUC {
  async execute(request, response, next) {
    const username = request.header("username");
    const isUserAlreadyExists = UsersRepository.isUserAlreadyExists(username);
    if (!isUserAlreadyExists) {
      return next(Error("User does not exist!"));
    }
    return next();
  }
}

module.exports = new CheckExistsUserUC();
