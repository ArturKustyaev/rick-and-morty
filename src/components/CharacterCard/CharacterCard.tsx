import classNames from 'classnames'
import { FC, HTMLAttributes, useCallback, useState } from 'react'
import { Button, Skeleton } from 'ui'
import classes from './CharacterCard.module.css'

interface CharacterProps extends HTMLAttributes<HTMLDivElement> {
	className?: string
	character: Character
	onShowInfo?: (id: number) => void
}

export const CharacterCard: FC<CharacterProps> = ({
	className,
	character,
	onShowInfo = () => {},
	...rest
}): JSX.Element => {
	const [isImageLoading, setIsImageLoading] = useState(true)

	const onImageLoad = useCallback(() => {
		setIsImageLoading(false)
	}, [setIsImageLoading])

	const showMoreHandler = () => {
		onShowInfo(character.id)
	}

	return (
		<div className={classNames(classes.character, className)} {...rest}>
			<div className={classes.image_container}>
				{isImageLoading && <Skeleton className={classes.image_skeleton} />}

				<img
					className={classNames(classes.image, {
						[classes.image__gray]: character.status === 'Dead',
						[classes.image_hide]: isImageLoading
					})}
					src={character.image}
					alt={character.name}
					onLoad={onImageLoad}
				/>
				<div
					className={classNames(
						classes.status_note,
						classes[`status_note__${character.status.toLowerCase()}`]
					)}
				>
					{character.status}
				</div>
			</div>

			<h2 className={classes.title}>{character.name}</h2>
			<p className={classes.characteristics}>
				{character.gender} / {character.species}
			</p>
			<Button className={classes.button} onClick={showMoreHandler}>
				show more
			</Button>
		</div>
	)
}
