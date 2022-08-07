import classNames from 'classnames'
import { FC, HTMLAttributes, MouseEvent, ReactNode, useCallback } from 'react'
import classes from './Modal.module.css'

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
	className?: string
	children?: ReactNode
	isOpen: boolean
	onClose: () => void
}

export const Modal: FC<ModalProps> = ({
	className,
	children,
	isOpen,
	onClose,
	...rest
}): JSX.Element => {
	const stopPropagation = useCallback((e: MouseEvent<HTMLDivElement>) => {
		e.stopPropagation()
	}, [])

	return (
		<div
			className={classNames(classes.modal_backdrop, { [classes.modal_backdrop__active]: isOpen })}
			onClick={onClose}
		>
			<div className={classNames(classes.modal, className)} onClick={stopPropagation} {...rest}>
				{children}
			</div>
		</div>
	)
}
