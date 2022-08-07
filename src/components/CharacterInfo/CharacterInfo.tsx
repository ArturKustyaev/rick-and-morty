import cn from 'classnames'
import { EpisodeCard, EpisodeCardSkeleton } from 'components'
import { FC, useCallback, useState } from 'react'
import { useGetEpicodeByIdQuery } from 'services'
import { Button, Skeleton } from 'ui'
import { getLastUrlParam } from 'utils'
import classes from './CharacterInfo.module.css'

interface CharacterInfoProps {
	character: Character
	onClose: () => void
}

export const CharacterInfo: FC<CharacterInfoProps> = ({ character, onClose }): JSX.Element => {
	const [isImageLoading, setIsImageLoading] = useState(true)
	const episodesId = character.episode.map(episodeUrl => Number(getLastUrlParam(episodeUrl)))

	const { data: episodes, isFetching, isSuccess } = useGetEpicodeByIdQuery(episodesId)

	const onImageLoad = useCallback(() => {
		setIsImageLoading(false)
	}, [setIsImageLoading])

	const closeHandler = () => {
		onClose()
	}

	return (
		<div className={classes.character_container}>
			<div className={classes.inner}>
				<div className={classes.character_info}>
					{isImageLoading && <Skeleton className={classes.image_skeleton} />}
					<img
						className={cn(classes.character_image, {
							[classes.character_image__hide]: isImageLoading
						})}
						src={character.image}
						alt={character.name}
						onLoad={onImageLoad}
					/>
					<div className={classes.characteristics}>
						<div className={classes.table_row}>
							<div className={classes.table_cell}>
								<span className={classes.label}>name:</span>
							</div>
							<div className={cn(classes.table_cell, classes.tables_cell_grow)}>
								<span className={classes.value}>{character.name}</span>
							</div>
						</div>
						<div className={classes.table_row}>
							<div className={classes.table_cell}>
								<span className={classes.label}>gender:</span>
							</div>
							<div className={cn(classes.table_cell, classes.tables_cell_grow)}>
								<span className={classes.value}>{character.gender}</span>
							</div>
						</div>
						<div className={classes.table_row}>
							<div className={classes.table_cell}>
								<span className={classes.label}>status:</span>
							</div>
							<div className={cn(classes.table_cell, classes.tables_cell_grow)}>
								<span className={classes.value}>{character.status}</span>
							</div>
						</div>
						<div className={classes.table_row}>
							<div className={classes.table_cell}>
								<span className={classes.label}>species:</span>
							</div>
							<div className={cn(classes.table_cell, classes.tables_cell_grow)}>
								<span className={classes.value}>{character.species}</span>
							</div>
						</div>
						<div className={classes.table_row}>
							<div className={classes.table_cell}>
								<span className={classes.label}>location:</span>
							</div>
							<div className={cn(classes.table_cell, classes.tables_cell_grow)}>
								<span className={classes.value}>{character.location.name}</span>
							</div>
						</div>
					</div>
				</div>
				<div className={classes.episodes_container}>
					<h3 className={classes.episodes_title}>episodes</h3>
					<div className={classes.episodes_list}>
						{isFetching &&
							[0, 0, 0, 0].map((_, index) => (
								<EpisodeCardSkeleton className={classes.skeleton} key={index} />
							))}
						{isSuccess &&
							episodes.map(episode => <EpisodeCard key={episode.id} episode={episode} />)}
					</div>
				</div>
			</div>
			<Button className={classes.button} onClick={closeHandler}>
				close
			</Button>
		</div>
	)
}
