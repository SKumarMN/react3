
const logger = function (store) {
    return function (next) {
        return function (action) {
            console.log(store.getState());
            next(action);
            console.log(store.getState());
        }
    }
}

const crashReporter = function (store) {
    return function (next) {
        return function (action) {

            try {
                console.log('crashReporter');
                next(action);
                console.log(store.getState());
            } catch (error) {
                console.log(error);

            }

        }
    }
}


// step 1.2
var store = Redux.createStore(combineReducer, Redux.applyMiddleware(logger,crashReporter))
// ~end step 1.2
// step 1.3

function render() {
    var state = store.getState();
    document.getElementById('value').innerHTML = state.count;
    document.getElementById('value2').innerHTML = state.sum;
};

store.subscribe(render);
// ~end step 1.3
render();

