import { ICurrentWeather, ICurrentWeatherForecast } from "./weatherTypes";

export interface ICityState {
    id: number;
    name: string;
    long: number;
    lat: number;
}

export interface ICoords {
    long: number;
    lat: number;
}

export type CityAction = 
| { type: 'loadCities', payload: ICityState[] }
| { type: 'startLoading' }
| { type: 'finishLoading' }
| { type: 'setCurrentWeather', payload: ICurrentWeather }
| { type: 'setWeatherFiveDays', payload: ICurrentWeatherForecast[] };


