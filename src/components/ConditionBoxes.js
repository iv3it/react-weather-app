import '../styles/conditionBoxes.scss'
import iconHumidity from "../assets/icons/humidity.png";
import iconPressure from "../assets/icons/pressure.png";
import iconSunrise from "../assets/icons/sunrise.png";
import iconSunset from "../assets/icons/sunset.png";
import iconWind from "../assets/icons/wind.png";
import iconWindDirection from "../assets/icons/wind-direction.png";
import iconRainChance from "../assets/icons/umbrella.png";
import iconUVIndex from "../assets/icons/sunglasses.png";
import iconVisibility from "../assets/icons/visibility.png";
import iconCloudCover from "../assets/icons/clouds.png";
import iconFeelsLike from "../assets/icons/thermometer.png"


const ConditionBoxes = () => {
  return ( 
    <section className="conditionBoxes">
      <div className="conditionBox">
        <img src={iconHumidity} alt="icon" className="conditionBox__icon"/>
        <p className="conditionBox__value">36%</p>
        <p className="conditionBox__description">Humidity</p>
      </div>
      <div className="conditionBox">
        <img src={iconPressure} alt="icon" className="conditionBox__icon"/>
        <p className="conditionBox__value">1024 hPa</p>
        <p className="conditionBox__description">Air pressure</p>
      </div>
      <div className="conditionBox">
        <img src={iconSunrise} alt="icon" className="conditionBox__icon"/>
        <p className="conditionBox__value">05:22</p>
        <p className="conditionBox__description">Sunrise</p>
      </div>
      <div className="conditionBox">
        <img src={iconSunset} alt="icon" className="conditionBox__icon"/>
        <p className="conditionBox__value">20:33</p>
        <p className="conditionBox__description">Sunset</p>
      </div>
      <div className="conditionBox">
        <img src={iconWind} alt="icon" className="conditionBox__icon"/>
        <p className="conditionBox__value">24 km/h</p>
        <p className="conditionBox__description">Wind speed</p>
      </div>
      <div className="conditionBox">
        <img src={iconWindDirection} alt="icon" className="conditionBox__icon"/>
        <p className="conditionBox__value">SW</p>
        <p className="conditionBox__description">Wind direction</p>
      </div>
      <div className="conditionBox">
        <img src={iconRainChance} alt="icon" className="conditionBox__icon"/>
        <p className="conditionBox__value">19%</p>
        <p className="conditionBox__description">Chance of rain</p>
      </div>
      <div className="conditionBox">
        <img src={iconUVIndex} alt="icon" className="conditionBox__icon"/>
        <p className="conditionBox__value">6</p>
        <p className="conditionBox__description">UV Index</p>
      </div>
      <div className="conditionBox">
        <img src={iconVisibility} alt="icon" className="conditionBox__icon"/>
        <p className="conditionBox__value">20km</p>
        <p className="conditionBox__description">Visibility</p>
      </div>
      <div className="conditionBox">
        <img src={iconCloudCover} alt="icon" className="conditionBox__icon"/>
        <p className="conditionBox__value">46%</p>
        <p className="conditionBox__description">Cloud Cover</p>
      </div>
      {/* <div className="conditionBox">
        <img src={iconFeelsLike} alt="icon" className="conditionBox__icon"/>
        <p className="conditionBox__value">19&deg;</p>
        <p className="conditionBox__description">Feels like</p>
      </div> */}
    </section>
  );
}

export default ConditionBoxes;