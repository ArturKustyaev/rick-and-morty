import classNames from 'classnames'
import { FC } from 'react'
import classes from './Skeleton.module.css'

type VariantType = 'circular' | 'rectangle'

interface SekeletonProps {
	className?: string
	variant?: VariantType
}

export const Skeleton: FC<SekeletonProps> = ({ className, variant = 'rectangle' }): JSX.Element => {
	return <div className={classNames(classes.skeleton, classes[`variant_${variant}`], className)} />
}
