import { Dispatch } from 'react';
import { CityAction, cityState } from '../action-types/cityActionTypes';
import cities from '../../mock/cities.json';
import { getUserLocation } from '../../utils/getUserLocation';

export const loadCities = () => {

    return (dispatch: Dispatch<CityAction>) => {

        getUserLocation().then( coords => {

            const currentLocation: cityState = {
                id: 0,
                name: 'Current Location',
                long: coords[0],
                lat: coords[1]
            };

            cities.unshift(currentLocation);

            dispatch({
                type: 'loadCities',
                payload: cities
            })

        });

    }
}