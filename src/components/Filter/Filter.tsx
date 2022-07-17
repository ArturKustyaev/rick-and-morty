import { ChangeEvent, FC, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Radiobutton } from 'UI'
import classes from './Filter.module.css'

interface FilterProps {}

export const Filter: FC<FilterProps> = (): JSX.Element => {
	const [searchParams, setSearchParams] = useSearchParams()
	const [selectedStatus, setSelectedStatus] = useState(searchParams.get('status') || '')
	const [selectedGender, setSelectedGender] = useState(searchParams.get('gender') || '')

	useEffect(() => {
		searchParams.set('status', selectedStatus)

		if (searchParams.get('status')) {
			setSearchParams(searchParams)
		} else {
			searchParams.delete('status')
			setSearchParams(searchParams)
		}
	}, [searchParams, setSearchParams, selectedStatus])

	useEffect(() => {
		searchParams.set('gender', selectedGender)

		if (searchParams.get('gender')) {
			setSearchParams(searchParams)
		} else {
			searchParams.delete('gender')
			setSearchParams(searchParams)
		}
	}, [searchParams, setSearchParams, selectedGender])

	const selectHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setSelectedStatus(e.target.value)
	}

	const selectGenderHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setSelectedGender(e.target.value)
	}

	return (
		<div className={classes.root}>
			<h2 className={classes.title}>Filters</h2>
			<div className={classes.filter_container}>
				<p className={classes.filter_title}>Status</p>
				<div className={classes.filter_list}>
					<Radiobutton
						className={classes.radio}
						name='status'
						value=''
						label='all'
						checked={selectedStatus === ''}
						onChange={selectHandler}
					/>
					<Radiobutton
						className={classes.radio}
						name='status'
						value='alive'
						label='alive'
						checked={selectedStatus === 'alive'}
						onChange={selectHandler}
					/>
					<Radiobutton
						className={classes.radio}
						name='status'
						value='dead'
						label='dead'
						checked={selectedStatus === 'dead'}
						onChange={selectHandler}
					/>
					<Radiobutton
						className={classes.radio}
						name='status'
						value='unknown'
						label='unknown'
						checked={selectedStatus === 'unknown'}
						onChange={selectHandler}
					/>
				</div>
			</div>
			<div className={classes.filter_container}>
				<p className={classes.filter_title}>Gender</p>
				<div className={classes.filter_list}>
					<Radiobutton
						className={classes.radio}
						name='gender'
						value=''
						label='all'
						checked={selectedGender === ''}
						onChange={selectGenderHandler}
					/>
					<Radiobutton
						className={classes.radio}
						name='gender'
						value='male'
						label='male'
						checked={selectedGender === 'male'}
						onChange={selectGenderHandler}
					/>
					<Radiobutton
						className={classes.radio}
						name='gender'
						value='female'
						label='female'
						checked={selectedGender === 'female'}
						onChange={selectGenderHandler}
					/>
					<Radiobutton
						className={classes.radio}
						name='gender'
						value='genderless'
						label='genderless'
						checked={selectedGender === 'genderless'}
						onChange={selectGenderHandler}
					/>
					<Radiobutton
						className={classes.radio}
						name='gender'
						value='unknown'
						label='unknown'
						checked={selectedGender === 'unknown'}
						onChange={selectGenderHandler}
					/>
				</div>
			</div>
		</div>
	)
}
