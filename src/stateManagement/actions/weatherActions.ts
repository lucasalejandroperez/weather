import { Dispatch } from 'react';
import { currentWeather, currentWeatherForecast, WeatherAction, weatherState } from '../action-types/weatherTypes';

export const setCurrentWeather = ( weather:currentWeather ) => {

    return (dispatch: Dispatch<WeatherAction>) => {
        
        dispatch({
            type: 'setCurrentWeather',
            payload: weather
        });
    }
}

export const setWeatherFiveDays = ( weathers:currentWeatherForecast[] ) => {

    return (dispatch: Dispatch<WeatherAction>) => {

        dispatch({
            type: 'setWeatherFiveDays',
            payload: weathers
        });
    }
}