import { configureStore } from '@reduxjs/toolkit'
import { characterApi } from 'services/api'

export const store = configureStore({
	reducer: {
		[characterApi.reducerPath]: characterApi.reducer
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(characterApi.middleware)
})
