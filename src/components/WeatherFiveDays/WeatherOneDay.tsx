import moment from "moment";
import { currentWeatherForecast } from "../../stateManagement/action-types/weatherTypes";
import { getDateUTC } from "../../utils/getDateUTC";

import './WeatherOneDay.css';

export const WeatherOneDay = ({ temp, humidity, wind_speed, description, date }:currentWeatherForecast) => {

  return (
    <>
        {
            <div className="weatherOneDay_box">
                <div>{ moment( getDateUTC(date) ).format('MMMM Do') }</div>
                <div className="weatherOneDay_temp">{ Math.round(temp) }°</div>
                <div>{ description }</div>
                <div>{ humidity }% humidity</div>  
                <div>{ wind_speed } km/h</div>
            </div>
        }
        
    </>
  )
}
