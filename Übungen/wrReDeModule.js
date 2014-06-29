/**
 * Created by Rolf on 25.06.2014.
 */

var fs = require('fs');

module.exports = function(fileName, content, callback) {

    var contentread;

    contentread = content;
    fs.writeFile(fileName, content, function(err){
       if (err) return handleError(err);

        console.log('Das File \''+fileName+'\' wurde geschrieben.');
        readFile(fileName,callback);

        if (callback) callback;

    })
};

  function readFile(fileName,callback){

      fs.readFile(fileName,{encoding: 'utf8'}, function(err, contentread){
      if (err) return handleError(err);

      console.log('Das File \''+fileName+'\' wurde gelesen und enthält folgenden Text')
      console.log(contentread);

      deleteFile(fileName, contentread, callback);

      if (callback)  callback(err, contentread );

  })
}

  function deleteFile(fileName, callback){
    // Main function
    fs.unlink(fileName, function(err){
      if (err) {
          console.log('!!!!!!!!!!Das File '+fileName+' konnte nicht gelöscht werden!');
          return handleError(err);
      }

      console.log('Das File \''+fileName+'\' wurde gelöscht');
    })
}

function handleError(err) {
    console.error(err);
}
