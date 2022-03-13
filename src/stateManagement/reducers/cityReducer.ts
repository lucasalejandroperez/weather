import { CityAction, cityState } from "../action-types/cityActionTypes";

export interface citiesState {
    cities: cityState[]
}

const initialState: citiesState = {
    cities: []
}

export const cityReducer = (state: citiesState = initialState, action: CityAction) => {
    switch ( action.type ) {
        case 'loadCities':
            return {
                ...state,
                cities: action.payload
            }
        default:
            return state;
    }
}