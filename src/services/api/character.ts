import { api } from './api'

export const character = api.injectEndpoints({
	endpoints: builder => ({
		getCharacters: builder.query<
			ResponseData<Character[]>,
			{ name: string; status: string; gender: string; page: number }
		>({
			query: params => {
				return {
					url: '/character',
					method: 'GET',
					params
				}
			}
		}),
		getCharacterById: builder.query<Character, number>({
			query: id => {
				return {
					url: `/character/${id}`,
					method: 'GET'
				}
			}
		})
	})
})

export const { useGetCharactersQuery, useGetCharacterByIdQuery } = character
