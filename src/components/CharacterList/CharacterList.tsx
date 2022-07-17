import classNames from 'classnames'
import { Character, CharacterSkeleton } from 'components'
import { FC } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useGetCharactersQuery } from 'services'
import classes from './CharacterList.module.css'

interface CharacterListProps {
	className?: string
}

export const CharacterList: FC<CharacterListProps> = ({ className }): JSX.Element => {
	const [params] = useSearchParams()

	const { data, isFetching, isSuccess, error } = useGetCharactersQuery({
		name: params.get('name') || '',
		status: params.get('status') || '',
		gender: params.get('gender') || ''
	})

	return (
		<div className={classNames(classes.character_list, className)}>
			{isFetching &&
				[0, 0, 0, 0, 0, 0].map((_, index) => (
					<CharacterSkeleton className={classes.character} key={index} />
				))}
			{isSuccess &&
				data?.results.map(character => (
					<Character className={classes.character} key={character.id} character={character} />
				))}
		</div>
	)
}
