import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import weatherReducer from '../features/weather/weatherSlice';
import forecastReducer from '../features/forecast/forecastSlice';
import searchReducer from '../features/search/searchSlice';


export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    forecast: forecastReducer,
    search: searchReducer,
  },
});
