import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    results: [],
};

export const resultsSlice = createSlice({
    name: 'results',
    initialState,
    reducers: {
        setResults: (state, action) => {
            state.results = action.payload;
        },
    },
});
export const {setResults} = resultsSlice.actions;

export const selectResults = (state) => state.results.results;

export default resultsSlice.reducer;
