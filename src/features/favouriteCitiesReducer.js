import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  favouriteCities: JSON.parse(localStorage.getItem('favCities')) ?? [],
  favouriteCitiesData: [],
}

export const favouriteCitiesSlice = createSlice({
  name: 'favouriteCities',
  initialState,
  reducers: {
    pushFavCitiesData: (state, action) => {
      state.favouriteCitiesData = [...action.payload];
    },
    addFavCity: (state, action) => {
      state.favouriteCities.push({lat: action.payload.lat, lon: action.payload.lon});
    },
    deleteFavCity: (state, action) => {
      state.favouriteCities = state.favouriteCities.filter(e => (e.lat !== action.payload.lat) && (e.lon !== action.payload.lon));
    },
  },
})

export const { pushFavCitiesData, addFavCity, deleteFavCity } = favouriteCitiesSlice.actions

export default favouriteCitiesSlice.reducer