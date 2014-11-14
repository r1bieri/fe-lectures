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
        var dataPath = path.join(rootPath, 'public/data', 'products.json');

        res.format({
            text: function () {
                res.send('Hallo text als Antwort');
            },
            html: function () {
                res.send('hey');
            },
            json: function () {
                res.sendfile(dataPath);
            }
        });

    })
    .get('/products/1', function(req, res) {
        var dataPath = path.join(rootPath, 'public/data', 'products.json');
        console.log('/products/1 spez');
        res.format({
            text: function () {
                res.send('Routeanfrage  /products/1');
            },
            html: function () {
                res.send('hey');
            },
            json: function () {
                res.sendfile(dataPath);
            }
        });
    });

module.exports = router;
