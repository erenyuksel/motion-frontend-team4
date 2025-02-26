import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  initialState: { token: undefined, user: {}, avatar: null, friendList: [] },
  reducers: {
    userLogin: (state, action) => {
      state.token = action.payload;
    },

    userLogout: (state) => {
      state.token = null;
    },

    userObject: (state, action) => {
      state.user = action.payload;
      console.log(state.user);
    },

    setAvatar: (state, action) => {
      state.avatar = action.payload;
    },
    setFriendList: (state, action) => {
      state.friendList = action.payload;
    },
  },
});

export const { userLogin, userLogout, userObject, setAvatar, setFriendList } =
  UserSlice.actions;
export default UserSlice.reducer;
