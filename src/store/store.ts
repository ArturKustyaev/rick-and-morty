import { configureStore } from '@reduxjs/toolkit'
import { api, character, episode } from 'services'

export const store = configureStore({
	reducer: {
		[api.reducerPath]: api.reducer
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(character.middleware, episode.middleware)
})
