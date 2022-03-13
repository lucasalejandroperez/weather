import { WeatherAction, weatherState } from "../action-types/weatherTypes";

const initialState = {
    currentWeather: {
        temp: 0,
        description: '',
        humidity: 0,
        wind_speed: 0
    },
    weatherFiveDays: [{
        temp: 0,
        description: '',
        humidity: 0,
        wind_speed: 0,
        date: 1423434
    }]
}

export const weatherReducer = ( state: weatherState = initialState, action: WeatherAction ) => {
    switch ( action.type ) {
        case 'setCurrentWeather':
            return {
                ...state,
                currentWeather: action.payload
            }
        case 'setWeatherFiveDays':
            return {
                ...state,
                weatherFiveDays: action.payload
            }
        default:
            return state;
    }
}