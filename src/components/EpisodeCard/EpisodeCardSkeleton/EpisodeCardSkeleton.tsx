import classNames from 'classnames'
import { FC } from 'react'
import { Skeleton } from 'ui'
import classes from './EpisodeCardSkeleton.module.css'

interface EpisodeCardSkeletonProps {
	className?: string
}

export const EpisodeCardSkeleton: FC<EpisodeCardSkeletonProps> = ({ className }): JSX.Element => {
	return (
		<div className={classNames(classes.container, className)}>
			<Skeleton className={classes.title} />
			<Skeleton className={classes.date} />
		</div>
	)
}
