import '../styles/mainInfo.scss'
import { useGetCurrentDataQuery } from '../features/api/apiSlice'
import { useSelector } from 'react-redux';

const MainInfo = () => {
  const { lat, lon } = useSelector(state => state.coordinates);
  const {
    data,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetCurrentDataQuery({lat, lon});

  return ( 
    <>
    {data &&
      <section className='mainInfo'>
        <div className='flex flex-col items-center lg:items-start'>
          <h1 className='mainInfo__city'>{data.name}</h1>
          <h2 className='mainInfo__conditions'>{data.weather[0].description}</h2>
          <img src={`/icons/weather-icons/${data.weather[0].icon}.png`} alt="icon" className='mainInfo__icon lg:hidden' />
          <h2 className='mainInfo__temp'>{data.main.temp}&deg;</h2>
          <h2 className='mainInfo__feelsLike'>Feel like {data.main.feels_like}&deg;</h2>
        </div>
        <div className='hidden lg:flex justify-center'>
          <img src={`/icons/weather-icons/${data.weather[0].icon}.png`} alt="icon" className='mainInfo__icon' />
        </div>
      </section>
    }
    </>
  );
}

export default MainInfo;