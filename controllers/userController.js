// controllers/userController.js

const UserService = require('../services/userService');

class UserController {
  static getAll(req, res) {
    UserService.getAll((error, results) => {
      if (error) {
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
      var json = {title:"test",data:results}
      // res.json(results);
      res.send(json);
    });
  }

  static create(req, res) {
    const userData = req.body;
    UserService.create(userData, (error, result) => {
      if (error) {
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
      res.json(result);
    });
  }
}

module.exports = UserController;
