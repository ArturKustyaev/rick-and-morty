import useUrlState from '@ahooksjs/use-url-state'
import { CharacterInfo, CharacterInfoModalSkeleton } from 'components'
import { FC } from 'react'
import { useGetCharacterByIdQuery } from 'services'
import { Modal, ModalProps } from 'ui'
import classes from './CharacterInfoModal.module.css'

interface CharacterInfoModalProps extends ModalProps {}

export const CharacterInfoModal: FC<CharacterInfoModalProps> = ({
	isOpen,
	onClose
}): JSX.Element => {
	const [urlParams] = useUrlState<{ id: number | undefined }>({ id: 0 })

	const { data, isFetching, isSuccess } = useGetCharacterByIdQuery(urlParams.id)

	return (
		<Modal className={classes.modal_container} isOpen={isOpen} onClose={onClose}>
			{isFetching && <CharacterInfoModalSkeleton />}
			{isSuccess && data && <CharacterInfo character={data} />}
		</Modal>
	)
}
