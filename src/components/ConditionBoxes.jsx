import '../styles/conditionBoxes.scss'
import Loading from '../components/Loading';
import { useLazyGetDailyAndHourlyQuery } from '../features/api/apiSlice'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const ConditionBoxes = () => {
  const { lat, lon } = useSelector(state => state.coordinates);
  const [getDailyAndHourlyQuery, { data, isLoading, isSuccess, isError, error }] = useLazyGetDailyAndHourlyQuery({lat, lon});

  useEffect(() => {
    if(lat && lon) {
      getDailyAndHourlyQuery({lat: lat, lon: lon});
    }
  }, [lat, lon])

  return ( 
    <>
    {isLoading && 
      <Loading />
    }
    {data && 
      <section className="conditionBoxes">
        <div className="conditionBox">
          <img src="/icons/humidity.png" alt="icon" className="conditionBox__icon"/>
          <p className="conditionBox__value">{data.current.humidity}%</p>
          <p className="conditionBox__description">Humidity</p>
        </div>
        <div className="conditionBox">
          <img src="/icons/pressure.png" alt="icon" className="conditionBox__icon"/>
          <p className="conditionBox__value">{data.current.pressure} hPa</p>
          <p className="conditionBox__description">Air pressure</p>
        </div>
        <div className="conditionBox">
          <img src="/icons/sunrise.png" alt="icon" className="conditionBox__icon"/>
          <p className="conditionBox__value">{data.current.sunrise}</p>
          <p className="conditionBox__description">Sunrise</p>
        </div>
        <div className="conditionBox">
          <img src="/icons/sunset.png" alt="icon" className="conditionBox__icon"/>
          <p className="conditionBox__value">{data.current.sunset}</p>
          <p className="conditionBox__description">Sunset</p>
        </div>
        <div className="conditionBox">
          <img src="/icons/wind.png" alt="icon" className="conditionBox__icon"/>
          <p className="conditionBox__value">{data.current.wind_speed} m/s</p>
          <p className="conditionBox__description">Wind speed</p>
        </div>
        <div className="conditionBox">
          <img src="/icons/wind-direction.png" alt="icon" className="conditionBox__icon"/>
          <p className="conditionBox__value">{data.current.wind_deg}</p>
          <p className="conditionBox__description">Wind direction</p>
        </div>
        <div className="conditionBox">
          <img src="/icons/thermometer.png" alt="icon" className="conditionBox__icon"/>
          <p className="conditionBox__value">{data.current.dew_point}</p>
          <p className="conditionBox__description">Dew point</p>
        </div>
        <div className="conditionBox">
          <img src="/icons/sunglasses.png" alt="icon" className="conditionBox__icon"/>
          <p className="conditionBox__value">{data.current.uvi}</p>
          <p className="conditionBox__description">UV Index</p>
        </div>
        <div className="conditionBox">
          <img src="/icons/visibility.png" alt="icon" className="conditionBox__icon"/>
          <p className="conditionBox__value">{data.current.visibility} km</p>
          <p className="conditionBox__description">Visibility</p>
        </div>
        <div className="conditionBox">
          <img src="/icons/clouds.png" alt="icon" className="conditionBox__icon"/>
          <p className="conditionBox__value">{data.current.clouds}%</p>
          <p className="conditionBox__description">Cloud Cover</p>
        </div>
      </section>
    }
    </>
  );
}

export default ConditionBoxes;