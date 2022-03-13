export interface currentWeather {
    temp: number;
    humidity: number;
    wind_speed: number;
    description: string;
}

export interface currentWeatherForecast {
    temp: number;
    humidity: number;
    wind_speed: number;
    description: string;
    date: number
}

export interface weatherState {
    currentWeather: currentWeather,
    weatherFiveDays: currentWeatherForecast[]
}

export interface currentWeatherRaw { 
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
| { type: 'setCurrentWeather', payload: currentWeather }
| { type: 'setWeatherFiveDays', payload: currentWeatherForecast[] };