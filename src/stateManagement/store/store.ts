import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk';
import { cityReducer } from '../reducers/cityReducer';
import { weatherReducer } from "../reducers/weatherReducer";
import { uiReducer } from '../reducers/uiReducer';

const rootReducer = combineReducers({
    city: cityReducer,
    weather: weatherReducer,
    ui: uiReducer
});

export const store = createStore(
    rootReducer,
    {},
    applyMiddleware(thunk)
)

export type State = ReturnType<typeof rootReducer>