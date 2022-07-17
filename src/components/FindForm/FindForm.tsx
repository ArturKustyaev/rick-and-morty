import { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Button, Input } from 'UI'
import classes from './FindForm.module.css'

interface FindFormProps {}

export const FindForm: FC<FindFormProps> = (): JSX.Element => {
	const [searchParams, setSearchParams] = useSearchParams()
	const [inputValue, setInputValue] = useState(searchParams.get('name') || '')

	const submitHandler = (e: FormEvent) => {
		e.preventDefault()

		searchParams.set('name', inputValue)

		if (searchParams.get('name')) {
			setSearchParams(searchParams)
		} else {
			searchParams.delete('name')
			setSearchParams(searchParams)
		}
	}

	const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value)
	}

	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<Input
				className={classes.input}
				placeholder='find a character'
				value={inputValue}
				onChange={inputHandler}
			/>
			<Button className={classes.button}>find</Button>
		</form>
	)
}
