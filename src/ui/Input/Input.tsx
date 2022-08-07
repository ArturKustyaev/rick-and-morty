import classNames from 'classnames'
import { FC, HTMLAttributes } from 'react'
import classes from './Input.module.css'

interface InputProps extends HTMLAttributes<HTMLInputElement> {
	className?: string
	value?: string
}

export const Input: FC<InputProps> = ({ className, value, ...rest }): JSX.Element => {
	return (
		<input className={classNames(classes.input, className)} value={value} type='text' {...rest} />
	)
}
