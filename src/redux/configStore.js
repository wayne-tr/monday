import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {name: () => "Duc Tran"},
})