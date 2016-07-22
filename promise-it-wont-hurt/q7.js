/**
 * Created by nicoleneo on 22/07/2016.
 */
var promise = first()
            .then(second, null)
            .then(console.log, null);
