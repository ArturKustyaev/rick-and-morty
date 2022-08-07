import classNames from 'classnames'
import { FC, HTMLAttributes, ReactNode } from 'react'
import classes from './Button.module.css'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
	className?: string
	disabled?: boolean
	children?: ReactNode
}

export const Button: FC<ButtonProps> = ({
	className,
	children,
	disabled,
	...rest
}): JSX.Element => {
	return (
		<button className={classNames(classes.button, className)} disabled={disabled} {...rest}>
			{children}
		</button>
	)
}
