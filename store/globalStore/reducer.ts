import { createSlice } from '@reduxjs/toolkit';
import { initialState } from "./initialState";

export const globalReducer = createSlice({
    name: 'globalStore',
    initialState,

    reducers: {
    },
})

// Action creators are generated for each case reducer function
export const {
} = globalReducer.actions;

export default globalReducer.reducer;
