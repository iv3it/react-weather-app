import '../styles/nextHours.scss';
import Loading from '../components/Loading';
import { useLazyGetDailyAndHourlyQuery } from '../features/api/apiSlice'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const NextHours = () => {
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
      <section className="nextHours">
        {data.hourly.map((item, index) => 
          <div className="nextHour" key={index}>
            <p className="nextHour__hour">{item.dt}</p>
            <img src={`/icons/weather-icons/${item.weather[0].icon}.png`} alt="icon" className="nextHour__icon"/>
            <p className="nextHour__temp">{item.temp}&deg;</p>
          </div>
        )}
      </section>
    }
    </>
  );
}

export default NextHours;