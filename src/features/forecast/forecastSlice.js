import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getForecast } from "./forecastAPI";

const initialState = {
    forecast: [],
    isLoading: true,
    isError: false,
    error: '',
}


export const fetchForecast = createAsyncThunk('forecast/fetchForecast',
    async (location) => {
        const forecast = await getForecast(location)

        return forecast;
    })


const forecastSlice = createSlice({
    name: 'forecast',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchForecast.pending, (state) => {
                state.isError = false;
                state.error = '';
                state.isLoading = true;
            })
            .addCase(fetchForecast.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = '';
                state.forecast = action.payload;
            })
            .addCase(fetchForecast.rejected, (state, action) => {
                state.isLoading = false;
                state.forecast = [];
                state.isError = true;
                state.error = action.error?.message;
            })
    }
});

export default forecastSlice.reducer;