import { configureStore } from '@reduxjs/toolkit'
import listReduser from './../fech/reducer'
export const store = configureStore({
  reducer: {
    list: listReduser,
},
})