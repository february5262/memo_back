// controllers/userController.js

const UserService = require('../services/userService');

class UserController {
  static getAll(req, res) {
    UserService.getAll((error, results) => {
      if (error) {
        // res.status(500).json({ error: 'Internal Server Error' });
        res.status(500).json({status:500,success:false,message:"실패"});
        return;
      }
      var json = {status:200,success:true,message:"성공",data:results}
      // res.json(results);
      res.send(json);
    });
  }

  static create(req, res) {
    const userData = req.body;
    UserService.create(userData, (error, results) => {
      if (error) {
        res.status(500).json({status:500,success:false,message:"실패"});
        return;
      }
      var json = {status:200,success:true,message:"성공",data:results}
      res.json(json);
    });
  }
}

module.exports = UserController;
