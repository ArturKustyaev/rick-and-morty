import { FC, ReactNode } from 'react'
import classes from './Row.module.css'

interface RowProps {
	children?: ReactNode
}

export const Row: FC<RowProps> = ({ children }): JSX.Element => {
	return <div className={classes.row}>{children}</div>
}
