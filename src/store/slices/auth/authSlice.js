import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    allUsers: [],
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
    setAllUsers: (state, action) => {
      state.allUsers = action.payload
    },
  }
})

export const { setUser, setAllUsers} = authSlice.actions

export default authSlice.reducer