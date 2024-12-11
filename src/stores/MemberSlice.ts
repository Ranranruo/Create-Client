import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import MemberType from "../types/Member";

const initialState: MemberType = {id: "a"};

const memberSlice = createSlice({
    name: 'member',
    initialState,
    reducers: {
        loadMember : (state: MemberType, action: PayloadAction<MemberType>) => {
            return action.payload;
        }
    }
});

export const memberActions = memberSlice.actions;
export default memberSlice.reducer;