
import { useSelector } from 'react-redux';
import { State } from '../../stateManagement/store/store';
import { CitySelector } from '../CitySelector/CitySelector';
import { WeatherFiveDays } from '../WeatherFiveDays/WeatherFiveDays';
import { WeatherToday } from '../WeatherToday/WeatherToday';
import { Loader } from '../Loader/Loader';

export const Weather = () => {

  const { loading } = useSelector( (state: State) => state.ui );

  return (
      <>
        <CitySelector />

        {
          loading ?
          <Loader />
          :
          <div>
            <WeatherToday />

            <WeatherFiveDays />
          </div>
        }
        
      </>
  )
}
