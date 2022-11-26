
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import vaccineSlice from "./vaccineSlice";

export const store = configureStore({
    reducer: {
        user: userSlice,
        vaccine: vaccineSlice,
    }
})