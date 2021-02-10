// Copyright © 2021 Jonathan Dean Damiani
import shipReducer from './shipReducer';
import { combineReducers } from 'redux';

// Combine all reducers
const rootReducer = combineReducers({
    shipsData: shipReducer
});

export default rootReducer;