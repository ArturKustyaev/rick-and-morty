import classNames from 'classnames'
import { Filter } from 'components'
import { FC } from 'react'
import classes from './Sidebar.module.css'

interface SidebarProps {
	className?: string
}

export const Sidebar: FC<SidebarProps> = ({ className }): JSX.Element => {
	return (
		<div className={classNames(classes.sidebar, className)}>
			<Filter />
		</div>
	)
}
