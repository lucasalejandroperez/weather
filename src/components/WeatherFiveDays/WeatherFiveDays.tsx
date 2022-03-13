import { useSelector } from "react-redux";
import { State } from "../../stateManagement/store/store";
import { WeatherOneDay } from "./WeatherOneDay";

export const WeatherFiveDays = () => {

  const { weatherFiveDays } = useSelector( (state: State) => state.weather);

  return (
    <div>
        <h1>Extended 5 days</h1>
        {
          weatherFiveDays &&
          weatherFiveDays.map( (weather, index) => (
            <div key={ index }>
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