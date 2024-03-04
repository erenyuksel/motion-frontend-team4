import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: 'user',
    initialState: {token: undefined},
    reducers: {
        userLogin: (state, action) => {
            state.token = action.payload
        },

        userLogout: (state) => {
            state.token = null
        }
    }
})

export const {userLogin, userLogout} = UserSlice.actions
export default UserSlice.reducer