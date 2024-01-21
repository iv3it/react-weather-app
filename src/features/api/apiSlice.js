// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

let apiKey = '1413ad5b934c2111a7202966316a7ccc'

// Define a service using a base URL and expected endpoints
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://api.openweathermap.org/data/2.5/' 
  }),
  
  endpoints: (builder) => ({
    getCurrentData: builder.query({
      query: (args) => {
        return {
          url: `weather?lat=${args.lat}&lon=${args.lon}&units=metric&appid=${apiKey}`
        }
      },
      transformResponse: (response, meta, arg) => {
        response.main.temp = Math.round(response.main.temp);
        response.main.feels_like = Math.round(response.main.feels_like);

        return response;
      }
    }),
    getDailyAndHourly: builder.query({
      query: (args) => {
        return {
          url: `onecall?lat=${args.lat}&lon=${args.lon}&units=metric&appid=${apiKey}`
        }
      },
      transformResponse: (response, meta, arg) => {
        let timezoneOffset = response.timezone_offset;

        var windDirections = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
        let windIndex = Math.round(((response.current.wind_deg %= 360) < 0 ? response.current.wind_deg + 360 : response.current.wind_deg) / 45) % 8;
        response.current.wind_deg = windDirections[windIndex];

        let sunriseTimeWithOffset = new Date((response.current.sunrise + timezoneOffset) * 1000);
        response.current.sunrise = `${addZero(sunriseTimeWithOffset.getUTCHours())}:${addZero(sunriseTimeWithOffset.getUTCMinutes())}`;

        let sunsetTimeWithOffset = new Date((response.current.sunset + timezoneOffset) * 1000);
        response.current.sunset = `${addZero(sunsetTimeWithOffset.getUTCHours())}:${addZero(sunsetTimeWithOffset.getUTCMinutes())}`;

        response.current.wind_speed = response.current.wind_speed.toFixed(1);
        response.current.dew_point = Math.floor(response.current.dew_point * 10) / 10;
        response.current.visibility = response.current.visibility / 1000;
        
        response.daily.forEach(element => {          
          element.temp.day = Math.round(element.temp.day);
          element.temp.night = Math.round(element.temp.night);
          element.dt = new Date(element.dt * 1000).toLocaleString('en-us', {  weekday: 'short' })
        });

        response.hourly.forEach(element => {          
          let dtWithOffset = new Date((element.dt + timezoneOffset) * 1000);
          element.dt = `${addZero(dtWithOffset.getUTCHours())}:${addZero(dtWithOffset.getUTCMinutes())}`;
          
          element.temp = Math.round(element.temp);
        });

        return response;
      }
    }),
  })
})

function addZero(i) {
  if (i < 10) {i = "0" + i}
  return i;
}

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCurrentDataQuery, useLazyGetCurrentDataQuery, useGetDailyAndHourlyQuery, useLazyGetDailyAndHourlyQuery } = apiSlice