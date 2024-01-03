import '../styles/nextDays.scss'
import iconRainChance from "../assets/icons/umbrella.png";
import iconWeather from "../assets/icons/weather/03d.png";


const NextDays = () => {
  return ( 
    <section className="nextDays">
      <div className='overflow-y-auto pb-4'>
        <div className='nextDay'>
          <p className='nextDay__day'>Monday</p>
          <div className='nextDay__holder'>
            <img className='nextDay__icon' src={iconRainChance} alt='icon'/>
            <p className='nextDay__rainChance'>20%</p>
          </div>
          <div className='nextDay__holder'>
            <img className='nextDay__icon' src={iconWeather} alt='icon'/>
            <img className='nextDay__icon' src={iconWeather} alt='icon'/>
          </div>
          <div className='nextDay__holder'>
            <p className='nextDay__temp'>7&deg;</p>
            <p className='nextDay__temp nextDay__temp--night'>-5&deg;</p>
          </div>
        </div>
      </div>

      <button className='nextDays__button'>More</button>
    </section>
  );
}

export default NextDays;