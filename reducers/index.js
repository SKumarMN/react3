

function combineReducer(currentState, action) {
    var DEFAULT_STATE = {count:{result:0,loading:false}, sum:3};
    var nextState = Object.assign({},currentState);
  
    nextState = {
        count:counter(nextState.count, action),
        sum: sum(nextState.sum, action)
    }
    return nextState;
  
}


//~end step 2.2