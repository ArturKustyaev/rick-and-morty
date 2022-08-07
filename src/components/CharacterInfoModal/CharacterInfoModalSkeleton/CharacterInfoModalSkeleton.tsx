import { CharacterInfoSkeleton, EpisodeCardSkeleton } from 'components'
import { FC } from 'react'
import classes from './CharacterInfoModalSkeleton.module.css'

interface CharacterInfoModalSkeletonProps {}

export const CharacterInfoModalSkeleton: FC<CharacterInfoModalSkeletonProps> = (): JSX.Element => {
	return (
		<div className={classes.container}>
			<div className={classes.character_info_container}>
				<CharacterInfoSkeleton />
			</div>
			<div className={classes.episodes_container}>
				<h3 className={classes.episodes_title}>episodes</h3>
				<div className={classes.episodes_list}>
					{[0, 0, 0, 0].map((_, index) => (
						<EpisodeCardSkeleton className={classes.episodes} key={index} />
					))}
				</div>
			</div>
		</div>
	)
}
