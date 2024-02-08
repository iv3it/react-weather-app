import '../styles/mainInfo.scss'
import { useGetCurrentDataQuery } from '../features/api/apiSlice'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { addFavCity, deleteFavCity } from '../features/favouriteCitiesReducer'

const MainInfo = () => {
  const dispatch = useDispatch();
  const favCities = useSelector(state => state.favouriteCities);
  const { lat, lon } = useSelector(state => state.coordinates);
  const {
    data,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetCurrentDataQuery({lat, lon});
  let [isCurrentCityFav, setIsCurrentCityFav] = useState(false);
  let [addingToFav, setAddingToFav] = useState(false);

  useEffect(() => {
    if(data) {
      if(data.coord.lat && data.coord.lon) {
        let isItemOnFavList = favCities.favouriteCities.some(e => {
          return (e.lat === data.coord.lat) && (e.lon === data.coord.lon)
        })
        setIsCurrentCityFav(isItemOnFavList);
      }

      setAddingToFav(false);
    }
  }, [data])

  let toggleFav = (lat, lon) => {
    if(isCurrentCityFav) {
      let newFavCities = favCities.favouriteCities.filter(e => (e.lat !== lat) && (e.lon !== lon));
      localStorage.setItem('favCities', JSON.stringify(newFavCities));

      dispatch(deleteFavCity({lat: lat, lon: lon}));
      setIsCurrentCityFav(false);
      setAddingToFav(false);
    } else {
      let newFavCities = [...favCities.favouriteCities];
      newFavCities.push({lat: lat, lon:lon});
      localStorage.setItem('favCities', JSON.stringify(newFavCities));
      
      dispatch(addFavCity({lat: lat, lon: lon}));
      setIsCurrentCityFav(true);
      setAddingToFav(true);
    }
  }

  return ( 
    <>
    {data &&
      <section className='mainInfo'>        
        <div className='flex flex-col items-center lg:items-start'>
          <button onClick={() => toggleFav(data.coord.lat, data.coord.lon)} className="mainInfo__heart">
            <svg className={`${isCurrentCityFav ? "filled" : ""} ${isCurrentCityFav && addingToFav ? "heartbeatAnimation" : ""} mainInfo__heart__icon`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
              <g id="SVGRepo_iconCarrier"> 
                <path fillRule="evenodd" clipRule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              </g>
            </svg>
          </button>
          <h2 className='mainInfo__city'>{data.name}</h2>
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