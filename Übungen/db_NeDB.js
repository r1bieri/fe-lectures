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
/*  Diese Lib wurde Mal zum Test eingebunden. Was machen diese Funktionen */
should = require('chai').should();
assert = require('chai').assert;

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

function listDB(str, docs){

  if ( docs === null ){

      db.find({},function(err,docs) {
          if (err) return handleError(err);

          if (docs.length >= 0) {
              console.log('default');

              for (var idx = 0; idx < docs.length; idx++) {
                  console.log('   El.[' + idx + '] ' + docs[idx].a + ' _id = ' + docs[idx]._id);
              }
          }
      })
  }

   // console.log(typeof docs);
try {
    // docs kann ein Array von Object oder ein einzelnes Object sein
    console.log('Die Auswahl ' + str + ' enthält ' + docs.length.toLocaleString() + ' Datenelemente');

    for (var idx = 0; idx < docs.length; idx++) {
        console.log('   El.[' + idx + '] ' + docs[idx].a + ' _id = ' + docs[idx]._id);
    }
}catch (e){
    if (e instanceof TypeError){
        // Wenn kein Array übergeben wurde, führt das zu einem Laufzeitfehler
        console.log('Die Auswahl ' + str);
        console.log('   El.[] ' + docs.a + ' _id = ' + docs._id);
    }else {
        console.log(e);
    }
  };

};


(function testDB(){

//    loadData();

    console.log('filename ' + db.filename+' /n '+
                'length '   // + db.length.
                                );

    db.find({},function(err,docs){
       assert.isNull(err);
       if (err) return handleError(err);

       if ( docs.length <= 0 ) {

          console.log('die DB enthält keine Datenelemente');
      } else
        {
          listDB('DB enthält ',docs);

           console.log('************** find <=20 ');
           db.find({ a: {$lte: 20}},function(err,docs1){
              if (err) return handleError(err);

              if ( docs1 != null){

                  listDB( 'Find element <= 20', docs1);
              }
          });

           console.log('************** count ');
           db.count({ a: 10}, function (err, count) {
               if (err) return handleError(err);
               console.log('Anzahl 10er Elemente (with count) ' + count);
           });

           console.log('************** findOne ');
           db.findOne({ a: 10 }, function (err, docs2) {
               if (err) return handleError(err);

               if ( docs2 != null){
                   listDB( 'findOne', docs2);
              }
          });

 //??????????????????? Replace an existing field's value
          var source  = 20;
          var replace = 25;

          db.count({ a: source }, function (err, count) {
              if (err) return handleError(err);

              if ( count === 0 ){
                  /* DB wieder zurückstellen */

                  source  = 25;
                  replace = 20;
                  console.log('1113: '+count);
               };

              db.update({ a: source}, { $set: { a: replace } }, { multi: true }, function (err, numReplaced) {
                  console.log('Anzahl ersetzte Elemente (with update) ' + numReplaced);
                  listDB( ('DB nach Update von '+ replace +' mit '+ source), db);
              });

          });
console.log('1111: '+source);

        };
    });


})();


function handleError(err) {
    console.error('Erroer: ' + err);
}
// testDB();
