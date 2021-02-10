// Copyright © 2021 Jonathan Dean Damiani
import axios from 'axios';

export const fetchShips = async (dispatch) => {
    try {
        const response = await axios.get("http://swapi.dev/api/starships/?page=1");
        dispatch ({
            type: 'GET_SHIPS',
            payload: response.data
        });
    } catch (err) {
        dispatch( {
            type: 'SHIP_ERROR',
            payload: console.log(err),
        });
    }
}

export const calcStopsToTravel = (distance) => (dispatch) => {
    dispatch ({
        type: 'CALC_STOPS',
        payload: distance
    });
}
