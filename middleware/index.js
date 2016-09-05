const logger = function (store) {
    return function (next) {
        return function (action) {
            console.log('logger Start' , store.getState());
            next(action);
            console.log('logger End' , store.getState());
        }
    }
}

const crashReporter = function (store) {
    return function (next) {
        return function (action) {

            try {
                console.log('CR Start' , store.getState());
                next(action);
                console.log('CR End' , store.getState());
            } catch (error) {
                console.log(error);

            }

        }
    }
}

const thunk = function (store) {
    return function (next) {
        return function (action) {

            try {
                if (typeof action === 'function') {
                    console.log('thunkFUn Start' , store.getState());
                    action(store.dispatch, store.getState())
                    console.log('thunkFUn End' + store.getState());
                } else {
                    console.log('thunkELSE Start' , store.getState());
                    next(action);
                    console.log('thunkELSE End' , store.getState());
                }

            } catch (error) {
                console.log(error);

            }

        }
    }
}