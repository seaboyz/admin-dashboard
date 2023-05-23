import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "dark"
};

export const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        setMode: mode => state.mode = mode
    }
});

export const { setMode } = globalSlice.actions;

export default globalSlice.reducer;