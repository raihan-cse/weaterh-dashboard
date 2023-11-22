import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getWeathers } from "./weatherAPI";

const initialState = {
    weather: null,
    isLoading: false,
    isError: false,
    error: '',
}

export const fetchWeather = createAsyncThunk('weather/fetchWeather',
    async (location) => {
        const weather = await getWeathers(location)

        return weather;
    })

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeather.pending, (state) => {
                state.isError = false;
                state.error = '';
                state.isLoading = true;
            })
            .addCase(fetchWeather.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = '';
                state.weather = action.payload;
            })
            .addCase(fetchWeather.rejected, (state, action) => {
                state.isLoading = false;
                state.weather = null;
                state.isError = true;
                state.error = action.error ? "This location was,t found" : '';
            })
    }
});

export default weatherSlice.reducer;