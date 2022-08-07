import useUrlState from '@ahooksjs/use-url-state'
import cn from 'classnames'
import { CharacterCard, CharacterInfoModal, CharacterSkeleton } from 'components'
import { FC, useEffect, useState } from 'react'
import { useGetCharactersQuery } from 'services'
import { Pagination } from 'ui'
import classes from './CharacterList.module.css'

interface CharacterListProps {
	className?: string
}

export const CharacterList: FC<CharacterListProps> = ({ className }): JSX.Element => {
	const [urlParams, setUrlParams] = useUrlState({
		id: undefined,
		name: '',
		status: '',
		gender: '',
		page: 1
	})

	const [currentPage, setCurrentPage] = useState<number>(urlParams.page)
	const [isModalOpen, setIsModalOpen] = useState(urlParams.id !== undefined)

	const { data, isFetching, isSuccess } = useGetCharactersQuery({
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

	const setModalCloseHandler = () => {
		setIsModalOpen(false)
		setUrlParams({ id: undefined })
	}

	const onShowInfo = (id: number) => {
		setIsModalOpen(true)
		setUrlParams({ id })
	}

	return (
		<>
			<div className={cn(classes.character_list, className)}>
				{isFetching &&
					[0, 0, 0, 0, 0, 0].map((_, index) => (
						<CharacterSkeleton className={classes.character} key={index} />
					))}
				{isSuccess &&
					data?.results.map(character => (
						<CharacterCard
							className={classes.character}
							key={character.id}
							character={character}
							onShowInfo={onShowInfo}
						/>
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
			{isModalOpen && <CharacterInfoModal isOpen={isModalOpen} onClose={setModalCloseHandler} />}
		</>
	)
}
