import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from '../features/api/apiSlice'
import coordinatesReducer from '../features/coordinatesReducer'
import favouriteCitiesReducer from '../features/favouriteCitiesReducer'

export const store = configureStore({
  reducer: {
    favouriteCities: favouriteCitiesReducer,
    coordinates: coordinatesReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware)
})