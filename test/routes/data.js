var express = require('express');
var router = express.Router();
var path = require('path');
var rootPath = path.resolve(process.cwd(), '..');
console.log(rootPath);

/* GET data listing. */
router
    .get('/', function(req, res) {
        res.send('respond with a resource');
        })
    .get('/products', function(req, res) {
        var dataPath = path.join(rootPath, 'public/data','products.json');
        // res.json({foo: 'bar'});
        // res.sendfile('../public/data/products.json'); generiert einen Fehler
        res.sendfile(dataPath);
        });

module.exports = router;
