/**
 * Created by rolf on 13.11.2014.
 */

    var fn = function (testNr,one, two) {

        console.log( this, testNr, one, two );
    };

var red={red:'rot'}, green={green:'grün'}, blue={blue:'blau'}, yellow={yellow:'gelb'};
red.method = fn;

red.method('1',green, blue);
//fn('2',green,blue);
fn.call('3',red,yellow,blue);
// red.method.call('4',yellow,green,blue);  // this wird überschrieben
//setTimeout(fn,1000); /*5*/
//setTimeout(red.method,1000); /*6*/
setTimeout(function(){red.method('timer 7',green, blue)},1000); /*7*/
console.log(this);
new red.method('9',green,blue);
