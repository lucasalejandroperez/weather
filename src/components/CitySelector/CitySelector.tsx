import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cityState } from '../../stateManagement/action-types/cityActionTypes';
import { currentWeather, currentWeatherRaw, weatherState } from '../../stateManagement/action-types/weatherTypes';
import { loadCities } from '../../stateManagement/actions/cityActions';
import { startLoading, finishLoading } from '../../stateManagement/actions/uiActions';
import { setCurrentWeather, setWeatherFiveDays } from '../../stateManagement/actions/weatherActions';
import { State } from '../../stateManagement/store/store';

export const CitySelector = () => {

    const dispatch = useDispatch();
    const { cities } = useSelector( (state: State) => state.city);
    const [selectedCity, setSelectedCity] = useState<cityState | undefined>(undefined);

    useEffect(() => {
      
        dispatch(loadCities());
        
    }, []);

    useEffect(() => {
      
        if (cities && cities.length > 0) {
            getWeatherFromCity(cities[0]);
        }
        
    }, [cities]);
    

    const getWeatherFromCity = async( city:cityState ) => { 
        try {

            dispatch( startLoading() );

            const apiKey = process.env.REACT_APP_WEATHER_APP_KEY;
            
            await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${ city.lat }&lon=${ city.long }&exclude=alerts&appid=${ apiKey }&units=metric`)
                        .then( res => {
                            
                            const weather: currentWeather = {
                                temp: res.data.current.temp,
                                humidity: res.data.current.humidity,
                                wind_speed: res.data.current.wind_speed,
                                description: res.data.current.weather[0].description
                            }

                            dispatch(setCurrentWeather( weather ));

                            const forecastRaw = res.data.daily.slice(1,6);
                            
                            const forecastFiveDays = forecastRaw.map( (forecast: currentWeatherRaw) => ({
                                temp: forecast.temp.day,
                                humidity: forecast.humidity,
                                wind_speed: forecast.wind_speed,
                                description: forecast.weather[0].description,
                                date: forecast.dt
                            }))

                            dispatch(setWeatherFiveDays(forecastFiveDays));
                            
                            dispatch( finishLoading() );
                        });
            
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
      
      if ( selectedCity ) {
          getWeatherFromCity( selectedCity );
      }

    }, [selectedCity]);
    

    const handleChange = ( e: any ) => {
        
        const city = cities.find( city => city.id == e.target.value);

        if ( city !== undefined) {
            setSelectedCity( city );
        }
    }

  return (
    <>
        <select className="form-select" aria-label="Select City" onChange={ handleChange }>
            {
                cities.map( ( city: cityState ) => (
                    <option value={ city.id } key={ city.id }>{ city.name }</option>
                ))
            }
        </select>
    </>
  )
}
