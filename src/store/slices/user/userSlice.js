import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: null,
  },
  reducers: {
    setUser: (state, payload) => {
      state.value = payload
    },
  }
})

export const { setUser } = userSlice.actions

export default userSlice.reducer