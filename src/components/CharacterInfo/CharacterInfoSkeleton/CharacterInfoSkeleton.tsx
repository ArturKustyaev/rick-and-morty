import { FC } from 'react'
import { Skeleton } from 'ui'
import classes from './CharacterInfoSkeleton.module.css'

interface CharactetInfoSkeletonProps {}

export const CharacterInfoSkeleton: FC<CharactetInfoSkeletonProps> = (): JSX.Element => {
  return (
    <div className={classes.container}>
      <Skeleton className={classes.image}/>
      <Skeleton className={classes.characteristic}/>
      <Skeleton className={classes.characteristic}/>
      <Skeleton className={classes.characteristic}/>
      <Skeleton className={classes.characteristic}/>
      <Skeleton className={classes.characteristic}/>
      <Skeleton className={classes.button}/>
    </div>
  )
}