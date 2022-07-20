import classNames from 'classnames'
import { ChangeEvent, FC, HTMLAttributes, memo } from 'react'
import classes from './Radiobutton.module.css'

interface RadiobuttonProps extends HTMLAttributes<HTMLInputElement> {
	className?: string
	id?: string
	label?: string
	name?: string
	checked?: boolean
	value?: string
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Radiobutton: FC<RadiobuttonProps> = memo(
	({ className, id, label, value, name, onChange, checked, ...rest }): JSX.Element => {
		return (
			<label className={classNames(classes.radio_container, className)}>
				<input
					className={classes.radio}
					type='radio'
					name={name}
					value={value}
					checked={checked}
					onChange={onChange}
					{...rest}
				/>
				<span className={classNames(classes.custom_radio_container)}>
					<span
						className={classNames(classes.custom_radio_dot, {
							[classes.custom_radio_dot__active]: checked
						})}
					/>
				</span>
				{label && (
					<span
						className={classNames(classes.radio_label, {
							[classes.radio_label__active]: checked
						})}
					>
						{label}
					</span>
				)}
			</label>
		)
	}
)
