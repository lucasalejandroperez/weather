import { useCitySelector } from '../../hooks/useCitySelector';
import { ICityState } from '../../stateManagement/action-types/cityActionTypes';

export const CitySelector = () => {

    const { handleChange, cities } = useCitySelector();

  return (
    <>
        <select className="form-select" aria-label="Select City" onChange={ handleChange }>
            {
                cities.map( ( city: ICityState ) => (
                    <option value={ city.id } key={ city.id }>{ city.name }</option>
                ))
            }
        </select>
    </>
  )
}
