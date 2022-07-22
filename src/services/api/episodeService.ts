import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const episodeService = createApi({
	reducerPath: 'episodes/api',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api' }),
	endpoints: builder => ({
		getEpicodeById: builder.query<Episode[], number | number[]>({
			query: id => {
				return {
					url: `episode/${id}`,
					method: 'GET'
				}
			},
			transformResponse: (response: Episode[]) => {
				if (!Array.isArray(response)) return [response]
				
				return response
			} 
		})
	})
})

export const { useGetEpicodeByIdQuery } = episodeService
