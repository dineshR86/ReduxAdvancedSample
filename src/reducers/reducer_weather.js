import {FETCH_WEATHER} from '../actions/index';

export default function(state=[],action){
    // Redux promise acts as a middleware between the action and the reducers. 
    // If a action payload contains a promise it modifies the action
    // before sending it to the reducers, so that promise is resolved and actual data is sent.
    console.log("action received",action);

    // Here in the switch case we should mutate a state, 
    // we need to create a new state by adding the new city weather data
    // We can use ES6 syntax by combining the arrays using the ... notation. 
    // the new city data will be inserted at the top of the state array data.
    switch(action.type){
        case FETCH_WEATHER:
            return [action.payload.data,...state];
    }
    
    return state;
}