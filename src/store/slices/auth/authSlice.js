import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    accessToken: null,
  },
  reducers: {
    setUser: (state, action) => {
      console.log('setUser sss', action.payload)
      state.user = action.payload
    },
    setAccessToken: (state, action) => {
      console.log('setAccessToken ssss', action.payload);
      state.accessToken = action.payload
    },
  }
})

export const { setUser, setAccessToken } = authSlice.actions

export default authSlice.reducer