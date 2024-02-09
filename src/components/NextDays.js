import '../styles/nextDays.scss'
import Loading from '../components/Loading';
import { useGetDailyAndHourlyQuery } from '../features/api/apiSlice'
import { useSelector } from 'react-redux';

const NextDays = () => {
  const { lat, lon } = useSelector(state => state.coordinates);
  const {
    data,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetDailyAndHourlyQuery({lat, lon});

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