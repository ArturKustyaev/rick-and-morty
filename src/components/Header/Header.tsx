import { Container } from 'UI'
import { FC } from 'react'
import logo from 'static/images/logo.png'
import classes from './Header.module.css'

interface HeaderProps {}

export const Header: FC<HeaderProps> = (): JSX.Element => {
	return (
		<div className={classes.header}>
			<Container>
				<div className={classes.header_inner}>
					<img src={logo} alt='logo' />
					<nav>
						<ul>
							<li>locations</li>
							<li>episodes</li>
						</ul>
					</nav>
				</div>
			</Container>
		</div>
	)
}
