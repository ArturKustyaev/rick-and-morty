import useUrlState from '@ahooksjs/use-url-state'
import classNames from 'classnames'
import { Character, CharacterSkeleton } from 'components'
import { FC, useEffect, useState } from 'react'
import { useGetCharactersQuery } from 'services'
import { Pagination } from 'ui'
import classes from './CharacterList.module.css'

interface CharacterListProps {
	className?: string
}

export const CharacterList: FC<CharacterListProps> = ({ className }): JSX.Element => {
	const [urlParams, setUrlParams] = useUrlState({
		name: '',
		status: '',
		gender: '',
		page: 1
	})

	const [currentPage, setCurrentPage] = useState<number>(urlParams.page)

	const { data, isFetching, isSuccess, error } = useGetCharactersQuery({
		gender: urlParams.gender,
		status: urlParams.status,
		name: urlParams.name,
		page: urlParams.page
	})

	useEffect(() => {
		setUrlParams({ page: currentPage !== 1 ? currentPage : undefined })
	}, [currentPage, setUrlParams])

	useEffect(() => {
		setUrlParams({ page: undefined })
	}, [urlParams.gender, urlParams.name, urlParams.status, setUrlParams])

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [urlParams.page])

	const setPaginateHandler = ({ selected }: { selected: number }) => {
		setCurrentPage(selected + 1)
	}

	return (
		<>
			<div className={classNames(classes.character_list, className)}>
				{isFetching &&
					[0, 0, 0, 0, 0, 0].map((_, index) => (
						<CharacterSkeleton className={classes.character} key={index} />
					))}
				{isSuccess &&
					data?.results.map(character => (
						<Character className={classes.character} key={character.id} character={character} />
					))}
			</div>
			{isSuccess && (
				<Pagination
					className={classes.pagination}
					initialPage={urlParams.page - 1}
					pagesCount={data.info.pages}
					onChange={setPaginateHandler}
				/>
			)}
		</>
	)
}
