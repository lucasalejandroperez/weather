import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ICityState } from '../stateManagement/action-types/cityActionTypes';
import { loadCities, setFullWeather } from '../stateManagement/actions/weatherActions';
import { State } from '../stateManagement/store/store';

export const useCitySelector = () => {

    const dispatch = useDispatch();
    const { cities } = useSelector( (state: State) => state.city);
    const [selectedCity, setSelectedCity] = useState<ICityState | undefined>(undefined);

    useEffect(() => {
      
        dispatch(loadCities());
        
    }, []);

    useEffect(() => {
      
        if (cities && cities.length > 0) {
            dispatch( setFullWeather({ long: cities[0].long, lat: cities[0].lat }) );
        }
        
    }, [cities]);

    useEffect(() => {
      
        if ( selectedCity ) {
            dispatch( setFullWeather({ long: selectedCity.long, lat: selectedCity.lat }) );
        }
  
      }, [selectedCity]);
    
    const handleChange = ( e: any ) => {
        
        const city = cities.find( city => city.id == e.target.value);

        if ( city !== undefined) {
            setSelectedCity( city );
        }
    }

  return {
    handleChange,
    cities
  }
}
