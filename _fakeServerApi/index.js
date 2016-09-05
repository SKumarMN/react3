var _fakeServerApi= {

    increaseCount: function(currentCount, cb){
        setTimeout(function() {
            cb(currentCount+5);
        }, 2000);
    }
}