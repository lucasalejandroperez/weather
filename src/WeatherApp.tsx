import { Provider } from "react-redux"
import { Weather } from "./components/Weather/Weather";
import { store } from "./stateManagement/store/store";

import './styles/general.css';

export const WeatherApp = () => {

    return (
        <Provider store={ store }>
            <div className="title pb-2 mb-3 d-flex justify-content-center">
                <h1>Weather Challenge</h1>
            </div>
            <Weather />
        </Provider>
    )
}