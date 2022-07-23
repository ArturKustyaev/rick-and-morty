import cn from 'classnames'
import { FC } from 'react'
import { Skeleton } from 'ui'
import { CHARACTERISTIC_NAME } from 'utils'
import classes from './CharacterInfoSkeleton.module.css'

interface CharactetInfoSkeletonProps {}

export const CharacterInfoSkeleton: FC<CharactetInfoSkeletonProps> = (): JSX.Element => {
	return (
		<div className={classes.container}>
			<Skeleton className={classes.image} />
			<div className={classes.table}>
				{[0, 0, 0, 0, 0].map((_, index) => (
					<div className={classes.row} key={index}>
						<div className={classes.cell}>
							<span className={classes.label}>{CHARACTERISTIC_NAME[index]}:</span>
						</div>
						<div className={cn(classes.cell, classes.cell_grow)}>
							<Skeleton className={classes.value} />
						</div>
					</div>
				))}
			</div>
			<Skeleton className={classes.button} />
		</div>
	)
}
