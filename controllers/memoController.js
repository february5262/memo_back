// controllers/memoController.js

const MemoService = require('../services/memoService');

class MemoController {
  static getAll(req, res) {
    MemoService.getAll((error, results) => {
      if (error) {
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
      var json = results;
      // res.json(results);
      res.send(json);
    });
  }

  static create(req, res) {
    const memoData = req.body;
    MemoService.create(memoData, (error, result) => {
      if (error) {
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
      res.json(result);
    });
  }
}

module.exports = MemoController;
