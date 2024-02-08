import '../styles/favouriteCities.scss'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useLazyGetCurrentDataQuery } from '../features/api/apiSlice'
import { setLatLon } from '../features/coordinatesReducer'
import { pushFavCitiesData } from '../features/favouriteCitiesReducer'

const FavouriteCities = () => {
  const dispatch = useDispatch();
  const [getCurrentData, { data, isLoading, isSuccess, isError, error }] = useLazyGetCurrentDataQuery();

  let favCities = useSelector(state => state.favouriteCities);

  async function getFavCitiesData() {
    let items = [];

    await Promise.all(
      favCities.favouriteCities.map(async (item) => {
        await getCurrentData({lat: item.lat, lon: item.lon})
        .then((result) => {
          items.push(result.data);
        });
      })
    )
    dispatch(pushFavCitiesData(items));
  }

  useEffect(() => {
    getFavCitiesData();
  }, []);

  useEffect(() => {
    getFavCitiesData();
  }, [favCities.favouriteCities]);

  return ( 
    <>
    <section className="favouriteCities">
      <div className='flex items-center'>
        <svg className='favouriteCities__heart' width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
          <g id="SVGRepo_iconCarrier"><path fillRule="evenodd" clipRule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/> </g>
        </svg>
        <h3 className="favouriteCities__title">Favourite cities</h3>
      </div>
      <p className="favouriteCities__description">Add favourite city by clicking on heart.</p>

      {favCities && favCities.favouriteCitiesData.length > 0 ? favCities.favouriteCitiesData.map((item, index) =>
        <div className="favouriteCities__box" key={index} onClick={() => dispatch(setLatLon({lat: item.coord.lat, lon: item.coord.lon}))}>
          <h3 className='favouriteCities__box__name'>{item.name}</h3>
          <div className='flex items-center'>
            <img src={`/icons/weather-icons/${item.weather[0].icon}.png`} alt="weather app icon" className='favouriteCities__box__icon' />
            <p className='favouriteCities__box__temp'>{item.main.temp}&deg;</p>
          </div>
        </div>
      ) : (
        <p className='text-white text-xs my-4'>Add your first favourite city.</p>
      )}

    </section>
    </>
  );
}

export default FavouriteCities;