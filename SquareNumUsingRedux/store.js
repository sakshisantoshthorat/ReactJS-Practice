import { configureStore } from "@reduxjs/toolkit";
import mySquare from "./Square";

const store = configureStore({
    reducer: {
        sqrt: mySquare
    }
});

export default store;
