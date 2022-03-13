import { Provider } from "react-redux"
import { Weather } from "./components/Weather/Weather";
import { store } from "./stateManagement/store/store";

export const WeatherApp = () => {

    return (
        <Provider store={ store }>
            <h1>Weather App</h1>
            <hr />
            <Weather />
        </Provider>
    )
}