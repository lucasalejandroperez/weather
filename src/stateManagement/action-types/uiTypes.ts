export interface uiState {
    loading: boolean
}

export type UiAction = 
| { type: 'startLoading', payload: boolean }
| { type: 'finishLoading', payload: boolean };