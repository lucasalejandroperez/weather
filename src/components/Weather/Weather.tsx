
import { useSelector } from 'react-redux';
import { State } from '../../stateManagement/store/store';
import { CitySelector } from '../CitySelector/CitySelector';
import { WeatherFiveDays } from '../WeatherFiveDays/WeatherFiveDays';
import { WeatherToday } from '../WeatherToday/WeatherToday';
import { Loader } from '../Loader/Loader';

export const Weather = () => {

  const { loading } = useSelector( (state: State) => state.ui );

  return (
      <div className="container">
        <div className="row">
          <div className="col">
            <CitySelector />
          </div>
        </div>

        {
          loading ?
          <div className="row mt-4">
            <div className="col">
              <Loader />
            </div>
          </div>
          :
          <>
            <div className="row mt-3">
              <div className="col">
                <WeatherToday />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <WeatherFiveDays />
              </div>
            </div>
          </>
        }
      </div>
  )
}