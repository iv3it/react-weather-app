import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  lat: null,
  lon: null,
}

export const coordinatesSlice = createSlice({
  name: 'coordinates',
  initialState,
  reducers: {
    setLatLon: (state, action) => {
      state.lat = action.payload.lat;
      state.lon = action.payload.lon;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setLatLon } = coordinatesSlice.actions

export default coordinatesSlice.reducer