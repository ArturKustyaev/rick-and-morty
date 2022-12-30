import { api } from './api'

export const episode = api.injectEndpoints({
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

export const { useGetEpicodeByIdQuery } = episode
