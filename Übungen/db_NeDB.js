/**
 * Created by Rolf on 05.06.2014.
 */
/* JSHint Globals */
/* global $:false */
/* global alert:false */
/* global console:false */

/*
var http = require('http');
var server = http.createServer();
var express = require('express');
var app = express();

server
    .listen(3000)
    .on('request', testDB )
;
*/

/* Type 3: Persistent datastore with automatic loading*/
var Nedb = require('nedb')
    , db = new Nedb({ filename: 'path/to/datafile', autoload: true });
/* You can issue commands right away*/
/*
var doc = { hello: 'world'
    //,_id:      If the document does not contain an _id field, NeDB will automatically generated
    , text: 'test DB'
    , infos: { name: 'nedb' }
};
*/
function loadData(){

    db.insert({ a: 10 });
    db.insert({ a: 20 });
    db.insert({ a: 30 });
    db.insert({ a: 40 });

}

function testDbOrigin(){
;

};

function testDB(){

//    loadData();

    console.log('filename ' + db.filename);

    db.find({ a: {$lte: 0}},function(err,docs){
        console.log('find El. ' + docs.length.toLocaleString());
    });

 };

 testDB();
