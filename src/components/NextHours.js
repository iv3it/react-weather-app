import '../styles/nextHours.scss';
import { useGetDailyAndHourlyQuery } from '../features/api/apiSlice'
import { useSelector } from 'react-redux';

const NextHours = () => {
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