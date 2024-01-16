import '../styles/searchBar.scss'
import { useState } from 'react';

const SearchBar = () => {
  const apiKey = "1413ad5b934c2111a7202966316a7ccc";
  const [searchValue, setSearchValue] = useState("");
  const [suggestions, setSuggestions] = useState(null);

  let getSuggestions = (input) => {
    if(input.length >= 2) {
      setTimeout(() => {
        fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=8&appid=${apiKey}`)
        .then((result) => result.json())
        .then((data) => (setSuggestions(data)))
      }, 500)
    }

    if(input.length === 0) {
      setSuggestions(null);
    }
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
            <li className='suggestionBox__list__item' key={index}>{item.name}</li>
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