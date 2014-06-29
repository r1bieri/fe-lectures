/**
 * Created by Rolf on 27.06.2014.

 Dieser Code wurde gefunden auf der URL
     http://benalman.com/news/2010/11/immediately-invoked-function-expression/

 */

// Because this function returns another function that has access to the
// "private" var i, the returned function is, effectively, "privileged."

function makeCounter(name) {
    // `i` is only accessible inside `makeCounter`.
    var i = 0;

    return function() {
        console.log( name, ++i );
    };
}

// Note that `counter` and `counter2` each have their own scoped `i`.

var counter = makeCounter('Instanz A');
counter(); // logs: 1
counter(); // logs: 2
counter(); // logs:
counter(); // logs:

var counter2 = makeCounter('Instanz B');
counter2(); // logs: 1
counter2(); // logs: 2
counter2(); // logs:
counter2(); // logs:

// i; // ReferenceError: i is not defined (it only exists inside makeCounter)
