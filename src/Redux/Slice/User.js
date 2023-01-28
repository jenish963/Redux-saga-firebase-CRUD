import { createSlice } from "@reduxjs/toolkit";

const user = createSlice ({
    name: 'user',
    initialState: {
        id: "",
        firstname: "",
        lastname: "",
        profession: "",
        mobile: "",
        email: "",
        address: ""
    },
    reducers: {
        setUserSlice: (state, action) => {
            state = action.payload
            return state
        }
    }
})

export const { setUserSlice } = user.actions
export default user.reducer