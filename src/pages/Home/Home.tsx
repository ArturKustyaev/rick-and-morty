import { CharacterList, FindForm, Layout, Sidebar } from 'components'
import { FC } from 'react'
import { Col, Row } from 'UI'
import classes from './Home.module.css'

interface HomeProps {}

export const Home: FC<HomeProps> = (): JSX.Element => {
	return (
		<Layout>
			<h1 className={classes.page_title}>Characters</h1>
			<Row>
				<Col size={3}>
					<Sidebar />
				</Col>
				<Col size={9}>
					<FindForm />
					<CharacterList />
				</Col>
			</Row>
		</Layout>
	)
}
