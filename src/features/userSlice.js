import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user =  action.payload;
    },
    logout: (state) => {
      state.user = null
    }
  }
})

// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions

export const selectUser = (state) => state.counter.value

export default userSlice.reducer
