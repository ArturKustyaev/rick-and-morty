import classNames from 'classnames'
import { EpisodeCard, EpisodeCardSkeleton } from 'components'
import { FC, useCallback, useState } from 'react'
import { useGetEpicodeByIdQuery } from 'services'
import { Button, Skeleton } from 'ui'
import { getLastUrlParam } from 'utils'
import classes from './CharacterInfo.module.css'

interface CharacterInfoProps {
	character: Character
}

export const CharacterInfo: FC<CharacterInfoProps> = ({ character }): JSX.Element => {
	const [isImageLoading, setIsImageLoading] = useState(true)
	const episodesId = character.episode.map(episodeUrl => Number(getLastUrlParam(episodeUrl)))

	const { data: episodes, isFetching, isSuccess } = useGetEpicodeByIdQuery(episodesId)

	const onImageLoad = useCallback(() => {
		setIsImageLoading(false)
	}, [setIsImageLoading])

	return (
		<div className={classes.character_container}>
			<div className={classes.inner}>
				<div className={classes.character_info}>
					{isImageLoading && <Skeleton className={classes.image_skeleton}/>}
					<img
						className={classNames(classes.character_image, {
							[classes.character_image__hide]: isImageLoading
						})}
						src={character.image}
						alt={character.name}
						onLoad={onImageLoad}
					/>
					<div className={classes.characteristics}>
						<div className={classes.characteristic_col}>
							<span className={classes.label}>name:</span>
							<span className={classes.label}>gender:</span>
							<span className={classes.label}>status:</span>
							<span className={classes.label}>species:</span>
							<span className={classes.label}>location:</span>
						</div>
						<div className={classes.characteristic_col}>
							<span className={classes.value}>{character.name}</span>
							<span className={classes.value}>{character.gender}</span>
							<span className={classes.value}>{character.status}</span>
							<span className={classes.value}>{character.species}</span>
							<span className={classes.value}>{character.location.name}</span>
						</div>
					</div>
				</div>
				<div className={classes.episodes_container}>
					<h3 className={classes.episodes_title}>episodes</h3>
					<div className={classes.episodes_list}>
						{isFetching &&
							[0, 0, 0, 0, 0, 0].map((_, index) => (
								<EpisodeCardSkeleton className={classes.skeleton} key={index} />
							))}
						{isSuccess &&
							episodes?.map(episode => <EpisodeCard key={episode.id} episode={episode} />)}
					</div>
				</div>
			</div>
			<Button className={classes.button}>close</Button>
		</div>
	)
}
