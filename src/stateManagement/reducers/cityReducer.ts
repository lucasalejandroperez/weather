import { CityAction, ICityState } from "../action-types/cityActionTypes";

export interface ICitiesState {
    cities: ICityState[]
}

const initialState: ICitiesState = {
    cities: []
}

export const cityReducer = (state: ICitiesState = initialState, action: CityAction) => {
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