import { Dispatch } from 'react';
import { CityAction, ICityState, ICoords } from '../action-types/cityActionTypes';
import cities from '../../mock/cities.json';
import { getUserLocation } from '../../utils/getUserLocation';
import * as consts from '../../consts/consts';
import WeatherApi from '../../api/openWeatherApi';
import { Daily } from '../../interfaces/WeatherInterfaces';
import { ICurrentWeather } from '../action-types/weatherTypes';

export const loadCities = () => {

    return (dispatch: Dispatch<CityAction>) => {

        getUserLocation().then( coords => {

            const currentLocation: ICityState = {
                id: 0,
                name: consts.CURRENT_LOCATION,
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

export const setFullWeather = ( { long, lat }:ICoords ) => {
    return async(dispatch: Dispatch<CityAction>) => {

        try {

            dispatch({ type: 'startLoading' });
            
            const response = await WeatherApi.Weather.getOneCall({ long, lat });
            
            const weather: ICurrentWeather = {
                temp: response.current.temp,
                humidity: response.current.humidity,
                wind_speed: response.current.wind_speed,
                description: response.current.weather[0].description
            }

            const forecastRaw = response.daily.slice(1,6);
            
            const forecastFiveDays = forecastRaw.map( (forecast: Daily) => ({
                temp: forecast.temp.day,
                humidity: forecast.humidity,
                wind_speed: forecast.wind_speed,
                description: forecast.weather[0].description,
                date: forecast.dt
            }))
            
            dispatch({
                type: 'setCurrentWeather',
                payload: weather
            });

            dispatch({
                type: 'setWeatherFiveDays',
                payload: forecastFiveDays
            });
            
            dispatch( { type:'finishLoading' } );
            
        } catch (error) {
            console.log(error);
        }

    }
}