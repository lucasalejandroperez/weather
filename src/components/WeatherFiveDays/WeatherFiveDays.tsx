import { useSelector } from "react-redux";
import { State } from "../../stateManagement/store/store";
import { WeatherOneDay } from "./WeatherOneDay";
import './WeatherFiveDays.css';

export const WeatherFiveDays = () => {

  const { weatherFiveDays } = useSelector( (state: State) => state.weather);

  return (
    <div className="row mt-3 pb-2 rounded weatherFiveDays_box">
        <div className="col-12">
          <h1>Extended 5 days</h1>
        </div>
        {
          weatherFiveDays &&
          weatherFiveDays.map( (weather, index) => (
            <div className="col-12 col-sm-4 col-md-2 col-lg-2" key={ index }>
              <WeatherOneDay 
                temp={ weather.temp } 
                humidity={ weather.humidity } 
                wind_speed={ weather.wind_speed } 
                description={ weather.description } 
                date={ weather.date }
              />
            </div>
          ))
        }
    </div>
  )
}