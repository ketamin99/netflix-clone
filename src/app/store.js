import { configureStore } from '@reduxjs/toolkit'
import  useReducer  from '../features/userSlice'

export const clientStore = configureStore({
  reducer: {
      user: useReducer,
  },
})
