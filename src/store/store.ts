import { configureStore } from '@reduxjs/toolkit'
import { characterApi, episodeService } from 'services'

export const store = configureStore({
	reducer: {
		[characterApi.reducerPath]: characterApi.reducer,
		[episodeService.reducerPath]: episodeService.reducer
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(characterApi.middleware, episodeService.middleware)
})
