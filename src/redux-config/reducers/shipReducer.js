// Copyright © 2021 Jonathan Dean Damiani
const initialState = {
    ships:[],
    isLoading: true
}

const shipReducer =  (state = initialState, action) => {
    switch (action.type) {
        case 'GET_SHIPS':
            return {
                ...state,
                ships: action.payload,
                isLoading: false
            }
        case 'CALC_STOPS':
            return {
                ...state,
                ships: {
                    ...state.ships,
                    results: calculateStops(state.ships.results, action.payload)
                }
            }
        default:
            return state
    }
}

const calculateStops = (ships, distance) => {
    let newShips = ships.map((item) => {
        let hours = getConsumablesInHours(item.consumables);
        let timeToReachDestination = distance / item.MGLT;
        let numberOfStops = timeToReachDestination / hours;
        
        item = {
            ...item,
            numOfStops: Math.floor(numberOfStops)
        }
        return item;
    });

    return newShips;
}

const getConsumablesInHours = (value) => {

    let numberToUse = value.split(" ")[0];
    let calcFactor;
    let result; 

    if (value.includes('year')) {
        calcFactor = 365;
    } else if (value.includes('month')) {
        calcFactor = 30;
    } else if (value.includes('week')) {
        calcFactor = 7;
    } else if (value.includes('day')) {
        calcFactor = 1;
    } else {
        return undefined;
    }

    result = numberToUse * calcFactor * 24;
    
    return result;
}


export default shipReducer;