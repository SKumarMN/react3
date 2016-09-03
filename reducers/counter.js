// step 2.2
function counter(currentState, action){
    var DEFAULT_STATE = 0;
    if(currentState === undefined){
        var nextState = DEFAULT_STATE;
         return nextState;
    }

   

    switch (action.type) {
        case 'DECREMENT': // look at Note2.1
        nextState = currentState - 1;
        return nextState;// Note2.2
        case 'INCREMENT': // look at Note2.1
        nextState = currentState + 1;
        return nextState;// Note2.2
        
        default:
        nextState = currentState;
        return nextState;
    }
   
   
}