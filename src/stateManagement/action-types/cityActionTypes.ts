export interface cityState {
    id: number;
    name: string;
    long: number;
    lat: number;
}

export type CityAction = 
| { type: 'loadCities', payload: cityState[] };
