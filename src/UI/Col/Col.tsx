import classNames from 'classnames'
import { FC, ReactNode } from 'react'
import classes from './Col.module.css'

interface ColProps {
	size?: number
	children?: ReactNode
}

export const Col: FC<ColProps> = ({ size = 3, children }): JSX.Element => {
	return <div className={classNames(classes.col, classes[`col_${size}`])}>{children}</div>
}
