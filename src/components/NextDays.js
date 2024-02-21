import '../styles/nextDays.scss'
import Loading from '../components/Loading';
import { useLazyGetDailyAndHourlyQuery } from '../features/api/apiSlice'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const NextDays = () => {
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
      <section className="nextDays">
        {data.daily.map((item, index) =>
          <div className='overflow-y-auto pb-4' key={index}>
            <div className='nextDay'>
              <p className='nextDay__day'>{item.dt}</p>
              <div className='nextDay__holder'>
                <img className='nextDay__icon' src={`/icons/humidity.png`} alt='icon'/>
                <p className='nextDay__humidity'>{item.humidity}%</p>
              </div>
              <div className='nextDay__holder'>
                <img className='nextDay__icon' src={`/icons/weather-icons/${item.weather[0].icon}.png`} alt='icon'/>
              </div>
              <div className='nextDay__holder'>
                <p className='nextDay__temp'>{item.temp.day}&deg;</p>
                <p className='nextDay__temp nextDay__temp--night'>{item.temp.night}&deg;</p>
              </div>
            </div>
          </div>
        )}
      </section>
    }
    </>
  );
}

export default NextDays;