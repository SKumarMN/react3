
var decrease = function(){
    return { type: 'DECREMENT' };
}

var increase = function(){
    return { type: 'INCREMENT' };
}

var load = function(){
    return { type: 'LOAD' };
}

var getSum = function(a, b){
    return { type: 'SUM', a:a, b:b };
}

var asyncIncrease = function(dispatch,state){
    dispatch({ type: 'LOAD' });
    _fakeServerApi.increaseCount(state.count, function(data){
        //console.log(data);
        dispatch({ type: 'INCREMENT' })
    })
}