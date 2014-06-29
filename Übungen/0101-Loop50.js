/**
 * Created by Rolf on 25.06.2014.
 */
(function loop(i) {

    if ( i < 50 )
    {
        console.log(i++); // string
        loop(i);
    }
})(0);
