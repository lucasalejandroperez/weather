import { UiAction, uiState } from "../action-types/uiTypes";

const initialState = {
    loading: false
}


export const uiReducer = (state: uiState = initialState, action: UiAction) => {
    switch ( action.type ) {
        case 'startLoading':
            return {
                ...state,
                loading: true
            }
        case 'finishLoading':
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
}