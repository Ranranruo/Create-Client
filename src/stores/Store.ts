import { configureStore } from "@reduxjs/toolkit";
import memberReducer from "./MemberSlice";

const store = configureStore({
    reducer: {
        member: memberReducer,
    }
});

export default store;