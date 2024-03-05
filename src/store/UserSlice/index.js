import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: 'user',
    initialState: {token: undefined, user: {}},
    reducers: {
        userLogin: (state, action) => {
            state.token = action.payload
        },

        userLogout: (state) => {
            state.token = null
        },

        userObject: (state, action) => {
            state.user = action.payload;
        },
    }
    
})

export const {userLogin, userLogout, userObject} = UserSlice.actions
export default UserSlice.reducer