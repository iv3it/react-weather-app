import '../styles/searchBar.scss'

const SearchBar = () => {
  return ( 
    <section className='relative'>
      <div className="searchBar">
        <input className="searchBar__input" type="text" placeholder="Search for city..." />
        <button className='searchBar__cancel hidden'>Cancel</button>
      </div>
      <div className='suggestionBox hidden'>
        <ul className='suggestionBox__list'>
          <li className='suggestionBox__list__item'>Warsaw</li>
          <li className='suggestionBox__list__item'>Katowice</li>
          <li className='suggestionBox__list__item'>Katowice</li>
          <li className='suggestionBox__list__item'>Katowice</li>
        </ul>
        <span className="suggestionBox__list__noResults">No results found.</span>
      </div>
    </section>
  );
}
export default SearchBar;