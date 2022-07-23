import { FC } from 'react'
import classes from './EpisodeCard.module.css'

interface EpisodeCardProps {
	episode: Episode
}

export const EpisodeCard: FC<EpisodeCardProps> = ({ episode }): JSX.Element => {
	
	return (
		<div className={classes.episode_container}>
			<h3 className={classes.title}>
				{episode.name} / {episode.episode}
			</h3>
			<span className={classes.date}>{episode.air_date}</span>
		</div>
	)
}
