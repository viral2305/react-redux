import { configureStore } from '@reduxjs/toolkit'
import  counterReducers  from '../features/counter/counterSlice'
import themeReducers from '../features/theme/themeSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducers,
        theme: themeReducers,
        
    },
  })