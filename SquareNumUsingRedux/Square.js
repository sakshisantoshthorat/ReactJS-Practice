import { createSlice } from "@reduxjs/toolkit";

const square = createSlice({
    name: "sqrt",
    initialState: {
        square: 0
    },
    reducers: {
        setSquare: (state, action) => {
            state.square = action.payload * action.payload;
        }
    }
});

export const { setSquare } = square.actions;
export default square.reducer; 
