import '../styles/mainInfo.scss'
import WeatherIcon from '../assets/icons/weather/01d.png'

const MainInfo = () => {
  return ( 
    <section className='mainInfo'>
      <div className='flex flex-col items-center lg:items-start'>
        <h1 className='mainInfo__city'>Warsaw</h1>
        <h2 className='mainInfo__conditions'>Mostly sunny</h2>
        <img src={WeatherIcon} alt="icon" className='mainInfo__icon lg:hidden' />
        <h2 className='mainInfo__temp'>26&deg;</h2>
        <h2 className='mainInfo__feelsLike'>Feel like 28&deg;</h2>
      </div>
      <div className='hidden lg:flex justify-center'>
        <img src={WeatherIcon} alt="icon" className='mainInfo__icon' />
      </div>
    </section>
  );
}

export default MainInfo;