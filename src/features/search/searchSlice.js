import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    search: '',
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        searched: (state, action) => {
            state.search = action.payload;
        }
    }
});

export default searchSlice.reducer;
export const { searched } = searchSlice.actions;