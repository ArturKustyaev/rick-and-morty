import classNames from 'classnames'
import { Skeleton } from 'ui'
import { FC } from 'react'
import classes from './CharacterSkeleton.module.css'

interface CharacterSkeletonProps {
	className?: string
}

export const CharacterSkeleton: FC<CharacterSkeletonProps> = ({ className }): JSX.Element => {
	return (
		<div className={classNames(classes.skeleton, className)}>
			<Skeleton className={classes.image} />
			<Skeleton className={classes.name} />
			<Skeleton className={classes.characteristics} />
			<Skeleton className={classes.button} />
		</div>
	)
}
