var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/error', function(req, res, next) {
  console.log(req.query)
  res.send('错误接受完毕');
});

module.exports = router;
