import { configureStore } from "@reduxjs/toolkit";
import memberReducer from "./MemberSlice";
import darkModeReducer from "./DarkModeSlice";

const store = configureStore({ // store 생성
    reducer: {
        member: memberReducer,
        darkMode: darkModeReducer // 만든 slice에서 export 했던 reducer를 넣어줌
    }
});

export default store;