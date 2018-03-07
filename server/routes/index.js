var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/testapi', (req,res) => {
  res.send('Hellow !');
})

router.post('/testapi', (req,res) => {
  res.send(req.body.postData)
})
module.exports = router;
