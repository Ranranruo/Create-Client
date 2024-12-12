import { createSlice } from "@reduxjs/toolkit";

const darkModeSlice = createSlice({
    name: 'darkMode', // 슬라이스 이름
    initialState: true, // 상태 초기값
    reducers: {
        // 상태를 변경할 수 있는 함수
        setDarkMode: () => {
            return true; // 함수의 반환값이 상태의 값에 들어감
        },

        setLightMode: () => {
            return false;
        },

        // state => 현재 상태 값 action => 인자로 받는 값
        chooseMode: (state, action) => { 
            return action.payload;
        },

        toggleMode: (state) => {
            return !state;
        }
    }

});

export const darkModeActions = darkModeSlice.actions;
export default darkModeSlice.reducer;

console.log(darkModeSlice);