import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const characterApi = createApi({
	reducerPath: 'api/character',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api' }),
	endpoints: builder => ({
		getCharacters: builder.query<
			ResponseData<Character[]>,
			{ name: string; status: string; gender: string; page: number }
		>({
			query: params => {
				return {
					url: 'character',
					method: 'GET',
					params: {
						...params
					}
				}
			}
		})
	})
})

export const { useGetCharactersQuery } = characterApi
