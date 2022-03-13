import { Dispatch } from 'react';
import { UiAction } from '../action-types/uiTypes';

export const startLoading = () => {

    return ( dispatch: Dispatch<UiAction>) => {

        dispatch({
            type: 'startLoading',
            payload: true
        })

    }
}

export const finishLoading = () => {
    
    return ( dispatch: Dispatch<UiAction>) => {

        dispatch({
            type: 'finishLoading',
            payload: false
        })

    }
}