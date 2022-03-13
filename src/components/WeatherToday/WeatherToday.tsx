import { useSelector } from 'react-redux';
import { State } from '../../stateManagement/store/store';

export const WeatherToday = () => {

  const { currentWeather } = useSelector( (state: State) => state.weather);

  return (
    <div>
        <h1>Current Weather</h1>
        {
           currentWeather && 
           <div>
              <div>{ currentWeather.temp } °</div>
              <div>{ currentWeather.description }</div>
              <div>{ currentWeather.wind_speed } km/h</div>
              <div>{ currentWeather.humidity }% humidity</div>  
           </div>
        }
        
    </div>
  )
}