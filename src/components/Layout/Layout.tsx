import { Header } from 'components'
import { FC, HTMLAttributes, ReactNode } from 'react'
import { Container } from 'UI'
import classes from './Layout.module.css'

interface LayoutProps extends HTMLAttributes<HTMLDivElement> {
	children?: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }): JSX.Element => {
	return (
		<>
			<Header />
			<Container>{children}</Container>
		</>
	)
}
