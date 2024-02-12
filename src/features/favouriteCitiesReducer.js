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
      state.favouriteCities.push({lat: action.payload.lat, lon: action.payload.lon, id: action.payload.id});
    },
    deleteFavCity: (state, action) => {
      state.favouriteCities = state.favouriteCities.filter(e => (e.id !== action.payload.id));
    },
  },
})

export const { pushFavCitiesData, addFavCity, deleteFavCity } = favouriteCitiesSlice.actions

export default favouriteCitiesSlice.reducer