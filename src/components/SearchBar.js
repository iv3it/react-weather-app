import '../styles/searchBar.scss'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setLatLon } from '../features/coordinatesReducer'

const SearchBar = () => {
  const dispatch = useDispatch();
  const apiKey = "1413ad5b934c2111a7202966316a7ccc";
  const [searchValue, setSearchValue] = useState("");
  const [suggestions, setSuggestions] = useState(null);

  let getSuggestions = (input) => {
    if(input.length >= 2) {
      setTimeout(() => {
        fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=8&appid=${apiKey}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => (setSuggestions(data)))
        .catch((error) => {
          console.log(error);
        });
      }, 500)
    }

    if(input.length === 0) {
      setSuggestions(null);
    }
  }

  let getWeatherData = async(lat, lon) => {
    dispatch(setLatLon({lat, lon}));
    setSuggestions(null); 
    setSearchValue("");
  }

  return ( 
    <section className='relative'>
      <div className="searchBar">
        <input onKeyUp={() => getSuggestions(searchValue)} value={searchValue} onChange={(e)=> setSearchValue(e.target.value)} className="searchBar__input" type="text" placeholder="Search for city..." />
        
        <button onClick={() => {setSearchValue(""); setSuggestions(null);}} className={`${searchValue.length < 1 ? "invisible" : ""} searchBar__cancel`}>Cancel</button>
      </div>
      <div className='suggestionBox'>
        <ul className='suggestionBox__list'>
          {suggestions && suggestions.map((item, index) => (
            <li onClick={() => {getWeatherData(item.lat, item.lon);}} className="suggestionBox__list__item" key={index}>{item.name}, <span className='additionalInfo'>{item.state}, {item.country}</span></li>
          ))}
        </ul>
        {!suggestions && searchValue.length >= 2 &&
          <span className="suggestionBox__list__noResults">No results found.</span>
        }
      </div>
    </section>
  );
}
export default SearchBar;