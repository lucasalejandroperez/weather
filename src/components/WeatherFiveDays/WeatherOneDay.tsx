import moment from "moment";
import { currentWeatherForecast } from "../../stateManagement/action-types/weatherTypes";
import { getDateUTC } from "../../utils/getDateUTC";

export const WeatherOneDay = ({ temp, humidity, wind_speed, description, date }:currentWeatherForecast) => {

  return (
    <>
        {
            <div>
                <div>{ moment( getDateUTC(date) ).format('MMMM Do') }</div>
                <div>{ temp } °</div>
                <div>{ description }</div>
                <div>{ humidity }% humidity</div>  
                <div>{ wind_speed } km/h</div>
            </div>
        }
        
    </>
  )
}
