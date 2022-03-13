import { useSelector } from 'react-redux';
import { State } from '../../stateManagement/store/store';

import './WeatherToday.css';

export const WeatherToday = () => {

  const { currentWeather } = useSelector( (state: State) => state.weather);

  return (
    <div>
        <div className="row">
          <div className="col-12 rounded-top today_weather_title_box">
            <h1>Current weather</h1>
          </div>
          {
            currentWeather && 
            <div className="col rounded-bottom today_weather_content_box pb-2">
                <div className="today_weather_temp">{ Math.round(currentWeather.temp)  }°</div>
                <div>{ currentWeather.description }</div>
                <div>{ currentWeather.wind_speed } km/h</div>
                <div>{ currentWeather.humidity }% humidity</div>  
            </div>
          }
        </div>
    </div>
  )
}
