export interface ICurrentWeather {
    temp: number;
    humidity: number;
    wind_speed: number;
    description: string;
}

export interface ICurrentWeatherForecast {
    temp: number;
    humidity: number;
    wind_speed: number;
    description: string;
    date: number
}

export interface IWeatherState {
    currentWeather: ICurrentWeather,
    weatherFiveDays: ICurrentWeatherForecast[]
}

export interface ICurrentWeatherRaw { 
    temp: {
        day: number
    },
    humidity: number;
    wind_speed: number;
    weather: [{
        description: string
    }],
    dt: number;
}

export type WeatherAction = 
| { type: 'setCurrentWeather', payload: ICurrentWeather }
| { type: 'setWeatherFiveDays', payload: ICurrentWeatherForecast[] };