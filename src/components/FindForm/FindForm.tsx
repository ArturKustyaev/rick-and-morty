import useUrlState from '@ahooksjs/use-url-state'
import { useDebounce } from 'hooks'
import { ChangeEvent, FC, useCallback, useEffect, useState } from 'react'
import { Input } from 'ui'
import classes from './FindForm.module.css'

interface FindFormProps {}

export const FindForm: FC<FindFormProps> = (): JSX.Element => {
	const [urlParams, setUrlParams] = useUrlState({ name: '' })
	const [inputValue, setInputValue] = useState(urlParams.name)
	const debounceInputValue = useDebounce(inputValue.trim(), 500)

	useEffect(() => {
		setUrlParams({ name: debounceInputValue ? debounceInputValue : undefined })
	}, [debounceInputValue, setUrlParams])

	const inputHandler = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			setInputValue(e.target.value)
		},
		[setInputValue]
	)

	return (
		<form className={classes.form}>
			<Input
				className={classes.input}
				placeholder='find a character'
				value={inputValue}
				onChange={inputHandler}
			/>
		</form>
	)
}
