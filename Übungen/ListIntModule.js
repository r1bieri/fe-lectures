/**
 * Created by Rolf on 25.06.2014.
 */

module.exports = function(start ,end) {
    if (start < end) {
        for (var i = start; i <= end; i++) {
            console.log(i); // string
        }
        return 'Wertebereich war korrekt';
    } else {
        return 'Wertebereich nicht möglich';
    }
}


