/**
 * Created by Rolf on 28.06.2014.
 */
var http = require('http');
var server = http.createServer();
var wrdFile =require('./wrReDeModule');
var number =require('./listIntModule');

server
    .listen(3000)
    .on('request', onRequest )
;

function onRequest(req,res){
var ftext = 'warum lässt sich diese nicht beschreiben';

   res.writeHead(200, { 'Content-Type': 'text/ftext' });
   res.write('äüöevent recived: '+ req.url +' \r\n');

    if (req.url === '/file') {

        // console.log( 'console: geschrieben, gelesen und gelöscht!');
        wrdFile('wrdFile.txt','Es wird ein File geschrieben, gelesen und gelöscht.', function(err, content){
            if (err) return handleError(err);

           // res.writeHead(200);
           // console.log('main: '+content);
            ftext = content;
            console.log('main: '+content);
            res.write('eingelesener Text: '+ content);

        });

    }else if (req.url === '/numbers')  {

        // console.log( 'list integer!');
        number(50, 100);
    }

    res.write('eingelesener Text: '+ ftext);
    res.end();

}

console.log('Server running on port 3000');


function handleError(err) {
    console.error(err);
}